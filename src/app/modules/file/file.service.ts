import httpStatus from "http-status";
import ApiError from "#app/errors/ApiError.js";
import { MIME_TO_FILE_TYPE, type TRenameFile, type TFileType } from "./file.interfaces.js";
import { getActivePackage } from "#app/helpers/packageHelper.js";
import prisma from "../../../config/prisma.js";
import { cloudinary } from "./file.upload.js";

// ─── Helpers ───────────────────────────────────────────────────────────────────

const getResourceType = (mimeType: string): "image" | "video" | "raw" => {
  if (mimeType.startsWith("image/")) return "image";
  if (mimeType.startsWith("video/") || mimeType.startsWith("audio/")) return "video";
  return "raw";
};

const destroyCloudinaryFile = async (publicId: string, mimeType: string) => {
  if (!publicId) return;
  await cloudinary.uploader.destroy(publicId, {
    resource_type: getResourceType(mimeType),
    invalidate: true,
  });
};

// ─── Service Methods ───────────────────────────────────────────────────────────

const uploadFile = async (userId: string, folderId: string, uploadedFile: Express.Multer.File) => {
  const pkg = await getActivePackage(userId);

  const fileType = MIME_TO_FILE_TYPE[uploadedFile.mimetype] as TFileType | undefined;

  if (!fileType) {
    await destroyCloudinaryFile(uploadedFile.filename, uploadedFile.mimetype);
    throw new ApiError(httpStatus.BAD_REQUEST, "Unsupported file type.");
  }

  if (!pkg.allowedFileTypes.includes(fileType as any)) {
    await destroyCloudinaryFile(uploadedFile.filename, uploadedFile.mimetype);
    throw new ApiError(
      httpStatus.FORBIDDEN,
      `File type ${fileType} is not allowed on your ${pkg.name} plan. Allowed types: ${pkg.allowedFileTypes.join(", ")}.`,
    );
  }

  const fileSizeMB = uploadedFile.size / (1024 * 1024);
  if (fileSizeMB > pkg.maxFileSizeMB) {
    await destroyCloudinaryFile(uploadedFile.filename, uploadedFile.mimetype);
    throw new ApiError(
      httpStatus.FORBIDDEN,
      `File size (${fileSizeMB.toFixed(2)}MB) exceeds the ${pkg.maxFileSizeMB}MB limit for your ${pkg.name} plan.`,
    );
  }

  const totalFiles = await prisma.file.count({ where: { userId } });
  if (totalFiles >= pkg.totalFileLimit) {
    await destroyCloudinaryFile(uploadedFile.filename, uploadedFile.mimetype);
    throw new ApiError(httpStatus.FORBIDDEN, `Total file limit (${pkg.totalFileLimit}) reached for your ${pkg.name} plan.`);
  }

  const filesInFolder = await prisma.file.count({ where: { folderId } });
  if (filesInFolder >= pkg.filesPerFolder) {
    await destroyCloudinaryFile(uploadedFile.filename, uploadedFile.mimetype);
    throw new ApiError(
      httpStatus.FORBIDDEN,
      `This folder has reached the maximum files per folder (${pkg.filesPerFolder}) for your ${pkg.name} plan.`,
    );
  }

  const folder = await prisma.folder.findUnique({ where: { id: folderId } });
  if (!folder) {
    await destroyCloudinaryFile(uploadedFile.filename, uploadedFile.mimetype);
    throw new ApiError(httpStatus.NOT_FOUND, "Folder not found!");
  }
  if (folder.userId !== userId) {
    await destroyCloudinaryFile(uploadedFile.filename, uploadedFile.mimetype);
    throw new ApiError(httpStatus.FORBIDDEN, "You do not have access to this folder!");
  }

  const storageKey = uploadedFile.filename; 
  const storageUrl = uploadedFile.path;     

  const newFile = await prisma.file.create({
    data: {
      name: uploadedFile.originalname,
      originalName: uploadedFile.originalname,
      userId,
      folderId,
      fileType: fileType as any,
      mimeType: uploadedFile.mimetype,
      sizeMB: parseFloat(fileSizeMB.toFixed(4)),
      storageKey,
      storageUrl,
    },
  });

  return newFile;
};

const getFileById = async (userId: string, fileId: string) => {
  const file = await prisma.file.findUnique({
    where: { id: fileId },
    include: { folder: { select: { id: true, name: true } } },
  });

  if (!file) {
    throw new ApiError(httpStatus.NOT_FOUND, "File not found!");
  }

  if (file.userId !== userId) {
    throw new ApiError(httpStatus.FORBIDDEN, "You do not have access to this file!");
  }

  return file;
};

const renameFile = async (userId: string, fileId: string, payload: TRenameFile) => {
  const file = await prisma.file.findUnique({ where: { id: fileId } });

  if (!file) {
    throw new ApiError(httpStatus.NOT_FOUND, "File not found!");
  }

  if (file.userId !== userId) {
    throw new ApiError(httpStatus.FORBIDDEN, "You do not have access to this file!");
  }

  const updatedFile = await prisma.file.update({
    where: { id: fileId },
    data: { name: payload.name },
  });

  return updatedFile;
};

const deleteFile = async (userId: string, fileId: string) => {
  const file = await prisma.file.findUnique({ where: { id: fileId } });

  if (!file) {
    throw new ApiError(httpStatus.NOT_FOUND, "File not found!");
  }

  if (file.userId !== userId) {
    throw new ApiError(httpStatus.FORBIDDEN, "You do not have access to this file!");
  }

  await destroyCloudinaryFile(file.storageKey, file.mimeType);
  await prisma.file.delete({ where: { id: fileId } });

  return { deleted: true, fileId };
};

const downloadFile = async (userId: string, fileId: string) => {
  const file = await prisma.file.findUnique({ where: { id: fileId } });

  if (!file) {
    throw new ApiError(httpStatus.NOT_FOUND, "File not found!");
  }

  if (file.userId !== userId) {
    throw new ApiError(httpStatus.FORBIDDEN, "You do not have access to this file!");
  }

  const downloadUrl = cloudinary.url(file.storageKey, {
    resource_type: getResourceType(file.mimeType),
    sign_url: true,
    secure: true,
    attachment: file.originalName,
    expires_at: Math.floor(Date.now() / 1000) + 3600,
  });

  return {
    downloadUrl,
    originalName: file.originalName,
    mimeType: file.mimeType,
  };
};

export const FileService = {
  uploadFile,
  getFileById,
  renameFile,
  deleteFile,
  downloadFile,
};
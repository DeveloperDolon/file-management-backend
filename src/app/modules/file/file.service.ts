import httpStatus from "http-status";
import ApiError from "#app/errors/ApiError.js";
import { MIME_TO_FILE_TYPE, type TRenameFile, type TFileType } from "./file.interfaces.js";
import { getActivePackage } from "#app/helpers/packageHelper.js";
import prisma from "../../../config/prisma.js";
import { cloudinary } from "./file.upload.js";

// ─── Service Methods ───────────────────────────────────────────────────────────

const uploadFile = async (userId: string, folderId: string, uploadedFile: Express.Multer.File) => {
  const pkg = await getActivePackage(userId);

  const fileType = MIME_TO_FILE_TYPE[uploadedFile.mimetype] as TFileType | undefined;

  if (!fileType) {
    // File was already uploaded to Cloudinary — delete it
    if ((uploadedFile as any).public_id) {
      await cloudinary.uploader.destroy((uploadedFile as any).public_id, { invalidate: true });
    }
    throw new ApiError(httpStatus.BAD_REQUEST, "Unsupported file type.");
  }

  if (!pkg.allowedFileTypes.includes(fileType as any)) {
    if ((uploadedFile as any).public_id) {
      await cloudinary.uploader.destroy((uploadedFile as any).public_id, { invalidate: true });
    }
    throw new ApiError(
      httpStatus.FORBIDDEN,
      `File type ${fileType} is not allowed on your ${pkg.name} plan. Allowed types: ${pkg.allowedFileTypes.join(", ")}.`,
    );
  }

  const fileSizeMB = uploadedFile.size / (1024 * 1024);
  if (fileSizeMB > pkg.maxFileSizeMB) {
    if ((uploadedFile as any).public_id) {
      await cloudinary.uploader.destroy((uploadedFile as any).public_id, { invalidate: true });
    }
    throw new ApiError(
      httpStatus.FORBIDDEN,
      `File size (${fileSizeMB.toFixed(2)}MB) exceeds the ${pkg.maxFileSizeMB}MB limit for your ${pkg.name} plan.`,
    );
  }

  const totalFiles = await prisma.file.count({ where: { userId } });
  if (totalFiles >= pkg.totalFileLimit) {
    if ((uploadedFile as any).public_id) {
      await cloudinary.uploader.destroy((uploadedFile as any).public_id, { invalidate: true });
    }
    throw new ApiError(httpStatus.FORBIDDEN, `Total file limit (${pkg.totalFileLimit}) reached for your ${pkg.name} plan.`);
  }

  const filesInFolder = await prisma.file.count({ where: { folderId } });
  if (filesInFolder >= pkg.filesPerFolder) {
    if ((uploadedFile as any).public_id) {
      await cloudinary.uploader.destroy((uploadedFile as any).public_id, { invalidate: true });
    }
    throw new ApiError(
      httpStatus.FORBIDDEN,
      `This folder has reached the maximum files per folder (${pkg.filesPerFolder}) for your ${pkg.name} plan.`,
    );
  }

  const folder = await prisma.folder.findUnique({ where: { id: folderId } });
  if (!folder) {
    if ((uploadedFile as any).public_id) {
      await cloudinary.uploader.destroy((uploadedFile as any).public_id, { invalidate: true });
    }
    throw new ApiError(httpStatus.NOT_FOUND, "Folder not found!");
  }
  if (folder.userId !== userId) {
    if ((uploadedFile as any).public_id) {
      await cloudinary.uploader.destroy((uploadedFile as any).public_id, { invalidate: true });
    }
    throw new ApiError(httpStatus.FORBIDDEN, "You do not have access to this folder!");
  }

  // multer-storage-cloudinary attaches these to the file object
  const storageKey = (uploadedFile as any).public_id as string;
  const storageUrl = (uploadedFile as any).path as string; // Cloudinary secure URL

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

  let resourceType: "image" | "video" | "raw" = "raw";
  if (file.mimeType.startsWith("image/")) resourceType = "image";
  else if (file.mimeType.startsWith("video/") || file.mimeType.startsWith("audio/")) resourceType = "video";

  await cloudinary.uploader.destroy(file.storageKey, {
    resource_type: resourceType,
    invalidate: true,
  });

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

  const downloadUrl = cloudinary.utils.private_download_url(file.storageKey, "", {
    resource_type: file.mimeType.startsWith("image/")
      ? "image"
      : file.mimeType.startsWith("video/") || file.mimeType.startsWith("audio/")
        ? "video"
        : "raw",
    attachment: true,          
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
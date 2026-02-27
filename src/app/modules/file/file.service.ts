
import httpStatus from "http-status";
import fs from "fs";
import path from "path";
import ApiError from "#app/errors/ApiError.js";
import { MIME_TO_FILE_TYPE, type TRenameFile, type TFileType } from "./file.interfaces.js";
import { getActivePackage } from "#app/helpers/packageHelper.js";
import prisma from "#config/prisma.js";

// ─── Service Methods ───────────────────────────────────────────────────────────

const uploadFile = async (userId: string, folderId: string, uploadedFile: Express.Multer.File) => {
  const pkg = await getActivePackage(userId);

  const fileType = MIME_TO_FILE_TYPE[uploadedFile.mimetype] as TFileType | undefined;

  if (!fileType) {
    fs.unlinkSync(uploadedFile.path); // clean up temp file
    throw new ApiError(httpStatus.BAD_REQUEST, "Unsupported file type.");
  }

  if (!pkg.allowedFileTypes.includes(fileType as any)) {
    fs.unlinkSync(uploadedFile.path);
    throw new ApiError(
      httpStatus.FORBIDDEN,
      `File type ${fileType} is not allowed on your ${pkg.name} plan. Allowed types: ${pkg.allowedFileTypes.join(", ")}.`,
    );
  }

  const fileSizeMB = uploadedFile.size / (1024 * 1024);
  if (fileSizeMB > pkg.maxFileSizeMB) {
    fs.unlinkSync(uploadedFile.path);
    throw new ApiError(
      httpStatus.FORBIDDEN,
      `File size (${fileSizeMB.toFixed(2)}MB) exceeds the ${pkg.maxFileSizeMB}MB limit for your ${pkg.name} plan.`,
    );
  }

  const totalFiles = await prisma.file.count({ where: { userId } });
  if (totalFiles >= pkg.totalFileLimit) {
    fs.unlinkSync(uploadedFile.path);
    throw new ApiError(httpStatus.FORBIDDEN, `Total file limit (${pkg.totalFileLimit}) reached for your ${pkg.name} plan.`);
  }

  const filesInFolder = await prisma.file.count({ where: { folderId } });
  if (filesInFolder >= pkg.filesPerFolder) {
    fs.unlinkSync(uploadedFile.path);
    throw new ApiError(
      httpStatus.FORBIDDEN,
      `This folder has reached the maximum files per folder (${pkg.filesPerFolder}) for your ${pkg.name} plan.`,
    );
  }

  const folder = await prisma.folder.findUnique({ where: { id: folderId } });
  if (!folder) {
    fs.unlinkSync(uploadedFile.path);
    throw new ApiError(httpStatus.NOT_FOUND, "Folder not found!");
  }
  if (folder.userId !== userId) {
    fs.unlinkSync(uploadedFile.path);
    throw new ApiError(httpStatus.FORBIDDEN, "You do not have access to this folder!");
  }

  const storageKey = uploadedFile.filename;
  const storageUrl = `/uploads/${uploadedFile.filename}`;

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

  // Delete from disk
  const filePath = path.join("uploads", file.storageKey);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }

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

  const filePath = path.join("uploads", file.storageKey);

  if (!fs.existsSync(filePath)) {
    throw new ApiError(httpStatus.NOT_FOUND, "Physical file not found on server!");
  }

  return {
    filePath,
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

import type { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "#app/shared/catchAsync.js";
import sendResponse from "#app/shared/sendResponse.js";
import { FileService } from "./file.service.js";

const uploadFile = catchAsync(async (req: Request & { user?: any }, res: Response) => {
  const userId = req.user.id;
  const { folderId } = req.body;

  if (!req.file) {
    return sendResponse(res, {
      statusCode: httpStatus.BAD_REQUEST,
      success: false,
      message: "No file uploaded. Please attach a file.",
      data: null,
    });
  }

  if (!folderId) {
    return sendResponse(res, {
      statusCode: httpStatus.BAD_REQUEST,
      success: false,
      message: "folderId is required.",
      data: null,
    });
  }

  const result = await FileService.uploadFile(userId, folderId, req.file);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "File uploaded successfully!",
    data: result,
  });
});

const getFileById = catchAsync(async (req: Request & { user?: any }, res: Response) => {
  const userId = req.user.id;
  const { id } = req.params as { id: string };
  const result = await FileService.getFileById(userId, id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "File retrieved successfully!",
    data: result,
  });
});

const renameFile = catchAsync(async (req: Request & { user?: any }, res: Response) => {
  const userId = req.user.id;
  const { id } = req.params as { id: string };
  const result = await FileService.renameFile(userId, id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "File renamed successfully!",
    data: result,
  });
});

const deleteFile = catchAsync(async (req: Request & { user?: any }, res: Response) => {
  const userId = req.user.id;
  const { id } = req.params as { id: string };
  const result = await FileService.deleteFile(userId, id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "File deleted successfully!",
    data: result,
  });
});

const downloadFile = catchAsync(async (req: Request & { user?: any }, res: Response) => {
  const userId = req.user.id;
  const { id } = req.params as { id: string };
  const { filePath, originalName, mimeType } = await FileService.downloadFile(userId, id);

  res.setHeader("Content-Disposition", `attachment; filename="${encodeURIComponent(originalName)}"`);
  res.setHeader("Content-Type", mimeType);
  res.download(filePath, originalName);
});

export const FileController = {
  uploadFile,
  getFileById,
  renameFile,
  deleteFile,
  downloadFile,
};

import type { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "#app/shared/catchAsync.js";
import sendResponse from "#app/shared/sendResponse.js";
import { FolderService } from "./folder.service.js";

const getRootFolders = catchAsync(async (req: Request & { user?: any }, res: Response) => {
  const userId = req.user.id;
  const result = await FolderService.getRootFolders(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Root folders retrieved successfully!",
    data: result,
  });
});

const getFolderChildren = catchAsync(async (req: Request & { user?: any }, res: Response) => {
  const userId = req.user.id;
  const { id } = req.params as { id: string };
  const result = await FolderService.getFolderChildren(userId, id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Folder contents retrieved successfully!",
    data: result,
  });
});

const createFolder = catchAsync(async (req: Request & { user?: any }, res: Response) => {
  const userId = req.user.id;
  const result = await FolderService.createFolder(userId, req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Folder created successfully!",
    data: result,
  });
});

const renameFolder = catchAsync(async (req: Request & { user?: any }, res: Response) => {
  const userId = req.user.id;
  const { id } = req.params as { id: string };
  const result = await FolderService.renameFolder(userId, id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Folder renamed successfully!",
    data: result,
  });
});

const deleteFolder = catchAsync(async (req: Request & { user?: any }, res: Response) => {
  const userId = req.user.id;
  const { id } = req.params as { id: string };
  const result = await FolderService.deleteFolder(userId, id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Folder deleted successfully!",
    data: result,
  });
});

export const FolderController = {
  getRootFolders,
  getFolderChildren,
  createFolder,
  renameFolder,
  deleteFolder,
};

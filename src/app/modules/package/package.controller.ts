import type { Request, Response } from "express";
import catchAsync from "#app/shared/catchAsync.js";
import { PackageService } from "./package.service.js";
import sendResponse from "#app/shared/sendResponse.js";

const createPackage = catchAsync(async (req: Request, res: Response) => {
  const newPackage = await PackageService.createPackageIntoDB(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Package created successfully",
    data: newPackage,
  });
});

export const packageController = {
  createPackage,
};

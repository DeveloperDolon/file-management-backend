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

const getAllPackages = catchAsync(async (req: Request, res: Response) => {
  const packages = await PackageService.getAllPackagesFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Packages retrieved successfully",
    data: packages,
  });
});

const getSinglePackage = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params as { id: string };
  const subscriptionPackage = await PackageService.getSinglePackageFromDB(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Package retrieved successfully",
    data: subscriptionPackage,
  });
});

const updatePackage = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params as { id: string };
  const updatedPackage = await PackageService.updatePackageInDB(id, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Package updated successfully",
    data: updatedPackage,
  });
});

export const PackageController = {
  createPackage,
  getAllPackages,
  getSinglePackage,
  updatePackage,
};

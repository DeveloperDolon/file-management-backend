import type { Request, Response } from "express";
import httpStatus from "http-status";

import catchAsync from "#app/shared/catchAsync.js";
import { AdminService } from "./admin.service.js";
import sendResponse from "#app/shared/sendResponse.js";

const registerAdmin = catchAsync(async (req: Request, res: Response) => {
  const adminData = req.body;
  const newAdmin = await AdminService.registerAdminIntoDB(adminData);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Admin registered successfully!",
    data: newAdmin,
  });
});

const adminLogin = catchAsync(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const result = await AdminService.adminLogin(email, password);

  res.cookie("adminAccessToken", result?.accessToken, {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "lax",
    maxAge: 1000 * 60 * 60, // 1 hour
  });

  res.cookie("adminRefreshToken", result?.refreshToken, {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "lax",
    maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
  });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin logged in successfully!",
    data: result,
  });
});

const adminGetProfile = catchAsync(async (req: Request & { user?: any }, res: Response) => {
  const adminId = req.user.id;
  const adminProfile = await AdminService.getAdminProfile(adminId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin profile retrieved successfully!",
    data: adminProfile,
  });
});

export const AdminController = {
  registerAdmin,
  adminLogin,
  adminGetProfile,
};

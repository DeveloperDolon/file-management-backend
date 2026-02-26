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

export const AdminController = {
  registerAdmin,
};

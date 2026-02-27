import type { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "#app/shared/catchAsync.js";
import sendResponse from "#app/shared/sendResponse.js";
import { SubscriptionService } from "./subscription.service.js";

const getMySubscriptions = catchAsync(async (req: Request & { user?: any }, res: Response) => {
  const userId = req.user.id;
  const result = await SubscriptionService.getMySubscriptions(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Subscriptions retrieved successfully!",
    data: result,
  });
});

const selectPackage = catchAsync(async (req: Request & { user?: any }, res: Response) => {
  const userId = req.user.id;
  const { packageId } = req.params as any & { packageId: string };
  const result = await SubscriptionService.selectPackage(userId, packageId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Package selected successfully!",
    data: result,
  });
});

export const SubscriptionController = {
  getMySubscriptions,
  selectPackage,
};

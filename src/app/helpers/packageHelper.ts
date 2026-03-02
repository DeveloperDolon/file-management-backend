import httpStatus from 'http-status';
import ApiError from "#app/errors/ApiError.js";
import prisma from '../../config/prisma.js';
// ─── Enforcement Helper ────────────────────────────────────────────────────────

export const getActivePackage = async (userId: string) => {
  const subscription = await prisma.userSubscription.findFirst({
    where: { userId, isActive: true },
    include: { package: true },
    orderBy: { startDate: "desc" },
  });

  if (!subscription) {
    throw new ApiError(httpStatus.FORBIDDEN, "You do not have an active subscription package.");
  }

  return subscription.package;
};

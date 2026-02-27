import ApiError from "#app/errors/ApiError.js";
import httpStatus from "http-status";
import prisma from "#config/prisma.js";

const getMySubscriptions = async (userId: string) => {
  const active = await prisma.userSubscription.findFirst({
    where: { userId, isActive: true },
    include: {
      package: true,
    },
    orderBy: { startDate: "desc" },
  });

  const history = await prisma.userSubscription.findMany({
    where: { userId },
    include: {
      package: true,
    },
    orderBy: { startDate: "desc" },
  });

  return {
    active: active || null,
    history,
  };
};

// POST /api/subscriptions/select/:packageId
const selectPackage = async (userId: string, packageId: string) => {
  const packageExists = await prisma.subscriptionPackage.findUnique({
    where: { id: packageId },
  });

  if (!packageExists) {
    throw new ApiError(httpStatus.NOT_FOUND, "Subscription package not found!");
  }

  if (!packageExists.isActive) {
    throw new ApiError(httpStatus.BAD_REQUEST, "This subscription package is not available!");
  }

  const currentActive = await prisma.userSubscription.findFirst({
    where: { userId, isActive: true },
  });

  if (currentActive && currentActive.packageId === packageId) {
    throw new ApiError(httpStatus.BAD_REQUEST, "You already have this package selected!");
  }

  const newSubscription = await prisma.$transaction(async (tx: any) => {
    if (currentActive) {
      await tx.userSubscription.update({
        where: { id: currentActive.id },
        data: {
          isActive: false,
          endDate: new Date(),
        },
      });
    }

    const created = await tx.userSubscription.create({
      data: {
        userId,
        packageId,
        isActive: true,
        startDate: new Date(),
      },
      include: {
        package: true,
      },
    });

    return created;
  });

  return newSubscription;
};

export const SubscriptionService = {
  getMySubscriptions,
  selectPackage,
};

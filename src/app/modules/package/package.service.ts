import { PrismaClient } from "@prisma/client";
import type { TPackage } from "./package.interfaces.js";

const prisma = new PrismaClient();

const createPackageIntoDB = async (data: TPackage) => {
  const newPackage = await prisma.subscriptionPackage.create({
    data: {
      name: data.name,
      price: data.price,
      maxFolders: data.maxFolders,
      maxNestingLevel: data.maxNestingLevel,
      allowedFileTypes: data.allowedFileTypes,
      maxFileSizeMB: data.maxFileSizeMB,
      totalFileLimit: data.totalFileLimit,
      filesPerFolder: data.filesPerFolder,
      isActive: data.isActive,
    },
  });

  return newPackage;
};

export const PackageService = {
  createPackageIntoDB,
};

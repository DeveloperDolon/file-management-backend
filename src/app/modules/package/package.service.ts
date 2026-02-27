import type { TPackage } from "./package.interfaces.js";
import prisma from "#config/prisma.js";

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

const getAllPackagesFromDB = async () => {
  const packages = await prisma.subscriptionPackage.findMany();
  return packages;
};

const getSinglePackageFromDB = async (id: string) => {
  const subscriptionPackage = await prisma.subscriptionPackage.findUnique({
    where: { id },
  });

  return subscriptionPackage;
};

const updatePackageInDB = async (id: string, data: Partial<TPackage>) => {
  const updateData = Object.fromEntries(
    Object.entries(data).filter(([, value]) => value !== undefined)
  );

  const updatedPackage = await prisma.subscriptionPackage.update({
    where: { id },
    data: updateData,
  });

  return updatedPackage;
};

const deletePackageFromDB = async (id: string) => {
  await prisma.subscriptionPackage.delete({
    where: { id },
  });
};

export const PackageService = {
  createPackageIntoDB,
  getAllPackagesFromDB,
  getSinglePackageFromDB,
  updatePackageInDB,
  deletePackageFromDB,
};

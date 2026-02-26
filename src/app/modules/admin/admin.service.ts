import { PrismaClient } from "@prisma/client";
import type { TAdmin } from "./admin.interfaces.js";
import config from "#config/index.js";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const registerAdminIntoDB = async (adminData: TAdmin) => {
  const existingAdmin = await prisma.admin.findUnique({
    where: { email: adminData.email },
  });

  if (existingAdmin) {
    throw new Error("Admin with this email already exists!");
  }
  const hashedPassword = await bcrypt.hash(adminData.password, Number(config.salt_round));

  const newAdmin = await prisma.admin.create({
    data: {
      name: adminData.name,
      email: adminData.email,
      password: hashedPassword,
    },
  });

  return newAdmin;
};

export const AdminService = {
  registerAdminIntoDB,
};

import { PrismaClient } from "@prisma/client";
import type { TAdmin } from "./admin.interfaces.js";
import config from "#config/index.js";
import bcrypt from "bcryptjs";
import type { Secret } from "jsonwebtoken";
import { jwtHelpers } from "#app/helpers/jwtHelper.js";

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

const adminLogin = async (email: string, password: string) => {
  const admin = await prisma.admin.findUnique({
    where: { email },
  });

  if (!admin) {
    throw new Error("Admin not found!");
  }

  const isPasswordValid = await bcrypt.compare(password, admin.password);
  if (!isPasswordValid) {
    throw new Error("Invalid password!");
  }

  const accessToken = jwtHelpers.generateToken(
    {
      id: admin.id,
      email: admin.email,
    },
    config.jwt.jwt_access_secret as Secret,
    config.jwt.expires_in as string,
  );

  const refreshToken = jwtHelpers.generateToken(
    {
      id: admin.id,
      email: admin.email,
    },
    config.jwt.jwt_refresh_secret as Secret,
    config.jwt.refresh_token_expires_in as string,
  );

  return {
    accessToken,
    refreshToken,
  };
};

export const AdminService = {
  registerAdminIntoDB,
  adminLogin,
};

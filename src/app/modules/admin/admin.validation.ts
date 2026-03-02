import { z } from "zod";

const emailField = z
  .string()
  .min(1, "Email is required")
  .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format");

const registerAdmin = z.object({
  body: z.object({
    name: z.string().min(3, "Name is required"),
    email: emailField,
    password: z.string().min(6, "Password must be at least 6 characters"),
  }),
});

export const AdminValidation = {
  registerAdmin,
};

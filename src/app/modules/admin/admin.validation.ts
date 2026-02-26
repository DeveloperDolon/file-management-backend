import { z } from "zod";

const registerAdmin = z.object({
  body: z.object({
    name: z.string().min(3, "Name is required"),
    email: z.string().email("Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  }),
});

export const AdminValidation = {
  registerAdmin,
};

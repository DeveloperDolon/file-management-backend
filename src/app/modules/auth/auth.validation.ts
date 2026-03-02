import z from "zod";

// auth.validation.ts — replace ALL z.string().email() with this
const emailField = z
  .string()
  .min(1, "Email is required")
  .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format");

const registerUser = z.object({
  body: z.object({
    email: emailField,
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    phone: z.string().optional(),
  }),
});

const verifyEmail = z.object({
  body: z.object({
    email: emailField,
    otp: z.string().length(6, "OTP must be 6 digits"),
  }),
});

const loginUser = z.object({
  body: z.object({
    email: emailField,
    password: z.string().min(1, "Password is required"),
  }),
});

const changePassword = z.object({
  body: z.object({
    oldPassword: z.string().min(1, "Old password is required"),
    newPassword: z.string().min(6, "New password must be at least 6 characters"),
  }),
});

const forgotPassword = z.object({
  body: z.object({
    email: emailField,
  }),
});

const resetPassword = z.object({
  body: z.object({
    email: emailField,
    otp: z.string().length(6, "OTP must be 6 digits"),
    newPassword: z.string().min(6, "New password must be at least 6 characters"),
  }),
});

const resendOTP = z.object({
  body: z.object({
    email: emailField,
    purpose: z.enum(["email_verification", "password_reset"]),
  }),
});

export const AuthValidation = {
  registerUser,
  verifyEmail,
  loginUser,
  changePassword,
  forgotPassword,
  resetPassword,
  resendOTP,
};
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcryptjs";
import { AuthServices } from "#app/modules/auth/auth.service.js";
import ApiError from "#app/errors/ApiError.js";
import { jwtHelpers } from "#app/helpers/jwtHelper.js";
import { storeOTP, verifyOTP } from "#app/modules/otp/otp.service.js";
import { sendEmailVerification, sendPasswordResetOTP } from "#app/utils/emailService.js";
import { generateOTP } from "#app/utils/generateOtp.js";

var mockPrisma: any;

vi.mock("@prisma/client", () => {
  mockPrisma = {
    user: {
      findUnique: vi.fn(),
      findUniqueOrThrow: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
    },
  };

  return {
    PrismaClient: class {
      user = mockPrisma.user;
    },
  };
});

vi.mock("bcryptjs");
vi.mock("#app/helpers/jwtHelper.js");
vi.mock("#app/modules/otp/otp.service.js");
vi.mock("#app/utils/emailService.js");
vi.mock("#app/utils/generateOtp.js");

describe("AuthServices", () => {
  const mockUser = { id: "1", email: "test@example.com", fullName: "Test User", password: "hashed_pwd", isEmailVerified: true };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("registerUser", () => {
    it("should register a new user successfully", async () => {
      mockPrisma.user.findUnique.mockResolvedValue(null);
      vi.mocked(bcrypt.hash).mockResolvedValue("hashed_password" as never);
      vi.mocked(generateOTP).mockReturnValue("123456");
      vi.mocked(storeOTP).mockResolvedValue(undefined);
      vi.mocked(sendEmailVerification).mockResolvedValue(undefined);

      const result = await AuthServices.registerUser({ email: "new@example.com", fullName: "New User", password: "password123" });

      expect(result.message).toBe("Registration successful! Please verify your email.");
      expect(sendEmailVerification).toHaveBeenCalledWith("new@example.com", "123456");
    });

    it("should throw error if user already exists", async () => {
      mockPrisma.user.findUnique.mockResolvedValue(mockUser as never);

      await expect(AuthServices.registerUser({ email: "test@example.com", fullName: "Test", password: "pwd" })).rejects.toThrow(ApiError);
    });
  });

  describe("verifyEmail", () => {
    it("should verify email with valid OTP", async () => {
      vi.mocked(verifyOTP).mockResolvedValue(true);
      mockPrisma.user.update.mockResolvedValue(mockUser as never);

      const result = await AuthServices.verifyEmail({ email: "test@example.com", otp: "123456" });

      expect(result.message).toBe("Email verified successfully!");
      expect(mockPrisma.user.update).toHaveBeenCalled();
    });

    it("should throw error with invalid OTP", async () => {
      vi.mocked(verifyOTP).mockResolvedValue(false);

      await expect(AuthServices.verifyEmail({ email: "test@example.com", otp: "000000" })).rejects.toThrow(ApiError);
    });
  });

  describe("loginUser", () => {
    it("should login user with correct credentials", async () => {
      mockPrisma.user.findUnique.mockResolvedValue(mockUser as never);
      vi.mocked(bcrypt.compare).mockResolvedValue(true as never);
      vi.mocked(jwtHelpers.generateToken).mockReturnValue("mock_token");

      const result = await AuthServices.loginUser({ email: "test@example.com", password: "password123" });

      expect(result.accessToken).toBe("mock_token");
      expect(result.refreshToken).toBe("mock_token");
    });

    it("should throw error if user not found", async () => {
      mockPrisma.user.findUnique.mockResolvedValue(null);

      await expect(AuthServices.loginUser({ email: "notfound@example.com", password: "pwd" })).rejects.toThrow(ApiError);
    });

    it("should throw error if email not verified", async () => {
      const unverifiedUser = { ...mockUser, isEmailVerified: false };
      mockPrisma.user.findUnique.mockResolvedValue(unverifiedUser as never);

      await expect(AuthServices.loginUser({ email: "test@example.com", password: "password123" })).rejects.toThrow(ApiError);
    });

    it("should throw error if password is incorrect", async () => {
      mockPrisma.user.findUnique.mockResolvedValue(mockUser as never);
      vi.mocked(bcrypt.compare).mockResolvedValue(false as never);

      await expect(AuthServices.loginUser({ email: "test@example.com", password: "wrongpassword" })).rejects.toThrow(ApiError);
    });
  });

  describe("refreshToken", () => {
    it("should generate new access token with valid refresh token", async () => {
      vi.mocked(jwtHelpers.verifyToken).mockReturnValue({ email: "test@example.com" } as never);
      mockPrisma.user.findUniqueOrThrow.mockResolvedValue(mockUser as never);
      vi.mocked(jwtHelpers.generateToken).mockReturnValue("new_access_token");

      const result = await AuthServices.refreshToken("valid_refresh_token");

      expect(result.accessToken).toBe("new_access_token");
    });

    it("should throw error with invalid refresh token", async () => {
      vi.mocked(jwtHelpers.verifyToken).mockImplementation(() => {
        throw new Error("Invalid token");
      });

      await expect(AuthServices.refreshToken("invalid_token")).rejects.toThrow("You are not authorized!");
    });
  });

  describe("changePassword", () => {
    it("should change password successfully", async () => {
      mockPrisma.user.findUniqueOrThrow.mockResolvedValue(mockUser as never);
      vi.mocked(bcrypt.compare).mockResolvedValue(true as never);
      vi.mocked(bcrypt.hash).mockResolvedValue("new_hashed_pwd" as never);
      mockPrisma.user.update.mockResolvedValue(mockUser as never);

      const result = await AuthServices.changePassword({ email: "test@example.com" }, { oldPassword: "password123", newPassword: "newpassword123" });

      expect(result.message).toBe("Password changed successfully!");
    });

    it("should throw error if old password is incorrect", async () => {
      mockPrisma.user.findUniqueOrThrow.mockResolvedValue(mockUser as never);
      vi.mocked(bcrypt.compare).mockResolvedValue(false as never);

      await expect(
        AuthServices.changePassword({ email: "test@example.com" }, { oldPassword: "wrongpassword", newPassword: "newpassword" }),
      ).rejects.toThrow("Password incorrect!");
    });
  });

  describe("forgotPassword", () => {
    it("should send password reset OTP", async () => {
      mockPrisma.user.findUnique.mockResolvedValue(mockUser as never);
      vi.mocked(generateOTP).mockReturnValue("654321");
      vi.mocked(storeOTP).mockResolvedValue(undefined);
      vi.mocked(sendPasswordResetOTP).mockResolvedValue(undefined);

      const result = await AuthServices.forgotPassword({ email: "test@example.com" });

      expect(result.message).toBe("Password reset OTP sent to your email!");
      expect(sendPasswordResetOTP).toHaveBeenCalledWith("test@example.com", "654321");
    });

    it("should throw error if user not found", async () => {
      mockPrisma.user.findUnique.mockResolvedValue(null);

      await expect(AuthServices.forgotPassword({ email: "notfound@example.com" })).rejects.toThrow(ApiError);
    });
  });

  describe("resetPassword", () => {
    it("should reset password with valid OTP", async () => {
      vi.mocked(verifyOTP).mockResolvedValue(true);
      vi.mocked(bcrypt.hash).mockResolvedValue("new_hashed_pwd" as never);
      mockPrisma.user.update.mockResolvedValue(mockUser as never);

      const result = await AuthServices.resetPassword({ email: "test@example.com", otp: "654321", newPassword: "newpassword123" });

      expect(result.message).toBe("Password reset successfully!");
    });

    it("should throw error with invalid OTP", async () => {
      vi.mocked(verifyOTP).mockResolvedValue(false);

      await expect(AuthServices.resetPassword({ email: "test@example.com", otp: "000000", newPassword: "newpassword" })).rejects.toThrow(ApiError);
    });
  });

  describe("resendOTP", () => {
    it("should resend email verification OTP", async () => {
      mockPrisma.user.findUnique.mockResolvedValue(mockUser as never);
      vi.mocked(generateOTP).mockReturnValue("111111");
      vi.mocked(storeOTP).mockResolvedValue(undefined);
      vi.mocked(sendEmailVerification).mockResolvedValue(undefined);

      const result = await AuthServices.resendOTP({ email: "test@example.com", purpose: "email_verification" });

      expect(result.message).toBe("OTP sent successfully!");
      expect(sendEmailVerification).toHaveBeenCalled();
    });

    it("should throw error if user not found", async () => {
      mockPrisma.user.findUnique.mockResolvedValue(null);

      await expect(AuthServices.resendOTP({ email: "notfound@example.com", purpose: "email_verification" })).rejects.toThrow(ApiError);
    });
  });
});

import express from "express";
import authGuard from "#app/middlewares/authGuard.js";
import validateRequest from "#app/middlewares/validateRequest.js";
import { FileController } from "./file.controller.js";
import { FileValidation } from "./file.validation.js";
import { uploadMiddleware } from "./file.upload.js";

const router = express.Router();

router.post("/upload", authGuard(), uploadMiddleware.single("file"), FileController.uploadFile);

router.get("/:id", authGuard(), FileController.getFileById);

router.patch("/:id", authGuard(), validateRequest(FileValidation.renameFile), FileController.renameFile);

router.delete("/:id", authGuard(), FileController.deleteFile);

router.get("/:id/download", authGuard(), FileController.downloadFile);

export const FileRoutes = router;

import express from "express";
import authGuard from "#app/middlewares/authGuard.js";
import validateRequest from "#app/middlewares/validateRequest.js";
import { FolderController } from "./folder.controller.js";
import { FolderValidation } from "./folder.validation.js";

const router = express.Router();

router.get("/", authGuard(), FolderController.getRootFolders);

router.get("/:id/children", authGuard(), FolderController.getFolderChildren);

router.post("/", authGuard(), validateRequest(FolderValidation.createFolder), FolderController.createFolder);

router.patch("/:id", authGuard(), validateRequest(FolderValidation.renameFolder), FolderController.renameFolder);

router.delete("/:id", authGuard(), FolderController.deleteFolder);

export const FolderRoutes = router;

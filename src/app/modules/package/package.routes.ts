import authGuard from "#app/middlewares/authGuard.js";
import validateRequest from "#app/middlewares/validateRequest.js";
import express from "express";
import { PackageValidation } from "./package.validator.js";
import { PackageController } from "./package.controller.js";

const router = express.Router();

router.post("/", authGuard(), validateRequest(PackageValidation.packageSchema), PackageController.createPackage);
router.get("/", authGuard(), PackageController.getAllPackages);

export const PackageRoutes = router;

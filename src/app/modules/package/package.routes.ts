import authGuard from "#app/middlewares/authGuard.js";
import validateRequest from "#app/middlewares/validateRequest.js";
import express from "express";
import { PackageValidation } from "./package.validator.js";
import { packageController } from "./package.controller.js";

const router = express.Router();

router.post("/", authGuard(), validateRequest(PackageValidation.packageSchema), packageController.createPackage);

export const PackageRoutes = router;

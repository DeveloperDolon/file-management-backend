import authGuard from "#app/middlewares/authGuard.js";
import validateRequest from "#app/middlewares/validateRequest.js";
import express from "express";
import { PackageValidation } from "./package.validator.js";
import { PackageController } from "./package.controller.js";

const router = express.Router();

router.post("/", authGuard(), validateRequest(PackageValidation.packageSchema), PackageController.createPackage);

router.get("/", PackageController.getAllPackages);

router.get("/:id", PackageController.getSinglePackage);

router.put("/:id", authGuard(), validateRequest(PackageValidation.packageSchema), PackageController.updatePackage);

router.delete("/:id", authGuard(), PackageController.deletePackage);

export const PackageRoutes = router;

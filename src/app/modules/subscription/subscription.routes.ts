import express from "express";
import authGuard from "#app/middlewares/authGuard.js";
import validateRequest from "#app/middlewares/validateRequest.js";
import { SubscriptionController } from "./subscription.controller.js";
import { SubscriptionValidation } from "./subscription.validation.js";

const router = express.Router();

router.get("/my", authGuard(), SubscriptionController.getMySubscriptions);

router.post("/select/:packageId", authGuard(), validateRequest(SubscriptionValidation.selectPackage), SubscriptionController.selectPackage);

export const SubscriptionRoutes = router;

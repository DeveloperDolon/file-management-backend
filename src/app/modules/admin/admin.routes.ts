
import express from "express";
import validateRequest from "#app/middlewares/validateRequest.js";
import { AdminController } from "./admin.controller.js";
import { AdminValidation } from "./admin.validation.js";

const router = express.Router();

router.post(
  "/register",
  validateRequest(AdminValidation.registerAdmin),
  AdminController.registerAdmin
);

export const AdminRoutes = router;

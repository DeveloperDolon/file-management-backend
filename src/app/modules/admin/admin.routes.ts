import express from "express";
import authGuard from "#app/middlewares/authGuard.js";
import validateRequest from "#app/middlewares/validateRequest.js";
import { AdminController } from "./admin.controller.js";
import { AdminValidation } from "./admin.validation.js";

const router = express.Router();

router.post("/register", validateRequest(AdminValidation.registerAdmin), AdminController.registerAdmin);

router.post("/login", AdminController.adminLogin);

router.get("/profile", authGuard, AdminController.adminGetProfile);

export const AdminRoutes = router;

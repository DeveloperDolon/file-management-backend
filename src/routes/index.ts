import express from "express";

import { AdminRoutes } from "#app/modules/admin/admin.routes.js";
import { AuthRoutes } from "#app/modules/auth/auth.routes.js";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/",
    route: router,
  },
  {
    path: "/auth",
    route: AuthRoutes
  }, 
  {
    path: "/admin",
    route: AdminRoutes
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

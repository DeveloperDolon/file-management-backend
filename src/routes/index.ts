import express from "express";

import { AdminRoutes } from "#app/modules/admin/admin.routes.js";
import { AuthRoutes } from "#app/modules/auth/auth.routes.js";
import { PackageRoutes } from "#app/modules/package/package.routes.js";

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
  },
  {
    path: "/package",
    route: PackageRoutes
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

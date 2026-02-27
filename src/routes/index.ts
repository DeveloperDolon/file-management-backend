import express from "express";

import { AdminRoutes } from "#app/modules/admin/admin.routes.js";
import { AuthRoutes } from "#app/modules/auth/auth.routes.js";
import { PackageRoutes } from "#app/modules/package/package.routes.js";
import { SubscriptionRoutes } from "#app/modules/subscription/subscription.routes.js";
import { FolderRoutes } from "#app/modules/folder/folder.routes.js";
import { FileRoutes } from "#app/modules/file/file.routes.js";

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
  },
  {
    path: "/subscriptions",
    route: SubscriptionRoutes
  },
  {
    path: "/folders",
    route: FolderRoutes
  },
  {
    path: "/files",
    route: FileRoutes
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

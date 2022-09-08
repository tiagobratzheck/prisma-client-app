import { Router } from "express";

import { accountRoutes } from "./account.routes";
import { ownerRoutes } from "./owner.routes";
import { todoRoutes } from "./todo.routes";
import { managerRoutes } from "./manager.routes";
import { projectsRoutes } from "./projects.routes";

const router = Router();

router.use("/account", accountRoutes);
router.use("/owner", ownerRoutes);
router.use("/todos", todoRoutes);
router.use("/manager", managerRoutes);
router.use("/project", projectsRoutes);

export { router };

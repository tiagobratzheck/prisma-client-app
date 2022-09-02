import { Router } from "express";

import { accountRoutes } from "./account.routes";
import { ownerRoutes } from "./owner.routes";
import { todoRoutes } from "./todo.routes";

const router = Router();

router.use("/account", accountRoutes);
router.use("/owner", ownerRoutes);
router.use("/todos", todoRoutes);

export { router };

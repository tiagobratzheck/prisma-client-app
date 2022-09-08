import { Router } from "express";
import { CreateManagerController } from "../../modules/manager/services/createManager/CreateManagerController";
import { ListManagerController } from "../../modules/manager/services/listManager/ListManagerController";

const managerRoutes = Router();

const createManagerController = new CreateManagerController();
const listManagerController = new ListManagerController();

managerRoutes.post("/create/", createManagerController.handle);
managerRoutes.post("/list/", listManagerController.handle);

export { managerRoutes };

import { Router } from "express";
import { ensureIsAuthenticated } from "../../middlewares/ensureIsAuthenticated";
import { CreateProjectController } from "../../modules/projects/services/createProject/CreateProjectController";
import { ListProjectController } from "../../modules/projects/services/listProjects/ListProjectController";

const projectsRoutes = Router();

const createProjectController = new CreateProjectController();
const listProjectController = new ListProjectController();

projectsRoutes.post(
    "/create/",
    ensureIsAuthenticated,
    createProjectController.handle
);

projectsRoutes.get(
    "/list/:id",
    ensureIsAuthenticated,
    listProjectController.handle
);

export { projectsRoutes };

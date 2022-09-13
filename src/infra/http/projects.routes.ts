import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import { ensureIsAuthenticated } from "../../middlewares/ensureIsAuthenticated";
import { CreateProjectController } from "../../modules/projects/services/createProject/CreateProjectController";
import { ListProjectController } from "../../modules/projects/services/listProjects/ListProjectController";
import { UpdateProjectController } from "../../modules/projects/services/updateProject/UpdateProjectController";

const projectsRoutes = Router();

const createProjectController = new CreateProjectController();
const listProjectController = new ListProjectController();
const updateProjectController = new UpdateProjectController();

projectsRoutes.post(
    "/create/",
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            description: Joi.string().required(),
            requirements: Joi.string().required(),
            previousDate: Joi.date().required(),
            id_manager: Joi.string(),
        },
    }),
    ensureIsAuthenticated,
    createProjectController.handle
);

projectsRoutes.get(
    "/list/:id",
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        },
    }),
    ensureIsAuthenticated,
    listProjectController.handle
);

projectsRoutes.put(
    "/update/:id",
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().required(),
        },
    }),
    ensureIsAuthenticated,
    updateProjectController.handle
);

export { projectsRoutes };

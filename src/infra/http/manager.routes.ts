import { Router } from "express";
import { CreateManagerController } from "../../modules/manager/services/createManager/CreateManagerController";
import { ListManagerController } from "../../modules/manager/services/listManager/ListManagerController";
import { celebrate, Joi, Segments } from "celebrate";

const managerRoutes = Router();

const createManagerController = new CreateManagerController();
const listManagerController = new ListManagerController();

managerRoutes.post(
    "/create/",
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            department: Joi.string().required(),
        },
    }),
    createManagerController.handle
);
managerRoutes.get(
    "/list/",
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
        },
    }),
    listManagerController.handle
);

export { managerRoutes };

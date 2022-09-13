import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import { ensureIsAuthenticated } from "../../middlewares/ensureIsAuthenticated";
import { CreateTodoController } from "../../modules/todo/services/createTodo/CreateTodoController";
import { ListTodoController } from "../../modules/todo/services/listTodo/ListTodoController";
import { UpdateTodoController } from "../../modules/todo/services/updateTodo/UpdateTodoController";

const todoRoutes = Router();

const createTodoController = new CreateTodoController();
const listTodoController = new ListTodoController();
const updateTodoController = new UpdateTodoController();

todoRoutes.post(
    "/create/",
    celebrate({
        [Segments.BODY]: {
            title: Joi.string().required(),
            description: Joi.string().required(),
            completed: Joi.boolean().required(),
            id_owner: Joi.string().uuid().required(),
            id_project: Joi.string().uuid(),
        },
    }),
    ensureIsAuthenticated,
    createTodoController.handle
);

todoRoutes.get("/get/", ensureIsAuthenticated, listTodoController.handle);

todoRoutes.put(
    "/update/:id",
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().required(),
        },
    }),
    ensureIsAuthenticated,
    updateTodoController.handle
);

export { todoRoutes };

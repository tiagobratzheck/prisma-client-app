import { Router } from "express";
import { ensureIsAuthenticated } from "../../middlewares/ensureIsAuthenticated";
import { CreateTodoController } from "../../modules/todo/services/createTodo/CreateTodoController";
import { ListTodoController } from "../../modules/todo/services/listTodo/ListTodoController";

const todoRoutes = Router();

const createTodoController = new CreateTodoController();
const listTodoController = new ListTodoController();

todoRoutes.post("/create/", ensureIsAuthenticated, createTodoController.handle);

todoRoutes.get("/get/", ensureIsAuthenticated, listTodoController.handle);

export { todoRoutes };

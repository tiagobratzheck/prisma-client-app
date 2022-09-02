import { Request, Response } from "express";
import { ListTodoService } from "./ListTodoService";

export class ListTodoController {
    async handle(request: Request, response: Response) {
        const listTodoService = new ListTodoService();
        const result = await listTodoService.execute();

        return response.json(result);
    }
}

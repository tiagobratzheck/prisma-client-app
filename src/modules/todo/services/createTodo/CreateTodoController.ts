import { Request, Response } from "express";
import { CreateTodoService } from "./CreateTodoService";

export class CreateTodoController {
    async handle(request: Request, response: Response) {
        const { title, description, completed, id_owner, id_project } =
            request.body;

        const createTodoService = new CreateTodoService();
        const result = await createTodoService.execute(
            title,
            description,
            completed,
            id_owner,
            id_project
        );

        return response.json(result);
    }
}

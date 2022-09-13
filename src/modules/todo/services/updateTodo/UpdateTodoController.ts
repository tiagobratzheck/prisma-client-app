import { Request, Response } from "express";
import { UpdateTodoService } from "./UpdateTodoService";

export class UpdateTodoController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const updateTodoService = new UpdateTodoService();

        const result = await updateTodoService.execute(parseInt(id));

        return response.json(result);
    }
}

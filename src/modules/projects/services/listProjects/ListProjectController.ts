import { Request, Response } from "express";
import { ListProjectService } from "./ListProjectService";

export class ListProjectController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const listProjectService = new ListProjectService();
        const result = await listProjectService.execute(id);

        return response.json(result);
    }
}

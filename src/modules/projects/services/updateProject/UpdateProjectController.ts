import { Request, Response } from "express";
import { UpdateProjectService } from "./UpdateProjectService";

export class UpdateProjectController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const updateProjectService = new UpdateProjectService();

        const result = await updateProjectService.execute(id);

        return response.json(result);
    }
}

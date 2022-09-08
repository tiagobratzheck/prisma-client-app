import { Request, Response } from "express";
import { CreateProjectService } from "./CreateProjectService";

export class CreateProjectController {
    async handle(request: Request, response: Response) {
        const { name, description, requirements, previousDate, id_manager } =
            request.body;

        const createProjectService = new CreateProjectService();
        const result = await createProjectService.execute(
            name,
            description,
            requirements,
            previousDate,
            id_manager
        );

        return response.json(result);
    }
}

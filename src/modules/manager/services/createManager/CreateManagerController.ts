import { Request, Response } from "express";
import { CreateManagerService } from "./CreateManagerService";

export class CreateManagerController {
    async handle(request: Request, response: Response) {
        const { name, department } = request.body;

        const createManagerService = new CreateManagerService();
        const result = await createManagerService.execute(name, department);

        return response.json(result);
    }
}

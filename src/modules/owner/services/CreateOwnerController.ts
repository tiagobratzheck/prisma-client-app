import { Request, Response } from "express";
import { CreateOwnerService } from "./CreateOwnerService";

export class CreateOwnerController {
    async handle(request: Request, response: Response) {
        const { name } = request.body;

        const createOwnerService = new CreateOwnerService();
        const result = await createOwnerService.execute(name);

        return response.json(result);
    }
}

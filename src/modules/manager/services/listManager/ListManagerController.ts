import { Request, Response } from "express";
import { ListManagerService } from "./ListManagerService";

export class ListManagerController {
    async handle(request: Request, response: Response) {
        const { name } = request.body;

        const listManagerService = new ListManagerService();
        const result = await listManagerService.execute(name);

        return response.json(result);
    }
}

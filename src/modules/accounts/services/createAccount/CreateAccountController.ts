import { Request, Response } from "express";
import { CreateAccountService } from "./CreateAccountService";

export class CreateAccountController {
    async handle(request: Request, response: Response) {
        const { username, password } = request.body;

        const createAccountService = new CreateAccountService();
        const result = await createAccountService.execute({
            username,
            password,
        });

        return response.json(result);
    }
}

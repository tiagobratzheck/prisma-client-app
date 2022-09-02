import { Request, Response } from "express";
import { AuthenticateAccountService } from "./AuthenticateAccountService";

export class AuthenticateAccountController {
    async handle(request: Request, response: Response) {
        const { username, password } = request.body;

        const authenticateAccountService = new AuthenticateAccountService();
        const result = await authenticateAccountService.execute({
            username,
            password,
        });

        return response.json(result);
    }
}

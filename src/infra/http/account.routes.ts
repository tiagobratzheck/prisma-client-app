import { Router } from "express";
import { AuthenticateAccountController } from "../../modules/accounts/services/authenticateAccount/AuthenticateAccountController";
import { CreateAccountController } from "../../modules/accounts/services/createAccount/CreateAccountController";

const accountRoutes = Router();

const createAccountController = new CreateAccountController();
const authenticateAccountController = new AuthenticateAccountController();

accountRoutes.post("/create/", createAccountController.handle);

accountRoutes.post("/authenticate/", authenticateAccountController.handle);

export { accountRoutes };

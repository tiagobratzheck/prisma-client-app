import { Router } from "express";
import { AuthenticateAccountController } from "../../modules/accounts/services/authenticateAccount/AuthenticateAccountController";
import { CreateAccountController } from "../../modules/accounts/services/createAccount/CreateAccountController";
import { celebrate, Joi, Segments } from "celebrate";

const accountRoutes = Router();

const createAccountController = new CreateAccountController();
const authenticateAccountController = new AuthenticateAccountController();

accountRoutes.post(
    "/create/",
    celebrate({
        [Segments.BODY]: {
            username: Joi.string().required(),
            //email: Joi.string().email().required(),
            password: Joi.string().required(),
        },
    }),
    createAccountController.handle
);

accountRoutes.post(
    "/authenticate/",
    celebrate({
        [Segments.BODY]: {
            username: Joi.string().required(),
            password: Joi.string().required(),
        },
    }),
    authenticateAccountController.handle
);

export { accountRoutes };

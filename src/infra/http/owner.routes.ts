import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import { CreateOwnerController } from "../../modules/owner/services/createOwner/CreateOwnerController";

const ownerRoutes = Router();

const createOwnerController = new CreateOwnerController();

ownerRoutes.post(
    "/create",
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
        },
    }),
    createOwnerController.handle
);

export { ownerRoutes };

import { Router } from "express";
import { CreateOwnerController } from "../../modules/owner/services/createOwner/CreateOwnerController";

const ownerRoutes = Router();

const createOwnerController = new CreateOwnerController();

ownerRoutes.post("/create", createOwnerController.handle);

export { ownerRoutes };

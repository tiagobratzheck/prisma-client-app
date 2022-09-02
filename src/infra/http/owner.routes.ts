import { Router } from "express";
import { CreateOwnerController } from "../../modules/owner/services/CreateOwnerController";

const ownerRoutes = Router();

const createOwnerController = new CreateOwnerController();

ownerRoutes.post("/api/owner", createOwnerController.handle);

export { ownerRoutes };

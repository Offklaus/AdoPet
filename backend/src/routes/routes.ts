import { Router } from "express";
import { AnimalController } from "../controllers/AnimalController";

export const routes = Router();

routes.get("/animals", AnimalController.index);
routes.post("/animals", AnimalController.create);
routes.get("/animals/:id", AnimalController.show);
routes.delete("/animals/:id", AnimalController.delete);

import { Router } from "express";
import { AnimalController } from "../controllers/AnimalController";

const router = Router();
const animalController = new AnimalController();

router.post("/animais", animalController.create);
router.get("/animais", animalController.list);

export default router;

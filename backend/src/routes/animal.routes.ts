import { Router } from "express";
import { AnimalController } from "../controllers/AnimalController";

const router = Router();

router.get("/animals", AnimalController.index);
router.post("/animals", AnimalController.create);
router.get("/animals/:id", AnimalController.show);
router.delete("/animals/:id", AnimalController.delete);

export default router;

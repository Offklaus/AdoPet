import { Router } from "express";
import { AnimalController } from "../controllers/AnimalController";

const router = Router();

router.post("/", AnimalController.create);
router.get("/", AnimalController.list);

export default router;

import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Animal } from "../entities/Animal";

export class AnimalController {
  static async index(req: Request, res: Response) {
    const repo = AppDataSource.getRepository(Animal);
    const animals = await repo.find();
    return res.json(animals);
  }

  static async create(req: Request, res: Response) {
    const repo = AppDataSource.getRepository(Animal);
    const animal = repo.create(req.body);
    await repo.save(animal);
    return res.status(201).json(animal);
  }

  static async show(req: Request, res: Response) {
    const repo = AppDataSource.getRepository(Animal);
    const animal = await repo.findOneBy({ id: Number(req.params.id) });

    if (!animal) {
      return res.status(404).json({ message: "Animal não encontrado" });
    }

    return res.json(animal);
  }

  static async delete(req: Request, res: Response) {
    const repo = AppDataSource.getRepository(Animal);
    await repo.delete(req.params.id);
    return res.status(204).send();
  }
}

import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Animal } from "../entities/Animal";
import { geocodeAddress } from "../services/geocodeService";

export class AnimalController {
  static async create(req: Request, res: Response) {
    try {
      const {
        nome,
        tipo,
        idade,
        sexo,
        descricao,
        rua,
        bairro,
        cidade,
        estado,
      } = req.body;

      const { latitude, longitude } =
        await geocodeAddress(
            rua,
            bairro,
            cidade,
            estado)

      const animalRepository = AppDataSource.getRepository(Animal);

      const animal = animalRepository.create({
        nome,
        tipo,
        idade,
        sexo,
        descricao,
        rua,
        bairro,
        cidade,
        estado,
        latitude,
        longitude,
      });

      await animalRepository.save(animal);

      return res.status(201).json(animal);
    } catch (error) {
      return res.status(400).json({
        error: "Erro ao cadastrar animal",
      });
    }
  }

  static async list(req: Request, res: Response) {
    const animalRepository =
      AppDataSource.getRepository(Animal);

    const animais = await animalRepository.find();
    return res.json(animais);
  }
}

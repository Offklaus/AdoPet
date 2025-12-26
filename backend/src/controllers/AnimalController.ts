import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Animal } from "../entities/Animal";
import { geocodeEndereco } from "../services/geocodeService";

export class AnimalController {
  async create(req: Request, res: Response) {
    const animalRepository = AppDataSource.getRepository(Animal);

    const {
      nome,
      tipo,
      idade,
      sexo,
      descricao,
      imagem,
      rua,
      bairro,
      cidade,
      estado
    } = req.body;

    const enderecoCompleto = `${rua}, ${bairro}, ${cidade}, ${estado}, Brasil`;

    const geo = await geocodeEndereco(enderecoCompleto);

    const animal = animalRepository.create({
      nome,
      tipo,
      idade,
      sexo,
      descricao,
      imagem,
      rua,
      bairro,
      cidade,
      estado,
      latitude: geo.latitude,
      longitude: geo.longitude
    });

    await animalRepository.save(animal);

    return res.status(201).json(animal);
  }

  async list(req: Request, res: Response) {
    const animalRepository = AppDataSource.getRepository(Animal);
    const animais = await animalRepository.find();
    return res.json(animais);
  }
}

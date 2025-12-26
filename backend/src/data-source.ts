import "reflect-metadata";
import { DataSource } from "typeorm";
import { Animal } from "./entities/Animal";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
  logging: false,
  entities: [Animal],
});

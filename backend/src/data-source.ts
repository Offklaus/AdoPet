import "reflect-metadata";
import { DataSource } from "typeorm";
import { Animal } from "./entities/Animal";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "127.0.0.1",
  port: 5432,
  username: "postgres",
  password: "1q2w3e4r5t",
  database: "Adopet",
  synchronize: true,
  logging: false, 
  entities: [Animal],
});

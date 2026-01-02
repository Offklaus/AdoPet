import express from "express";
import cors from "cors";
import { AppDataSource } from "./data-source";
import animalRoutes from "./routes/animal.routes";

const app = express();

app.use(cors());
app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log("📦 Banco de dados conectado");
  })
  .catch((error) => {
    console.error("Erro ao conectar no banco", error);
  });

app.use("/api", animalRoutes);

export default app;

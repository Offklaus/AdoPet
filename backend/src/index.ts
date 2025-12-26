import express from "express";
import animalRoutes from "./routes/animal.routes";
import { AppDataSource } from "./data-source";

const app = express();
app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log("Banco conectado");
  })
  .catch((err) => {
    console.error("Erro ao conectar no banco", err);
  });

app.use(animalRoutes);

app.listen(4000, () => {
  console.log("Servidor rodando na porta 4000");
});

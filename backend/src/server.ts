import app from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize().then(() => {
  app.listen(4000, () => {
    console.log("Servidor rodando na porta 4000 ");
  });
});

import { AppDataSource } from "./data-source";
import app from "./app";

AppDataSource.initialize()
  .then(() => {
    console.log("📦 Banco conectado");

    app.listen(4000, () => {
      console.log("🚀 Servidor rodando na porta 4000");
    });
  })
  .catch((error) => {
    console.error("Erro ao conectar no banco:", error);
  });

import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-left">
        <h1>🐾 Bem-vindo ao Adopet!</h1>
        <p>
          Encontre seu novo melhor amigo ou contribua cadastrando um animal para adoção.
        </p>

        <div className="home-buttons">
          <Link to="/animais" className="btn">
            Adotar
          </Link>

          <Link to="/doar" className="btn secondary">
            Doar
          </Link>
        </div>
      </div>

      <div className="home-right">
        {/* TEMPORÁRIO — podemos colocar imagem depois */}
        <div className="home-image-placeholder">
          Imagem aqui
        </div>
      </div>
    </div>
  );
}

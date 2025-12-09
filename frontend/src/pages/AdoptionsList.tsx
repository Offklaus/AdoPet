import { Link } from "react-router-dom";
import { useAnimais } from "../context/AnimalContext";
import "./AdoptionList.css";

export default function AdoptionList() {
  const { animais } = useAnimais();

  return (
    <div className="adoption-container">
      <h1 className="title">Animais para Adoção</h1>

      <div className="animal-grid">
        {animais.map((animal) => (
          <div key={animal.id} className="animal-card">
            <Link to={`/animal/${animal.id}`}>
              <img
                src={animal.imagem}
                alt={animal.nome}
                className="animal-img"
              />
            </Link>
          <div className="card-i">

            <div className="card-body">
              <div className="card-info">
                <h2 className="animal-name">{animal.nome}</h2>
              </div>
              <div className="animall-type">
                <p className="animal-type-text">
                  {animal.tipo}
                </p>
              </div>
            </div>

              <div className="a-details">
                <Link to={`/animal/${animal.id}`} className="btn-adopt">
                  ADOTAR
                </Link>
              </div>

          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

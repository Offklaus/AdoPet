import { useParams, Link } from "react-router-dom";
import { useAnimais } from "../context/AnimalContext";
import "./AnimalDetail.css";


export default function AnimalDetail() {
  const { id } = useParams(); // pega o ID da URL
  const { animais } = useAnimais();

  const animal = animais.find((a) => a.id === Number(id));

  if (!animal) {
    return (
      <div className="animal-detail-container">
        <h2>Animal não encontrado 😢</h2>
        <Link to="/animais" className="btn-voltar">Voltar para lista</Link>
      </div>
    );
  }

  return (
    <div className="animal-detail-container">
      <h1>Detalhes do Animal</h1>

      <div className="animal-card">
        
        {animal.imagem && (
          <img src={animal.imagem} alt={animal.nome} className="animal-img" />
        )}

        <div className="animal-info">
          <h2>{animal.nome}</h2>

          <p><strong>Tipo:</strong> {animal.tipo}</p>
          <p><strong>Idade:</strong> {animal.idade} anos</p>
          <p><strong>Sexo:</strong> {animal.sexo}</p>

          <p><strong>Descrição:</strong></p>
          <p className="descricao">{animal.descricao}</p>
        </div>
      </div>

      <Link to="/animais" className="btn-voltar">Voltar</Link>
    </div>
  );
}

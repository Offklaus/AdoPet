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

      <div className="animal-card">

      <div className="spacer">
        <div className="animal-info">
          <h2>Nome:{animal.nome}</h2>

          <p><strong>Especie: </strong> {animal.tipo}</p>
          <p><strong>Idade:</strong> {animal.idade} anos</p>
          <p><strong>Genero:</strong> {animal.sexo}</p>

          <p><strong>Porte:</strong> {animal.porte}</p>
          
        </div>
        <div className="localidade">
          <h2>Localidade</h2>
          <p><strong>Cidade:</strong> 
          {animal.rua}, 
          {animal.bairro} <br />
          {animal.cidade} - 
          {animal.estado}</p>
          <div className="map-container">
            <iframe
  src={`https://www.google.com/maps?q=${animal.latitude},${animal.longitude}&z=15&output=embed`}
  width="100%"
  height="300"
  loading="lazy"
/>
          </div>

        </div>
        <div className="veterinary">
          <div className="vet">
            <h1>Cuidados veterinarios</h1>
          </div>
          <div className="contact-doador">
            <button className="cont-do">Entrar em contato com o doador</button>
          </div>
        </div>
      </div>
      </div>

    </div>
  );
}

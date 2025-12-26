import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAnimais } from "../context/AnimalContext";
import "./Doar.css";

export default function Doar() {
  const { adicionarAnimal } = useAnimais();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: "",
    tipo: "",
    idade: "",
    sexo: "",
    porte: "",
    localizacao:""
    
  });

  const [preview, setPreview] = useState<string>();

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result as string);
    reader.readAsDataURL(file);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    adicionarAnimal({
      nome: form.nome,
      tipo: form.tipo,
      idade: Number(form.idade),
      sexo: form.sexo,
      imagem: preview,
      porte: form.porte,
      localizacao: form.localizacao
    });

    navigate("/animais"); // após publicar, vai para a lista
  }

  return (
    <div className="doar-container">
      <h1>Cadastrar Animal para Doação</h1>

      <form className="doar-form" onSubmit={handleSubmit}>
        
        <label>Nome</label>
        <input
          type="text"
          name="nome"
          placeholder="Nome do animal"
          value={form.nome}
          onChange={handleChange}
          required
        />

        <label>Especie</label>
        <select name="tipo" value={form.tipo} onChange={handleChange} required>
          <option value="">Selecione...</option>
          <option value="Cachorro">Cachorro</option>
          <option value="Gato">Gato</option>
          <option value="Ave">Aves</option>
        </select>

        <label>Idade</label>
        <input
          type="number"
          name="idade"
          min="0"
          placeholder="Idade"
          value={form.idade}
          onChange={handleChange}
          required
        />

        <label>Genero</label>
        <select name="sexo" value={form.sexo} onChange={handleChange} required>
          <option value="">Selecione...</option>
          <option value="Macho">Macho</option>
          <option value="Fêmea">Fêmea</option>
        </select>

        <label>Porte</label>
        <select name="porte" value={form.porte} onChange={handleChange} required>
          <option value="">Selecione...</option>
          <option value="Pequeno">Pequeno </option>
          <option value="Medio">Medio</option>
          <option value="Grande">Grande</option> 
        </select>

        <label>Localização</label>
        <input
          type="text"
          name="localizacao"
          placeholder="Ex: São Paulo - SP"
          value={form.localizacao}
          onChange={handleChange}
          required
          />


        <label>Foto do Animal</label>
        <input type="file" accept="image/*" onChange={handleImage} />

        {preview && (
          <img src={preview} alt="Preview" className="preview-img" />
        )}



        <button type="submit" className="btn-publish">Publicar</button>
      </form>
    </div>
  );
}

import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

export interface Animal {
  id: number;
  nome: string;
  tipo: string;
  idade: number;
  sexo: string; 
  porte: string;
  imagem?: string;
  latitude: number;
  longitude: number; 
  rua: string;
  bairro: string;
  cidade: string;
  estado: string;
}

type AnimalInput = Omit<Animal, "id">;

interface AnimalContextData {
  animais: Animal[];
  adicionarAnimal: (animal: AnimalInput) => Promise<void>;
}

const AnimalContext = createContext({} as AnimalContextData);

export function AnimalProvider({ children }: { children: React.ReactNode }) {
  const [animais, setAnimais] = useState<Animal[]>([]);

  useEffect(() => {
  api.get("/animals")
    .then(response => setAnimais(response.data))
    .catch(error => console.error(error));
}, []);

  async function adicionarAnimal(animal: AnimalInput) {
    const response = await api.post<Animal>("/animals", animal);
    setAnimais(prev => [...prev, response.data]);
  }

  return (
    <AnimalContext.Provider value={{ animais, adicionarAnimal }}>
      {children}
    </AnimalContext.Provider>
  );
}

export function useAnimal() {
  return useContext(AnimalContext);
}

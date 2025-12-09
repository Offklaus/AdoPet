import { createContext, useContext, useState, ReactNode } from "react";

export interface Animal {
    id: number;
  nome: string;
  tipo: string;
  idade: number;
  sexo: string;
  descricao: string;
  imagem?: string;
}

interface AnimalContextType {
  animais: Animal[];
  adicionarAnimal: (novo: Omit<Animal, "id">) => void;
}

const AnimalContext = createContext<AnimalContextType | undefined>(undefined);

export function AnimalProvider({ children }: { children: ReactNode }) {
  const [animais, setAnimais] = useState<Animal[]>([]);

  function adicionarAnimal(novo: Omit<Animal, "id">) {
    setAnimais((prev) => [...prev,{...novo, id: Date.now() },]);
  }

  return (
    <AnimalContext.Provider value={{ animais, adicionarAnimal }}>
      {children}
    </AnimalContext.Provider>
  );
}

export function useAnimais() {
  const context = useContext(AnimalContext);
  if (!context) {
    throw new Error("useAnimais deve ser usado dentro de AnimalProvider");
  }
  return context;
}

export interface CreateAnimalDTO {
  nome: string;
  tipo: string;
  idade: number;
  sexo: string;
  descricao: string;
  imagem?: string;

  rua: string;
  bairro: string;
  cidade: string;
  estado: string;
}

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Animal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  tipo: string;

  @Column()
  idade: number;

  @Column()
  sexo: string;

  @Column()
  descricao: string;

  @Column()
  imagem: string;

  @Column()
  porte: string;

  @Column()
  rua: string;

  @Column()
  bairro: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column("float")
  latitude: number;

  @Column("float")
  longitude: number;
}

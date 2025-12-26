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

  @Column({ nullable: true })
  imagem?: string;

  @Column()
  rua: string;

  @Column()
  bairro: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column("decimal", { precision: 10, scale: 7 })
  latitude: number;

  @Column("decimal", { precision: 10, scale: 7 })
  longitude: number;
}

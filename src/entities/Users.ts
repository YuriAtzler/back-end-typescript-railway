import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
  OneToMany,
} from "typeorm";
import Reservas from "./Reserva";

@Entity("users")
class User {
  @PrimaryColumn("varchar", { length: 11 })
  cpf: string;

  @Column("varchar", { length: 100 })
  nome: string;

  @Column("varchar", { length: 11 })
  telefone: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Reservas, (reserva) => reserva.user)
  reservas: Reservas[];
}

export default User;

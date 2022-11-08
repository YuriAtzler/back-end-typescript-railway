import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from "typeorm";
import Reservas from "./Reserva";

@Entity("quadras")
class Quadras {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column("varchar", { length: 100 })
  nome: string;

  @Column("varchar", { length: 100 })
  tipo: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Reservas, (reserva) => reserva.quadra)
  reservas: Reservas[];
}

export default Quadras;

import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  PrimaryColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import User from "./Users";
import Quadras from "./Quadras";

@Entity("reservas")
class Reservas {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column("datetime")
  data_hora_inicio: Date;

  @Column("datetime")
  data_hora_fim: Date;

  @Column("float")
  valor: number;

  @Column("boolean")
  confirmada: boolean;

  @Column("varchar", { length: 11 })
  id_cliente: string;

  @Column("int")
  id_quadra: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => User, (user) => user.reservas)
  @JoinColumn({ name: "id_cliente" })
  user: User;

  @ManyToOne(() => Quadras, (quadras) => quadras.reservas)
  @JoinColumn({ name: "id_quadra" })
  quadra: Quadras;
}

export default Reservas;

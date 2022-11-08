import "reflect-metadata";
import dotenv from 'dotenv';
import { DataSource } from "typeorm";
import { CreateUsersTable1664153538825 } from "./migrations/1664153538825-CreateUsersTable";
import { CreateQuadrasTable1665530559878 } from "./migrations/1665530559878-CreateQuadrasTable";
import { CreateReservaTable1665533712465 } from "./migrations/1665533712465-CreateReservaTable";
import User from "../entities/Users";
import Quadras from "../entities/Quadras";
import Reservas from "../entities/Reserva";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.MYSQLHOST,
  port: Number(process.env.MYSQLPORT),
  username: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  synchronize: true,
  logging: false,
  entities: [User, Quadras, Reservas],
  migrations: [
    CreateUsersTable1664153538825,
    CreateQuadrasTable1665530559878,
    CreateReservaTable1665533712465,
  ],
  subscribers: [],
});

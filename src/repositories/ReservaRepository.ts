import Reservas from "../entities/Reserva";
import IReserva from "../interfaces/IReserva";
import { AppDataSource } from "../database/data-source";
import HttpException from "../shared/http.exeception";

const reservaRepository = AppDataSource.getRepository(Reservas);

const newReserva = async (reserva: IReserva): Promise<IReserva> => {
  const createdReserva = await reservaRepository.save(reserva);
  return createdReserva as IReserva;
};

const getReservas = (): Promise<IReserva[]> => {
  return reservaRepository.find({ relations: { user: true, quadra: true } });
};

const removeReserva = async (id: number): Promise<void> => {
  await reservaRepository.delete(id);
};

export default { getReservas, newReserva, removeReserva };

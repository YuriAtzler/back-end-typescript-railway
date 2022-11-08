import { Request, Response, Router } from "express";
import Reservas from "../entities/Reserva";
import ReservaRepository from "../repositories/ReservaRepository";
import IReserva from "../interfaces/IReserva";

const reservaRouter = Router();

reservaRouter.get(
  "/",
  async (req: Request, res: Response): Promise<Response> => {
    const reservas = await ReservaRepository.getReservas();

    return res.status(200).json(reservas);
  }
);

reservaRouter.post(
  "/",
  async (req: Request, res: Response): Promise<Response> => {
    const reservas = await ReservaRepository.newReserva(req.body);
    return res.status(200).json(reservas);
  }
);

reservaRouter.delete(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    await ReservaRepository.removeReserva(id);

    return res.status(201).json({ message: "Registro removido com sucesso" });
  }
);

export default reservaRouter;

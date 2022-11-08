import { Request, Response, Router } from "express";
import Quadra from "../entities/Quadras";
import QuadraRepository from "../repositories/QuadraRepository";
import IQuadra from "../interfaces/IQuadra";

const quadraRouter = Router();

quadraRouter.get(
  "/",
  async (req: Request, res: Response): Promise<Response> => {
    const quadras = await QuadraRepository.getQuadras();

    return res.status(200).json(quadras);
  }
);

quadraRouter.post(
  "/",
  async (req: Request, res: Response): Promise<Response> => {
    const quadras = await QuadraRepository.newQuadra(req.body);
    return res.status(200).json(quadras);
  }
);

quadraRouter.delete(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    await QuadraRepository.removeQuadra(id);

    return res.status(201).json({ message: "Registro removido com sucesso" });
  }
);

export default quadraRouter;

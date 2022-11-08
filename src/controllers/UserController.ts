import { Request, Response, Router } from "express";
import User from "../entities/Users";
import UserRepository from "../repositories/UserRepository";
import IUser from "../interfaces/IUser";

const userRouter = Router();

userRouter.get("/", async (req: Request, res: Response): Promise<Response> => {
  const users = await UserRepository.getUsers();

  return res.status(200).json(users);
});

userRouter.post("/", async (req: Request, res: Response): Promise<Response> => {
  const users = await UserRepository.newUser(req.body);
  return res.status(200).json(users);
});

userRouter.delete(
  "/:cpf",
  async (req: Request, res: Response): Promise<Response> => {
    const cpf = req.params.cpf;
    await UserRepository.removeUser(cpf);

    return res.status(201).json({ message: "Registro removido com sucesso" });
  }
);

export default userRouter;

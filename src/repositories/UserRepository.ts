import User from "../entities/Users";
import IUser from "../interfaces/IUser";
import { AppDataSource } from "../database/data-source";
import HttpException from "../shared/http.exeception";

const usersRepository = AppDataSource.getRepository(User);

const isValid = (user: IUser) => {
  if (!user.nome || typeof user.nome !== "string") return false;

  return true;
};

const newUser = async (user: IUser): Promise<IUser> => {
  if (!isValid(user)) {
    throw new HttpException(400, "Dados inválidos!");
  }
  const createdUser = await usersRepository.save(user);
  return createdUser as IUser;
};

const getUsers = (): Promise<IUser[]> => {
  return usersRepository.find({ relations: { reservas: true } });
};

const removeUser = async (cpf: string): Promise<void> => {
  await usersRepository.delete(cpf);
};

export default { getUsers, newUser, removeUser };

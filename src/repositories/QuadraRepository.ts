import Quadra from "../entities/Quadras";
import IQuadra from "../interfaces/IQuadra";
import { AppDataSource } from "../database/data-source";
import HttpException from "../shared/http.exeception";

const quadrasRepository = AppDataSource.getRepository(Quadra);

const newQuadra = async (quadra: IQuadra): Promise<IQuadra> => {
  const createdQuadra = await quadrasRepository.save(quadra);
  return createdQuadra as IQuadra;
};

const getQuadras = (): Promise<IQuadra[]> => {
  return quadrasRepository.find({ relations: { reservas: true } });
};

const removeQuadra = async (id: number): Promise<void> => {
  await quadrasRepository.delete(id);
};

export default { getQuadras, newQuadra, removeQuadra };

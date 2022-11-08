interface IReserva {
  id?: number;
  data_hora_inicio: Date;
  data_hora_fim: Date;
  valor: number;
  confirmada: boolean;
  id_cliente: string;
  id_quadra: number;
}

export default IReserva;

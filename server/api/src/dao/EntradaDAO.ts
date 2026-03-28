import { pool } from "../database/connection.js";
import Entrada from "../class/Entrada.js";

export default class EntradaDAO {
  Registrar = async () => {
    let entrada = new Entrada();

    return entrada;
  };

  Consultar = async (): Promise<Entrada> => {
    let entrada = new Entrada();

    return entrada;
  };

  Listar = async () => {
    const entrada = new Entrada();

    return entrada;
  };
}

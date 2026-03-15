import Saida from "../class/Saida.js";

export default class SaidaDAO {
  Registrar = async () => {
    return true;
  };

  Consultar = async () => {
    const saida = new Saida();
    return saida;
  };

  Listar = async () => {
    const saida = new Saida();
    return saida;
  };
}

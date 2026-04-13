import { pool } from "../database/connection.js";

export default class ProdutoEntradaDAO {
  Registrar = async (
    entradaId: number,
    produtoId: number,
    quantidade: number,
    valor: number,
  ) => {
    try {
      await pool.query("INSERT INTO entrada_produto VALUES ($1, $2, $3, $4)", [
        entradaId,
        produtoId,
        quantidade,
        valor,
      ]);

      return true;
    } catch (err) {
      console.error(`Erro ao cadastrar produto: ${err}`);
      return false;
    }
  };
}

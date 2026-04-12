import { pool } from "../database/connection.js";

export default class ProdutoSaidaDAO {
  Registrar = async (
    saidaId: number,
    produtoId: number,
    quantidade: number,
    valor: number,
  ) => {
    try {
      await pool.query("INSERT INTO saida_produto VALUES ($1, $2, $3, $4)", [
        saidaId,
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

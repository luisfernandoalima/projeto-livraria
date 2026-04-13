import { pool } from "../database/connection.js";
import Entrada from "../class/Entrada.js";

export default class EntradaDAO {
  Registrar = async (newEntry: Entrada, userId: number) => {
    try {
      await pool.query(
        "INSERT INTO entrada VALUES (default, $1, $2, $3, $4, $5, $6)",
        [
          newEntry.getCupomFiscal(),
          newEntry.getNomeFornecedor(),
          newEntry.getCnpjFornecedor(),
          newEntry.getPrecoTotal(),
          newEntry.getData(),
          userId,
        ],
      );
      const entryId = await pool.query(
        "SELECT id FROM entrada WHERE cupom_fiscal=$1",
        [newEntry.getCupomFiscal()],
      );

      return entryId.rows[0];
    } catch (err) {
      console.error(`Erro ao registrar entrada: ${err}`);
      return false;
    }
  };

  Consultar = async (cupomFiscal: number) => {
    try {
      await pool.query("SELECT * FROM entrada WHERE cupom_fiscal=$1", [
        cupomFiscal,
      ]);
    } catch (err) {
      console.error(`Erro ao buscar entrada: ${err}`);
      return false;
    }
  };

  Listar = async () => {
    try {
      const result = await pool.query("SELECT * FROM entrada");
      return result.rows;
    } catch (err) {
      console.log(`Erro ao buscar entradas: ${err}`);
    }
  };

  consultaCompleta = async (cupomFiscal: number) => {
    try {
      await pool.query(
        "SELECT c.id, c.nome,  c.email, e.id AS entrada_id, e.data, p.id AS produto_id, p.titulo, ep.quantidade FROM entrada e INNER JOIN colaborador c ON e.colaborador_id = c.id INNER JOIN entrada_produto ep ON e.id = ep.entrada_id INNER JOIN produto p ON ep.produto_id = p.id WHERE e.cupom_fiscal = $1;",
        [cupomFiscal],
      );
    } catch (err) {
      console.error(`Erro ao cadastrar produto: ${err}`);
      return false;
    }
  };
}

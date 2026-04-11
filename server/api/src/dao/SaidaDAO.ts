import { pool } from "../database/connection.js";
import Saida from "../class/Saida.js";

export default class SaidaDAO {
  Registrar = async (newExit: Saida, userId: number) => {
    try {
      await pool.query(
        "INSERT INTO saida VALUES (default, $1, $2, $3, $4, $5, $6, $7)",
        [
          newExit.getCupomFiscal(),
          newExit.getPrecoTotal(),
          newExit.getData(),
          newExit.getCliente(),
          newExit.getCpfCliente(),
          newExit.getTipoPagamento(),
          userId,
        ],
      );
      const exitId = await pool.query(
        "SELECT id FROM entrada WHERE cupom_fiscal=$1",
        [newExit.getCupomFiscal()],
      );

      return exitId.rows[0];
    } catch (err) {
      console.error(`Erro ao registrar saída: ${err}`);
      return false;
    }
  };

  Consultar = async (cupomFiscal: number) => {
    try {
      await pool.query("SELECT * FROM saida WHERE cupom_fiscal=$1", [
        cupomFiscal,
      ]);
    } catch (err) {
      console.error(`Erro ao buscar saida: ${err}`);
      return false;
    }
  };

  Listar = async () => {
    try {
      const result = await pool.query("SELECT * FROM saida");
      return result.rows;
    } catch (err) {
      console.log(`Erro ao buscar entradas: ${err}`);
    }
  };

  consultaCompleta = async (cupomFiscal: number) => {
    try {
      await pool.query(
        "SELECT c.id, c.nome, c.email, s.id AS saida_id, s.data, p.id AS produto_id, p.titulo, sp.quantidade FROM saida s INNER JOIN colaborador c ON s.colaborador_id = c.id INNER JOIN saida_produto sp ON s.id = sp.saida_id INNER JOIN produto p ON sp.produto_id = p.id WHERE s.cupom_fiscal = $1;",
        [cupomFiscal],
      );
    } catch (err) {
      console.error(`Erro ao cadastrar produto: ${err}`);
      return false;
    }
  };
}

import { pool } from "../database/connection.js";
import Entrada from "../class/Entrada.js";

export default class EntradaDAO {
  Registrar = async (newEntry: Entrada) => {
    try {
      await pool.query(
        "INSERT INTO entrada VALUES (default, $1, $2, $3, $4, $5, $6)",
        [
          newEntry.getCupomFiscal(),
          newEntry.getNomeFornecedor(),
          newEntry.getCnpjFornecedor(),
          newEntry.getPrecoTotal(),
          newEntry.getData(),
          newEntry.getColaborador().getId(),
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
      const result = await pool.query(
        "SELECT u.id, u.nome, u.email, e.id AS id_entrada, e.nome_fornecedor, e.cnpj_fornecedor , e.data_entrada, e.valor_total, p.id AS id_produto, p.titulo, pe.quantidade_item, pe.valor_itens FROM entrada e INNER JOIN usuario u ON e.id_usuario = u.id INNER JOIN produto_entrada pe ON e.id = pe.id_entrada INNER JOIN produto p ON pe.id_produto = p.id WHERE e.cupom_fiscal = $1;",
        [cupomFiscal],
      );

      return result.rows;
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

  listarPorCupom = async (cupomFiscal: number) => {
    try {
      const result = await pool.query(
        "SELECT * FROM entrada WHERE cupom_fiscal ILIKE $1",
        [`%${cupomFiscal}%`],
      );
      return result.rows;
    } catch (err) {
      console.log(`Erro ao buscar entradas: ${err}`);
      return false;
    }
  };
}

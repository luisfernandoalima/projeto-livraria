import { pool } from "../database/connection.js";
import Saida from "../class/Saida.js";

export default class SaidaDAO {
  Registrar = async (newExit: Saida) => {
    try {
      await pool.query(
        "INSERT INTO saida VALUES (default, $1, $2, $3, $4, $5, $6, $7)",
        [
          newExit.getCupomFiscal(),
          newExit.getCliente(),
          newExit.getCpfCliente(),
          newExit.getPrecoTotal(),
          newExit.getTipoPagamento(),
          newExit.getData(),
          newExit.getColaborador().getId(),
        ],
      );

      const exitId = await pool.query(
        "SELECT id FROM saida WHERE cupom_fiscal = $1",
        [newExit.getCupomFiscal()],
      );

      console.log(exitId);

      return exitId.rows[0];
    } catch (err) {
      console.error(`Erro ao registrar saída: ${err}`);
      return false;
    }
  };

  Consultar = async (cupomFiscal: string) => {
    try {
      const result = await pool.query(
        "SELECT u.id, u.nome, u.email, s.id AS id_saida, s.cliente, s.cpf_cliente, s.data_saida, s.preco_total, s.tipo_pagamento, p.id AS id_produto, p.titulo, sp.quantidade_item, sp.valor_itens FROM saida s INNER JOIN usuario u ON s.id_usuario = u.id INNER JOIN produto_saida sp ON s.id = sp.id_saida INNER JOIN produto p ON sp.id_produto = p.id WHERE s.cupom_fiscal = $1;",
        [cupomFiscal],
      );

      return result.rows;
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

  listarPorCupom = async (cupomFiscal: number) => {
    try {
      const result = await pool.query(
        "SELECT * FROM saida WHERE cupom_fiscal ILIKE $1",
        [`%${cupomFiscal}%`],
      );
      return result.rows;
    } catch (err) {
      console.log(`Erro ao buscar saidas: ${err}`);
      return false;
    }
  };
}

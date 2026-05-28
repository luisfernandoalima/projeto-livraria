import { pool } from "../database/connection.js";
import Produto from "../class/Produto.js";

export class ProdutoDAO {
  Criar = async (produto: Produto) => {
    try {
      await pool.query(
        "INSERT INTO produto (id, titulo, autor, serie, volume, isbn13, numero_paginas, idioma, data_publicacao, genero, classificacao_indicativa, preco, estoque, imagem_capa) VALUES (default, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)",
        [
          produto.getTitulo(),
          produto.getAutor(),
          produto.getSerie(),
          produto.getVolume(),
          produto.getIsbn13(),
          produto.getNumPaginas(),
          produto.getIdioma(),
          produto.getDataPublicacao(),
          produto.getGenero(),
          produto.getClassIndicativa(),
          produto.getPreco(),
          produto.getEstoque(),
          produto.getImgCapa(),
        ],
      );

      return true;
    } catch (err) {
      console.error(`Erro ao cadastrar produto: ${err}`);
      return false;
    }
  };

  Alterar = async (produto: Produto) => {
    try {
      await pool.query(
        `UPDATE produto SET titulo = $1, autor = $2, serie = $3, volume = $4, isbn13 = $5, numero_paginas = $6, idioma = $7,
 data_publicacao = $8, genero = $9, classificacao_indicativa = $10, preco = $11, estoque = $12, imagem_capa = $13 WHERE id = $14`,
        [
          produto.getTitulo(),
          produto.getAutor(),
          produto.getSerie(),
          produto.getVolume(),
          produto.getIsbn13(),
          produto.getNumPaginas(),
          produto.getIdioma(),
          produto.getDataPublicacao(),
          produto.getGenero(),
          produto.getClassIndicativa(),
          produto.getPreco(),
          produto.getEstoque(),
          produto.getImgCapa(),
          produto.getId(),
        ],
      );
      return true;
    } catch (err) {
      console.error(`Erro ao atualizar produto: ${err}`);
      return false;
    }
  };

  Consultar = async (id: number) => {
    try {
      const result = await pool.query("SELECT * FROM produto WHERE id = $1", [
        id,
      ]);

      return result.rows[0];
    } catch (err) {
      console.error(`Erro ao consultar produto: ${err}`);
      return false;
    }
  };

  Excluir = async (id: number | null) => {
    try {
      await pool.query("DELETE FROM produto WHERE id = $1", [id]);
      return true;
    } catch (err) {
      console.error(`Erro ao excluir produto: ${err}`);
      return false;
    }
  };

  Listar = async () => {
    try {
      const produtos = await pool.query("SELECT * FROM produto");
      return produtos.rows;
    } catch (err) {
      console.log(`Erro ao buscar produtos: ${err}`);
    }
  };

  salvarEstoque = async (id: number | null, novaQuantidade: number) => {
    try {
      await pool.query("UPDATE produto SET estoque = $1 WHERE id = $2", [
        novaQuantidade,
        id,
      ]);
    } catch (err) {
      console.error(err);
    }
  };
}

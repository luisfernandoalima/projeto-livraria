import type { Request, Response } from "express";

import Entrada from "../class/Entrada.js";
import Usuario from "../class/Usuario.js";
import ProdutoEntrada from "../class/ProdutoEntrada.js";
import Produto from "../class/Produto.js";

import EntradaDAO from "../dal/EntradaDAO.js";
import ProdutoEntradaDAO from "../dal/ProdutoEntradaDAO.js";
import UsuarioDAO from "../dal/UsuarioDAO.js";
import { ProdutoDAO } from "../dal/ProdutoDAO.js";

import type IUsuario from "../types/Usuario.js";

import calcularPrecoTotal from "../utils/calcularPrecoTotal.js";
import type { IEntrada } from "../types/IEntrada.js";
export default class EntradaController {
  private dao = new EntradaDAO();

  Registrar = async (req: Request, res: Response) => {
    try {
      const produtoDAO = new ProdutoDAO();
      const produtoSaidaDAO = new ProdutoEntradaDAO();
      const usuarioDAO = new UsuarioDAO();

      const userInfo = (req as any).user;
      const userResult: IUsuario = await usuarioDAO.Read(userInfo.id);

      const user = new Usuario(userResult);

      const produtos: ProdutoEntrada[] = [];

      for (const item of req.body.produtos) {
        const produtoBanco = await produtoDAO.Consultar(item.produto_id);

        if (!produtoBanco) {
          return res.status(404).json({
            message: "Produto não encontrado",
          });
        }

        const produto = new Produto(produtoBanco);

        const produtoEntreda = new ProdutoEntrada(produto, item.quantidade);

        produtos.push(produtoEntreda);
      }

      const entrada: IEntrada = {
        id: null,
        cupomFiscal: req.body.cupomFiscal,
        data: req.body.data,
        nomeFornecedor: req.body.fornecedor,
        cnpjFornecedor: req.body.cnpjFornecedor,
        produtos,
        precoTotal: 0,
        colaborador: user,
      };

      const novaEntrada = new Entrada(entrada);

      console.log(novaEntrada);

      const precoTotal = calcularPrecoTotal(novaEntrada.getProdutos());

      novaEntrada.setPrecoTotal(precoTotal);

      const entradaId = await this.dao.Registrar(novaEntrada);

      if (!entradaId) {
        return res.status(400).json({
          message: "Erro ao registrar entrada",
          type: "error",
        });
      }

      console.log(entradaId);

      for (const item of novaEntrada.getProdutos()) {
        await produtoSaidaDAO.Registrar(
          entradaId.id,
          item.getProduto().getId(),
          item.getQuantidade(),
          item.getPrecoItens(),
        );

        await produtoDAO.salvarEstoque(
          item.getProduto().getId(),
          item.getProduto().getEstoque() + item.getQuantidade(),
        );
      }

      res.json({
        message: "Entrada registrada com sucesso",
        type: "success",
      });
    } catch (err) {
      console.log(err);
      res.json({
        message: `Erro ao registrar entrada: ${err}`,
        type: "error",
      });
    }
  };

  Listar = async (req: Request, res: Response) => {
    const entradas = await this.dao.Listar();

    res.json({ entradas });
  };

  Consultar = async (req: Request, res: Response) => {
    const cupomFiscal = Number(req.params.cupom);

    const result = await this.dao.Consultar(cupomFiscal);

    console.log(result);

    if (!result) {
      return res.status(400).json({
        message: "Erro ao buscar entrada",
        type: "error",
      });
    }

    res.json(result);
  };

  listarPorCupom = async (req: Request, res: Response) => {
    try {
      const cupom = Number(req.params.cupom);
      const entradas = await this.dao.listarPorCupom(cupom);

      if (!entradas) {
        return res
          .status(400)
          .json({ message: "Erro ao buscar entradas", type: "error" });
      }

      console.log(entradas);
      return res.status(200).json({ entradas });
    } catch (err) {
      return res
        .status(400)
        .json({ message: "Erro ao buscar entradas", type: "error" });
    }
  };
}

import type { Request, Response } from "express";
import Saida from "../class/Saida.js";
import SaidaDAO from "../dal/SaidaDAO.js";
import ProdutoSaidaDAO from "../dal/ProdutoSaidaDAO.js";

import validarTipoPagamento from "../utils/validarTipoPagamento.js";
import calcularPrecoTotal from "../utils/calcularPrecoTotal.js";
import type { ISaida } from "../types/ISaida.js";

import UsuarioDAO from "../dal/UsuarioDAO.js";
import Usuario from "../class/Usuario.js";
import type IUsuario from "../types/Usuario.js";
import { ProdutoDAO } from "../dal/ProdutoDAO.js";
import ProdutoSaida from "../class/ProdutoSaida.js";
import Produto from "../class/Produto.js";

export default class SaidaController {
  private dao = new SaidaDAO();

  Registrar = async (req: Request, res: Response) => {
    try {
      const produtoDAO = new ProdutoDAO();
      const produtoSaidaDAO = new ProdutoSaidaDAO();
      const usuarioDAO = new UsuarioDAO();

      const userInfo = (req as any).user;
      const userResult: IUsuario = await usuarioDAO.Read(userInfo.id);

      const user = new Usuario(userResult);

      const produtos: ProdutoSaida[] = [];

      for (const item of req.body.produtos) {
        const produtoBanco = await produtoDAO.Consultar(item.produto_id);

        if (!produtoBanco) {
          return res.status(404).json({
            message: "Produto não encontrado",
          });
        }

        const produto = new Produto(produtoBanco);

        const produtoSaida = new ProdutoSaida(produto, item.quantidade);

        produtos.push(produtoSaida);
      }

      const saida: ISaida = {
        id: null,
        cupomFiscal: req.body.cupomFiscal,
        data: req.body.data,
        cliente: req.body.cliente,
        cpfCliente: req.body.cpfCliente,
        tipoPagamento: req.body.tipoPagamento,
        produtos,
        precoTotal: 0,
        colaborador: user,
      };

      const novaSaida = new Saida(saida);

      console.log(novaSaida);

      if (!validarTipoPagamento(novaSaida.getTipoPagamento()))
        return res.status(400).json({
          message: "Erro ao registrar saída, erro de pagamento",
          type: "error",
        });

      const precoTotal = calcularPrecoTotal(novaSaida.getProdutos());

      novaSaida.setPrecoTotal(precoTotal);

      const saidaID = await this.dao.Registrar(novaSaida);

      if (!saidaID) {
        return res.status(400).json({
          message: "Erro ao registrar saída",
          type: "error",
        });
      }

      console.log(saidaID);

      for (const item of novaSaida.getProdutos()) {
        await produtoSaidaDAO.Registrar(
          saidaID.id,
          item.getProduto().getId(),
          item.getQuantidade(),
          item.getPrecoItens(),
        );
      }

      res.json({
        message: "Saída registrada com sucesso",
        type: "success",
      });
    } catch (err) {
      console.log(err);
      res.json({
        message: `Erro ao registrar saída: ${err}`,
        type: "error",
      });
    }
  };
  Listar = async (req: Request, res: Response) => {
    const listaSaida = await this.dao.Listar();

    res.json(listaSaida);
  };

  Consultar = async (req: Request, res: Response) => {
    const cupomFiscal = Number(req.params.cupom);

    const result = await this.dao.Consultar(cupomFiscal);

    if (!result) {
      return res.status(400).json({
        message: "Erro ao buscar saídas",
        type: "error",
      });
    }

    res.json(result);
  };

  consultarTudo = async (req: Request, res: Response) => {
    const cupomFiscal = Number(req.params.cupom);

    const result = await this.dao.consultaCompleta(cupomFiscal);

    if (!result) {
      return res.status(400).json({
        message: "Erro ao buscar entrada",
        type: "error",
      });
    }

    res.json(result);
  };
}

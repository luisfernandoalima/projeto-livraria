import type { Request, Response } from "express";
import Saida from "../class/Saida.js";
import SaidaDAO from "../dao/SaidaDAO.js";
import ProdutoSaidaDAO from "../dao/ProdutoSaidaDAO.js";

import calcularPrecoTotal from "../utils/calcularPrecoTotal.js";

export default class SaidaController {
  private dao = new SaidaDAO();

  Registrar = async (req: Request, res: Response) => {
    const produtoSaidaDAO = new ProdutoSaidaDAO();

    const user = (req as any).user;

    const { cupomFiscal, data, cliente, cpfCliente, tipoPagamento, produtos } =
      req.body;

    const precoTotal = calcularPrecoTotal();

    const newExit = new Saida(
      null,
      cupomFiscal,
      precoTotal,
      data,
      cliente,
      cpfCliente,
      tipoPagamento,
      produtos,
      user.id,
    );

    try {
      const saidaID = await this.dao.Registrar(newExit, user.id);

      if (!saidaID) {
        return res.status(400).json({
          message: "Erro ao registrar saída",
          type: "error",
        });
      }

      for (let i = 0; i < produtos.length; i++) {
        await produtoSaidaDAO.Registrar(
          saidaID,
          produtos[i].produto.getId(),
          produtos[i].quantidade,
          produtos[i].quantidade * produtos[i].produto.getPreco(),
        );
      }

      res.json({
        message: "Saída registrada com sucesso",
        type: "success",
      });
    } catch (err) {
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

import type { Request, Response } from "express";
import EntradaDAO from "./../dao/EntradaDAO.js";
import ProdutoEntradaDAO from "../dao/ProdutoEntradaDAO.js";
import Entrada from "../class/Entrada.js";

export default class EntradaController {
  private dao = new EntradaDAO();

  Registrar = async (req: Request, res: Response) => {
    const produtoEntradaDAO = new ProdutoEntradaDAO();

    const user = (req as any).user;

    const { cupomFiscal, data, nomeFornecedor, cnpjFornecedor, produtos } =
      req.body;

    const newEntry = new Entrada(
      null,
      cupomFiscal,
      new Date(data),
      nomeFornecedor,
      cnpjFornecedor,
      produtos,
      user.id,
    );

    try {
      const entradaID = await this.dao.Registrar(newEntry, user.id);

      if (!entradaID) {
        return res.status(400).json({
          message: "Erro ao registrar entrada",
          type: "error",
        });
      }

      for (let i = 0; i < produtos.length; i++) {
        await produtoEntradaDAO.Registrar(
          entradaID,
          produtos[i].produto.getId(),
          produtos[i].quantidade,
          produtos[i].quantidade * produtos[i].produto.getPreco(),
        );
      }

      res.json({
        message: "Entrada registrada com sucesso",
        type: "success",
      });
    } catch (err) {
      res.json({
        message: `Erro ao registrar entrada: ${err}`,
        type: "error",
      });
    }
  };

  Listar = async (req: Request, res: Response) => {
    const entradaDAO = new EntradaDAO();

    const listaEntrada = await entradaDAO.Listar();

    res.json(listaEntrada);
  };

  Consultar = async (req: Request, res: Response) => {
    const cupomFiscal = Number(req.params.cupom);

    const result = await this.dao.Consultar(cupomFiscal);

    if (!result) {
      return res.status(400).json({
        message: "Erro ao buscar entrada",
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

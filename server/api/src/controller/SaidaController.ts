import type { Request, Response } from "express";
import SaidaDAO from "../dao/SaidaDAO.js";
import ProdutoSaidaDAO from "../dao/ProdutoSaidaDAO.js";

export default class SaidaController {
  Registrar = async (req: Request, res: Response) => {
    const saidaDAO = new SaidaDAO();
    const produtoDAO = new ProdutoSaidaDAO();

    try {
      const saidaID = await saidaDAO.Registrar();

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
    const saidaDAO = new SaidaDAO();

    const listaEntrada = await saidaDAO.Listar();

    res.json(listaEntrada);
  };

  Consultar = async (req: Request, res: Response) => {
    const saidaDAO = new SaidaDAO();

    const entrada = await saidaDAO.Consultar();

    res.json(entrada);
  };
}

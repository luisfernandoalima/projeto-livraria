import type { Request, Response } from "express";
import EntradaDAO from "./../dao/EntradaDAO.js";
import ProdutoEntradaDAO from "../dao/ProdutoEntradaDAO.js";

export default class EntradaController {
  Registrar = async (req: Request, res: Response) => {
    const entradaDAO = new EntradaDAO();
    const produtoDAO = new ProdutoEntradaDAO();

    try {
      const entradaID = await entradaDAO.Registrar();

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
    const entradaDAO = new EntradaDAO();

    const entrada = await entradaDAO.Consultar();

    res.json(entrada);
  };
}

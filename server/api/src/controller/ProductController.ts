import type { Request, Response } from "express";
import Produto from "../class/Produto.js";
import { ProdutoDAO } from "../dao/ProdutoDAO.js";

export default class ProdutoController {
  Create = (req: Request, res: Response) => {
    const produtoDao = new ProdutoDAO();

    if (!produtoDao.Criar()) {
      return res
        .status(400)
        .json({ message: "Erro na criação do produto.", type: "error" });
    }

    return res
      .status(201)
      .json({ message: "Produto criado!", type: "success" });
  };

  Read = (req: Request, res: Response) => {
    const id = Number(req.params);
    const productDAO = new ProdutoDAO();

    const produto: Produto = productDAO.Consultar(id);

    if (!produto) {
      return res
        .status(400)
        .json({ message: "Erro ao encontrar produto.", type: "error" });
    }

    return res.status(201).json({ produto });
  };

  Update = (req: Request, res: Response) => {
    const produto = req.body;

    const produtoDAO = new ProdutoDAO();

    if (!produtoDAO.Alterar(produto)) {
      return res
        .status(400)
        .json({ message: "Erro ao atualizar produto.", type: "error" });
    }

    return res.status(201).json({ message: "Produto Atualizado!" });
  };

  Delete = (req: Request, res: Response) => {
    const id = Number(req.params);
    const productDAO = new ProdutoDAO();

    if (!productDAO.Excluir(id)) {
      return res
        .status(400)
        .json({ message: "Produto não encontrado.", type: "error" });
    }

    return res
      .status(201)
      .json({ message: "Produto excluído!", type: "success" });
  };

  listProducts = (req: Request, res: Response) => {
    const productDAO = new ProdutoDAO();

    let produtos = productDAO.Listar();

    return res.status(201).json({ produtos });
  };

  gerarRelatorio = (req: Request, res: Response) => {
    const productDAO = new ProdutoDAO();

    let produtos = productDAO.Listar();

    if (!produtos) {
      return res
        .status(400)
        .json({ message: "Erro ao encontrar produto.", type: "error" });
    }

    return res.status(201).json({ produtos });
  };

  salvarEstoque = (req: Request, res: Response): boolean => {
    return true;
  };
}

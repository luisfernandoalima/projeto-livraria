import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";

import type { Request, Response } from "express";
import Produto from "../class/Produto.js";
import { ProdutoDAO } from "../dal/ProdutoDAO.js";

import createUpload from "../middlewares/imageUpload.js";
export default class ProdutoController {
  private dao = new ProdutoDAO();

  Create = async (req: Request, res: Response) => {
    try {
      const imgId = uuidv4();
      const upload = createUpload(imgId);
      upload.single("imgCapa")(req, res, async (err: any) => {
        if (err) {
          return res
            .status(400)
            .json({ message: "Erro no upload da imagem", error: err });
        }
        const file = req.file;

        const imgCapa = file ? `/uploads/${file.filename}` : null;

        const {
          id,
          titulo,
          subtitulo,
          sinopse,
          autor,
          serie,
          volume,
          isbn13,
          formato,
          numPaginas,
          idioma,
          dataPublicacao,
          genero,
          classIndicativa,
          preco,
          estoque,
          status,
        } = req.body;

        const newProduct = new Produto(
          id,
          titulo,
          subtitulo,
          sinopse,
          autor,
          serie,
          volume,
          isbn13,
          formato,
          numPaginas,
          idioma,
          new Date(dataPublicacao),
          genero,
          classIndicativa,
          Number(preco),
          estoque,
          status,
          imgCapa,
        );

        if (!(await this.dao.Criar(newProduct))) {
          return res
            .status(400)
            .json({ message: "Erro na criação do produto.", type: "error" });
        }

        return res
          .status(201)
          .json({ message: "Produto criado!", type: "success" });
      });
    } catch (err) {
      return res
        .status(400)
        .json({ message: `Erro na criação do produto: ${err}`, type: "error" });
    }
  };

  Read = async (req: Request, res: Response) => {
    const { id } = req.params;

    const produto = await this.dao.Consultar(Number(id));

    if (!produto) {
      return res
        .status(400)
        .json({ message: "Erro ao encontrar produto.", type: "error" });
    }

    return res.status(201).json({ produto });
  };

  Update = async (req: Request, res: Response) => {
    try {
      const file = req.file;

      const id = Number(req.params.id);

      const produtoExistente = await this.dao.Consultar(id);

      if (!produtoExistente) {
        return res.status(404).json({
          message: "Produto não encontrado",
          type: "error",
        });
      }

      const {
        titulo,
        subtitulo,
        sinopse,
        autor,
        serie,
        volume,
        isbn13,
        formato,
        numPaginas,
        idioma,
        dataPublicacao,
        genero,
        classIndicativa,
        preco,
        estoque,
        status,
      } = req.body;

      let imgCapa = produtoExistente.imgCapa;

      if (file) {
        imgCapa = `/uploads/${file.filename}`;

        if (produtoExistente.imgCapa) {
          const oldPath = path.resolve(
            "uploads",
            produtoExistente.imgCapa.split("/uploads/")[1],
          );

          if (fs.existsSync(oldPath)) {
            fs.unlinkSync(oldPath);
          }
        }
      }

      const updatedProduct = new Produto(
        id,
        titulo,
        subtitulo,
        sinopse,
        autor,
        serie,
        volume,
        isbn13,
        formato,
        numPaginas,
        idioma,
        new Date(dataPublicacao),
        genero,
        classIndicativa,
        Number(preco),
        estoque,
        status,
        imgCapa,
      );

      if (!(await this.dao.Alterar(updatedProduct))) {
        return res.status(400).json({
          message: "Erro ao atualizar produto",
          type: "error",
        });
      }

      return res.status(200).json({
        message: "Produto atualizado com sucesso",
        type: "success",
      });
    } catch (err) {
      return res.status(500).json({
        message: `Erro no update: ${err}`,
        type: "error",
      });
    }
  };

  Delete = (req: Request, res: Response) => {
    const { id } = req.params;
    const productDAO = new ProdutoDAO();

    if (!productDAO.Excluir(Number(id))) {
      return res
        .status(400)
        .json({ message: "Produto não encontrado.", type: "error" });
    }

    return res
      .status(201)
      .json({ message: "Produto excluído!", type: "success" });
  };

  listProducts = async (req: Request, res: Response) => {
    const produtos = await this.dao.Listar();

    if (!produtos) {
      return res
        .status(400)
        .json({ message: "Erro ao buscar produtos", type: "error" });
    }

    return res.status(200).json({ produtos });
  };

  salvarEstoque = (req: Request, res: Response): boolean => {
    return true;
  };
}

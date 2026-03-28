import jwt from "jsonwebtoken";
import type { Request, Response } from "express";
import Usuario from "../class/Usuario.js";
import UsuarioDAO from "../dao/UsuarioDAO.js";
export default class UserController {
  private ACCESS_TOKEN = process.env.ACCESS_TOKEN_KEY;

  private dao = new UsuarioDAO();

  Create = async (req: Request, res: Response) => {
    const { nome, email, senha, telefone, cpf, cargo } = req.body;
    const newUser: Usuario = new Usuario(
      null,
      nome,
      email,
      senha,
      telefone,
      cpf,
      cargo,
    );

    if (!(await this.dao.Create(newUser))) {
      return res
        .status(400)
        .json({ message: "Erro ao cadastrar usuário", type: "error" });
    }

    return res
      .status(201)
      .json({ message: "Usuário cadastrado!", type: "success" });
  };

  Read = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const user = await this.dao.Read(id);

    if (!user) {
      return res
        .status(400)
        .json({ message: "Erro ao buscar usuário", type: "error" });
    }

    return res.status(200).json(user);
  };

  Update = async (req: Request, res: Response) => {
    const { id, nome, email, senha, telefone, cpf, cargo } = req.body;
    const updatedUser: Usuario = new Usuario(
      id,
      nome,
      email,
      senha,
      telefone,
      cpf,
      cargo,
    );

    if (!(await this.dao.Update(updatedUser))) {
      return res
        .status(400)
        .json({ message: "Erro ao cadastrar usuário", type: "error" });
    }

    return res
      .status(201)
      .json({ message: "Usuário cadastrado!", type: "success" });
  };

  Delete = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!(await this.dao.Delete(Number(id)))) {
      return res
        .status(400)
        .json({ message: "Erro ao excluir usuário", type: "error" });
    }

    return res
      .status(201)
      .json({ message: "Usuário excluído!", type: "success" });
  };

  Login = async (req: Request, res: Response) => {
    const { email, senha } = req.body;

    if (!(await this.dao.Login(email, senha))) {
      return res
        .status(403)
        .json({ message: "Erro ao executar login", type: "error" });
    }

    const token = jwt.sign({ email }, this.ACCESS_TOKEN!, {
      expiresIn: "1h",
    });

    res.json({ token });
  };

  listUsers = async (req: Request, res: Response) => {
    const user = await this.dao.listUsers();

    if (!user) {
      return res
        .status(400)
        .json({ message: "Erro ao buscar usuário", type: "error" });
    }

    return res.status(201).json(user);
  };
}

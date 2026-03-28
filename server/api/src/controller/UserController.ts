import jwt from "jsonwebtoken";
import type { Request, Response } from "express";
import Usuario from "../class/Usuario.js";
import UsuarioDAO from "../dao/UsuarioDAO.js";
export default class UserController {
  private ACCESS_TOKEN = process.env.ACCESS_TOKEN_KEY;

  private dao = new UsuarioDAO();

  Create = (req: Request, res: Response) => {
    const newUser = req.body;

    if (!this.dao.Create(newUser)) {
      return res
        .status(400)
        .json({ message: "Erro ao cadastrar usuário", type: "error" });
    }

    return res
      .status(201)
      .json({ message: "Usuário cadastrado!", type: "success" });
  };

  Read = (req: Request, res: Response) => {
    const id = Number(req.params);

    const user = this.dao.Read(id);

    if (!user) {
      return res
        .status(400)
        .json({ message: "Erro ao buscar usuário", type: "error" });
    }

    return res.status(201).json(user);
  };

  Update = (req: Request, res: Response) => {
    const id = Number(req.params);

    if (!this.dao.Update(id)) {
      return res
        .status(400)
        .json({ message: "Erro ao cadastrar usuário", type: "error" });
    }

    return res
      .status(201)
      .json({ message: "Usuário cadastrado!", type: "success" });
  };

  Delete = (req: Request, res: Response) => {
    const id = Number(req.params);

    if (!this.dao.Delete(id)) {
      return res
        .status(400)
        .json({ message: "Erro ao excluir usuário", type: "error" });
    }

    return res
      .status(201)
      .json({ message: "Usuário excluído!", type: "success" });
  };

  Login = (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!this.dao.Login(email, password)) {
      return res
        .status(403)
        .json({ message: "Erro ao executar login", type: "error" });
    }

    const token = jwt.sign({ email }, this.ACCESS_TOKEN!, {
      expiresIn: "1h",
    });

    res.json({ token });
  };

  listUsers = (req: Request, res: Response): Response<Usuario[]> => {
    const user = this.dao.listUsers();

    if (!user) {
      return res
        .status(400)
        .json({ message: "Erro ao buscar usuário", type: "error" });
    }

    return res.status(201).json(user);
  };
}

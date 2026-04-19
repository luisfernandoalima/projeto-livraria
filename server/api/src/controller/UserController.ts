import jwt from "jsonwebtoken";
import type { Request, Response } from "express";
import type IUsuario from "../types/Usuario.js";
import Usuario from "../class/Usuario.js";
import UsuarioDAO from "../dal/UsuarioDAO.js";
export default class UserController {
  private ACCESS_TOKEN = process.env.ACCESS_TOKEN_KEY;

  private dao = new UsuarioDAO();

  Create = async (req: Request, res: Response) => {
    const newUser: IUsuario = {
      id: null,
      nome: req.body.nome,
      email: req.body.email,
      senha: req.body.senha,
      telefone: req.body.telefone,
      cpf: req.body.cpf,
      cargo: req.body.cargo,
    };

    const usuario: Usuario = new Usuario(newUser);

    if (!(await this.dao.Create(usuario))) {
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
    const user: IUsuario = {
      id: req.body.id,
      nome: req.body.nome,
      email: req.body.email,
      senha: req.body.senha,
      telefone: req.body.telefone,
      cpf: req.body.cpf,
      cargo: req.body.cargo,
    };

    const usuario: Usuario = new Usuario(user);

    if (!(await this.dao.Update(usuario))) {
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

    const user = await this.dao.Login(email, senha);

    if (!user) {
      return res
        .status(403)
        .json({ message: "Erro ao executar login", type: "error" });
    }

    const usuario: Usuario = new Usuario(user);

    const token = jwt.sign(
      { id: usuario.getId(), email: usuario.getEmail() },
      this.ACCESS_TOKEN!,
      {
        expiresIn: "1h",
      },
    );

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

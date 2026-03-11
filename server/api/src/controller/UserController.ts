import type { Request, Response } from "express";
import Usuario from "../class/Usuario.js";
import UserDAO from "../dao/UserDAO.js";

export default class UserController {
  Create = (req: Request, res: Response) => {};
  Read = (req: Request, res: Response) => {
    return true;
  };
  Update = (req: Request, res: Response) => {};
  Delete = (req: Request, res: Response) => {};
  Login = (req: Request, res: Response) => {};
  listUsers = (req: Request, res: Response): Usuario[] => {
    const users: Usuario[] = [];

    return users;
  };
}

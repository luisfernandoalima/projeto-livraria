import { Router } from "express";
import type { Request, Response } from "express";

import UserController from "../controller/UserController.js";
const userController = new UserController();
const route = Router();

route.get("/user/list-users", userController.Read);
route.get("/user/list-users", userController.listUsers);

export default route;

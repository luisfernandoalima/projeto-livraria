import { Router } from "express";

import authValidate from "../middlewares/auth.js";

import UserController from "../controller/UserController.js";
import ProdutoController from "../controller/ProductController.js";
import EntradaController from "../controller/EntradaController.js";
import SaidaController from "../controller/SaidaController.js";

const route = Router();
const userController = new UserController();
const produtoController = new ProdutoController();
const entradaController = new EntradaController();
const saidaController = new SaidaController();

route.post("/user/sign-up", authValidate, userController.Create);
route.post("/user/login", userController.Login);
route.get("/user/find-user/:id", authValidate, userController.Read);
route.patch("/user/update", authValidate, userController.Update);
route.delete("/user/delete/:id", authValidate, userController.Delete);
route.get("/user/list-users", authValidate, userController.listUsers);

route.post("/product/create", authValidate, produtoController.Create);
route.get("/product/find-product/:id", produtoController.Read);
route.patch("/product/update/:id", authValidate, produtoController.Update);
route.delete("/product/delete/:id", authValidate, produtoController.Delete);
route.get("/product/list-products", produtoController.listProducts);
route.put("/product/save/:id", authValidate, produtoController.salvarEstoque);

route.post("/entry/register", authValidate, entradaController.Registrar);
route.get(
  "/entry/find-registration/:id",
  authValidate,
  entradaController.Consultar,
);
route.get("/entry/list-registration", authValidate, entradaController.Listar);

route.post("/outgoing/register", authValidate, saidaController.Registrar);
route.get(
  "/outgoing/find-registration/:id",
  authValidate,
  saidaController.Consultar,
);
route.get("/outgoing/list-registration", authValidate, saidaController.Listar);

export default route;

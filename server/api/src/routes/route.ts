import { Router } from "express";

import authValidate from "../middlewares/auth.js";
import createUpload from "../middlewares/imageUpload.js";

import { v4 as uuidv4 } from "uuid";

import UserController from "../controller/UserController.js";
import ProdutoController from "../controller/ProductController.js";
import EntradaController from "../controller/EntradaController.js";
import SaidaController from "../controller/SaidaController.js";

const route = Router();
const userController = new UserController();
const produtoController = new ProdutoController();
const entradaController = new EntradaController();
const saidaController = new SaidaController();

route.post("/user/sign-up", authValidate, userController.Criar);
route.post("/user/login", userController.Login);
route.get("/user/find-user/:id", authValidate, userController.Consultar);
route.patch("/user/update", authValidate, userController.Alterar);
route.delete("/user/delete/:id", authValidate, userController.Excluir);
route.get("/user/list-users", authValidate, userController.listarUsuarios);
route.get(
  "/user/list-by-name/:name",
  authValidate,
  userController.listarUsuariosPorNome,
);

route.post(
  "/product/create",
  authValidate,
  createUpload(uuidv4()).single("imgCapa"),
  produtoController.Criar,
);
route.get("/product/find-product/:id", produtoController.Consultar);
route.patch("/product/update/:id", authValidate, produtoController.Alterar);
route.delete("/product/delete/:id", authValidate, produtoController.Excluir);
route.get(
  "/product/list-products",
  authValidate,
  produtoController.listarProdutos,
);
route.get(
  "/product/list-by-name/:produto",
  authValidate,
  produtoController.listarPorNome,
);

route.post("/entry/register", authValidate, entradaController.Registrar);
route.get(
  "/entry/find-registration/:cupom",
  authValidate,
  entradaController.Consultar,
);
route.get("/entry/list-registration", authValidate, entradaController.Listar);
route.get(
  "/entry/list-registration-cupom/:cupom",
  authValidate,
  entradaController.listarPorCupom,
);

route.post("/outgoing/register", authValidate, saidaController.Registrar);
route.get(
  "/outgoing/find-registration/:cupom",
  authValidate,
  saidaController.Consultar,
);
route.get("/outgoing/list-registration", authValidate, saidaController.Listar);
route.get(
  "/outgoing/list-registration-cupom/:cupom",
  authValidate,
  saidaController.listarPorCupom,
);

export default route;

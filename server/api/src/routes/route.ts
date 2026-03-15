import { Router } from "express";
import UserController from "../controller/UserController.js";
import ProdutoController from "../controller/ProductController.js";
import EntradaController from "../controller/EntradaController.js";
import SaidaController from "../controller/SaidaController.js";

const route = Router();
const userController = new UserController();
const produtoController = new ProdutoController();
const entradaController = new EntradaController();
const saidaController = new SaidaController();

route.post("/user/sign-up", userController.Create);
route.get("/user/find-user/:id", userController.Read);
route.patch("/user/update/:id", userController.Update);
route.delete("/user/delete/:id", userController.Delete);
route.get("/user/list-users", userController.listUsers);
route.post("/user/login", userController.Login);

route.post("/product/create", produtoController.Create);
route.get("/product/find-product/:id", produtoController.Read);
route.patch("/product/update/:id", produtoController.Update);
route.delete("/product/delete/:id", produtoController.Delete);
route.get("/product/list-products", produtoController.listProducts);
route.put("/product/save/:id", produtoController.salvarEstoque);

route.post("/entry/register", entradaController.Registrar);
route.get("/entry/find-registration/:id", entradaController.Consultar);
route.get("/entry/list-registration", entradaController.Listar);

route.post("/outgoing/register", saidaController.Registrar);
route.get("/outgoing/find-registration/:id", saidaController.Consultar);
route.get("/outgoing/list-registration", saidaController.Listar);

export default route;

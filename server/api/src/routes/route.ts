import { Router } from "express";
import UserController from "../controller/UserController.js";

const route = Router();
const userController = new UserController();

route.post("/user/sign-up/", userController.Create);
route.get("/user/find-user/:id", userController.Read);
route.patch("/user/update/:id", userController.Update);
route.delete("/user/delete/:id", userController.Delete);
route.get("/user/list-users", userController.listUsers);
route.post("/user/login", userController.Login);

export default route;

import { Router } from "express";
import type { Request, Response } from "express";

import User from "../class/Usuario.js";

const route = Router();

route.get("/consultar", (req: Request, res: Response) => {
  const user = new User();
  res.send(user.Create());
});

export default route;

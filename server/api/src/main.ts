import express from "express";
import type { Application } from "express";
import cors from "cors";
import "dotenv/config";

import route from "./routes/route.js";

const app: Application = express();
app.use(express.json());
app.use(cors());

app.use("/api", route);

export default app;

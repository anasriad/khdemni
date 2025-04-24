import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import Router from "./routes";
import applyGlobalMiddlewares from '../utils/GlobalMiddleware'
dotenv.config();

const app: Express = express();
const port = process.env.PORT! || 3000;

applyGlobalMiddlewares(app)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
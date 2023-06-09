import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import autenticacaoRoutes from "./routes/auth-routes.js";

dotenv.config()

const app = express();
app
    .use(cors())
    .use(express.json())
    .use(autenticacaoRoutes)



export default app;
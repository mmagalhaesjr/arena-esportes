import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth-routes.js";

dotenv.config()

const app = express();
app
    .use(cors())
    .use(express.json())
    .use(authRoutes)



export default app;
import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import fieldRoutes from "./routes/ field.routes.js";
import scheduleRoutes from "./routes/schedule.routes.js";
import reservationRoutes from "./routes/reservation.routes.js";

dotenv.config()

const app = express();
app
    .use(cors())
    .use(express.json())
    .use(authRoutes, fieldRoutes, scheduleRoutes, reservationRoutes)



export default app;
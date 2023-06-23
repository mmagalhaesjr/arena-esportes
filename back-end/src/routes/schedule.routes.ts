import { Router } from "express";
import scheduleController from "../controllers/schedule-controller.js";


const scheduleRoutes = Router();

scheduleRoutes.get('/schedule/:id', scheduleController.getSchedule)



export default scheduleRoutes;
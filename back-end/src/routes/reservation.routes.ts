import { Router } from "express";
import reservationController from '../controllers/reservation-controller.js'

const reservationRoutes = Router();

reservationRoutes.get('/reservation',reservationController.getReservationsByUserId)
reservationRoutes.post('/reservation')
reservationRoutes.delete('/reservation')
reservationRoutes.patch('/reservation')


export default reservationRoutes;
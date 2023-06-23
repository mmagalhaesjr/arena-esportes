import { Request, Response } from 'express';
import reservationServices from '../services/reservation-services.js'

async function getReservationsByUserId(req: Request, res: Response){
    const userId;
  try {
    const reservations = await reservationServices.getReservationsByUserId(userId);
    res.send(reservations);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message);
  }
}

const reservationsController = {
    getReservationsByUserId
}

export default reservationsController;
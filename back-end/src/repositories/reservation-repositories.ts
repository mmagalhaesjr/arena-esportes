import prisma from '../config/database.js';
import {Reserva} from "@prisma/client"


async function getReservationsByUserId(userId: number): Promise<Reserva[]> {
    return await prisma.reserva.findMany({
        where:{
            id_usuario: userId
        }
    });
  }


  const reservationRepositories ={
    getReservationsByUserId
  }
  
  export default reservationRepositories
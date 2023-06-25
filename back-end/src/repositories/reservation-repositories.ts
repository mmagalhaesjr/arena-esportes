import prisma from '../config/database.js';
import {Reserva} from "@prisma/client"


async function getReservationsByUserId(userId: number): Promise<Reserva[]> {
    return await prisma.reserva.findMany({
        where:{
            id_usuario: userId
        }
    });
  }

  async function createReservation(userId:number,scheduleId: number ) {
    return await prisma.reserva.create({
      data: {
        id_usuario:userId,
        id_agenda:scheduleId
  
      }
    })
  
  }

  async function deleteReservation() {
    return await prisma.reserva.delete({
      where:{

      }
      })
    }
  




  const reservationRepositories ={
    getReservationsByUserId,
    createReservation,
    deleteReservation
  }
  
  export default reservationRepositories
import { cannotListReservationsError } from '../errors/cannot-list-reservations-error.js';
import { notFoundError } from '../errors/not-found-error.js';
import reservationRepositories from '../repositories/reservation-repositories.js';

async function getReservationsByUserId(userId: number) {
    const reservations = await reservationRepositories.getReservationsByUserId(userId);

    if(reservations.length === 0) throw cannotListReservationsError()
    return reservations;
}

async function createReservation(userId: number, scheduleId: number) {
    // verificar se a o horário esta msm disponivel
    // fazer a reserva   
 }
 
function deleteReservation(userId: number, reservationId: number) {
   // verificar se a reserva existe
   // verificar se a reserva é do usuario que esta fazendo a requisição
   
}




const fieldServices = {
    getReservationsByUserId,
    deleteReservation,
    createReservation
}
export default fieldServices;
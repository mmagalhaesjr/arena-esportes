import { cannotCompleteReservationError } from '../errors/cannot-complete-reservation-error.js';
import { cannotListReservationsError } from '../errors/cannot-list-reservations-error.js';
import { notFoundError } from '../errors/not-found-error.js';
import reservationRepositories from '../repositories/reservation-repositories.js';
import scheduleRepositories from '../repositories/schedule-repositories.js';

async function getReservationsByUserId(userId: number) {
    const reservations = await reservationRepositories.getReservationsByUserId(userId);

    if (reservations.length === 0) throw cannotListReservationsError()
    return reservations;
}

async function createReservation(userId: number, scheduleId: number) {
    const schedule = await scheduleRepositories.getScheduleById(scheduleId)
    if (!schedule || !schedule.disponivel) throw cannotCompleteReservationError()

    await scheduleRepositories.updateSchedule(scheduleId, false)
    const reservation = await reservationRepositories.createReservation(userId, scheduleId)
    return reservation
}

function deleteReservation(userId: number, reservationId: number) {
    // verificar se a reserva existetradutor

    // verificar se a reserva é do usuario que esta fazendo a requisição

}



const fieldServices = {
    getReservationsByUserId,
    deleteReservation,
    createReservation
}
export default fieldServices;
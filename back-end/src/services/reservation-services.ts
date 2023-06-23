import reservationRepositories from '../repositories/reservation-repositories';

async function getReservationsByUserId(userId: number) {
    const reservations = await reservationRepositories.getReservationsByUserId(userId);
    return reservations;
}
const fieldServices = {
    getReservationsByUserId
}
export default fieldServices;
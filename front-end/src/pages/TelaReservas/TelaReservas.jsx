import Reserva from '../../components/Reserva/Reserva';
import Corpo from '../../components/Corpo/Corpo'
import { StyledReservas, StyledContainer } from './styled';



export default function TelaReservas() {
    return (
        <>
            <Corpo />
            <StyledContainer>
                <h1>Reservas</h1>
                <StyledReservas>

                   <Reserva/>
                   <Reserva/>
                   <Reserva/>
                   <Reserva/>
                   <Reserva/>
                   <Reserva/>
                   <Reserva/>
                   <Reserva/>
                   <Reserva/>
                   <Reserva/>
                   <Reserva/>
                   <Reserva/>

                </StyledReservas>
            </StyledContainer>

        </>

    )
}
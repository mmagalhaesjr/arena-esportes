import dayjs from 'dayjs';
import Calendario from '../../components/Calendario/Calendario';
import Corpo from '../../components/Corpo/Corpo'
import Horarios from '../../components/Horarios/Horarios';
import { StyledReservar, StyledContainer } from './styled';
import 'react-calendar/dist/Calendar.css'

export default function TelaReservas() {

    return (
        <>
            <Corpo />
            <StyledContainer>
                <h1>Reservar</h1>
                <StyledReservar>
                    <Calendario />
                    <Horarios />


                </StyledReservar>
            </StyledContainer>

        </>

    )
}
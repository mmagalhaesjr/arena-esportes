import { StyledButton, StyledReserva } from "./styled"


export default function Reserva(){

    return (
        <StyledReserva>
            <div><h2>Marcos Magalhaes Junior</h2></div>
            <div><h2>Dia:02/07/2023</h2></div>
            <div><h2>Hora:20h as 21h</h2></div>
            <div><h2>Status: PAGO</h2></div>

            <StyledButton>
                <button>Editar</button>
                <button>Cancelar</button>
            </StyledButton>
        </StyledReserva>

    )
}
import Corpo from '../../components/corpo/Corpo'
import { StyledReservas, StyledButton } from "./styled"



export default function TelaReservas() {
    return (
        <>
            <Corpo />
            <StyledReservas>
                <form action="">
                    <h1>reservas</h1>
                    <h2>Marcos Magalhaes Junior</h2>
                    <h2>Dia:02/07/2023</h2>
                    <h2>Hora:20h as 21h</h2>
                    <h2>Status: PAGO</h2>
                    <StyledButton>
                        <button>Editar</button>
                        <button>Cancelar</button>
                    </StyledButton>
                    <p>editar ou cancelar horario minimo 24h antes</p>
                </form>
            </StyledReservas>
        </>

    )
}
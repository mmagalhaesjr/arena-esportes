import horarios from "../../constants/horarios";
import { StyledHora, StyledHorarios } from "./styled";

export default function Horarios() {
    return (
        <StyledHorarios>
        
            {horarios.map(horarios => (

                <StyledHora key={horarios.id}>
                    {horarios.hora}
                </StyledHora>
            ))}
        </StyledHorarios>
    )
}
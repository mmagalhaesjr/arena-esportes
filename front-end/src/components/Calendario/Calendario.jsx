import dayjs from "dayjs";
import { Container, StyledCalendario } from "./styled";

export default function Calendario() {

    function selecionarDia(date) {
        const timestamp = dayjs(date).valueOf()

    }
    return (
       
            <StyledCalendario
                locale="pt-BR"
                formatDay={(_, date) => dayjs(date).format("DD")}
                onClickDay={((date) => selecionarDia(date))} />




    )
}
import Corpo from '../../components/corpo/Corpo'
import { StyledLogo } from "./styled"
import logo from '../../assets/logo.png';



export default function TelaInicial() {
    return (

        <>
            <Corpo />

            <StyledLogo>
                <img className="logo" src={logo} alt='logo' />
                <button>RESERVAR QUADRA</button>
            </StyledLogo>
        </>








    )
}
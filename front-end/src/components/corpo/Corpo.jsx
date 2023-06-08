import { StyledCorpo } from "./styled"
import campo from '../../assets/campo.png';
import { Link } from "react-router-dom";



export default function Corpo() {
    return (

        <StyledCorpo>
            <div>
                <Link to="/">PÁGINA INICIAL</Link>
                <Link to="/quadras">QUADRAS</Link>
                <Link>CHURRASQUEIRA</Link>
                <Link to="/reservas">MINHAS RESERVAS</Link>
                <Link>VIDEOS</Link>
                <Link to="/login">LOGIN</Link>
                <Link to="/cadastro">CADASTRO</Link>
            </div>
            <img src={campo} alt='logo' />
        </StyledCorpo>
    )
}


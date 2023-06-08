import Corpo from '../../components/corpo/Corpo'
import { StyledContainer } from "./styled"
import logo from "../../assets/logo.png"




export default function TelaQuadras() {
    return (
        <>
            <Corpo />

            <StyledContainer>
                <section>
                    <div>
                    <img className="logo" src={logo} alt='logo' />
                    <p>campo</p>
                    </div>
                </section>
                <section>
                    <div>
                    <img className="logo" src={logo} alt='logo' />
                    <p>campo</p>
                    </div>
                </section>
                <section>
                    <div>
                    <img className="logo" src={logo} alt='logo' />
                    <p>campo</p>
                    </div>
                </section>
            </StyledContainer>
        </>
    )
}
import { Link } from 'react-router-dom';
import Corpo from '../../components/corpo/Corpo'
import { StyledLogin } from "./styled"




function CadastroUsuario() {


  return (
    <>
      <Corpo />
      <StyledLogin>
        <form action="">
          <br />
          <div className="inputBox">
            <input type="text" name="email" id="email" className="inputUser" required />
            <label htmlFor="email" className="labelInput">Email</label>
          </div>

          <br /><br />

          <div className="inputBox">
            <input type="tel" name="senha" id="senha" className="inputUser" required />
            <label htmlFor="senha" className="labelInput">Senha</label>
          </div>

          <br /><br />

          <input type="submit" name="submit" id="submit" />
          <br /><br />
        </form>
        <Link to="/cadastro">Cadastre-se</Link>
      </StyledLogin>

    </>

  );
}

export default CadastroUsuario;
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
              <input type="text" name="nome" id="nome" className="inputUser" required />
              <label htmlFor="nome" className="labelInput">Nome completo</label>
            </div>
            <br /><br />
            <div className="inputBox">
              <input type="text" name="email" id="email" className="inputUser" required />
              <label htmlFor="email" className="labelInput">Email</label>
            </div>
            <br /><br />
            <div className="inputBox">
              <input type="tel" name="telefone" id="telefone" className="inputUser" required />
              <label htmlFor="telefone" className="labelInput">Telefone</label>
            </div>
            <br /><br />
            <div className="inputBox">
              <input type="tel" name="senha" id="senha" className="inputUser" required />
              <label htmlFor="senha" className="labelInput">Senha</label>
            </div>
            <br /><br />
            <input type="submit" name="submit" id="submit" />
          </form>
      </StyledLogin>

    </>

  );
}

export default CadastroUsuario;
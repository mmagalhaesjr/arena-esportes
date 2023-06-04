import TelaInicial from "./pages/TelaInicial/TelaInicial";
import TelaQuadras from "./pages/TelaQuadras/TelaQuadras";
import TelaReservas from "./pages/TelaReservas/TelaReservas";
import TelaCadastro from "./pages/TelaCadastro/TelaCadastro";
import TelaLogin from "./pages/TelaLogin/TelaLogin";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  
  return (
   
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<TelaInicial />} />
              <Route path="/cadastro" element={<TelaCadastro />} />
              <Route path="/login" element={<TelaLogin />} />
              <Route path="/quadras" element={<TelaQuadras />} />
              <Route path="/reservas" element={<TelaReservas />} />
            </Routes>
          </div>
        </BrowserRouter>
    
  )
}

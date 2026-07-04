import { BrowserRouter, Routes, Route} from "react-router-dom";
import InicioPage from "./pages/Inicio";
import SobreNosotrosPage from "./pages/SobreNosotros";
import ServiciosPage from "./pages/Servicios";
import ContactosPage from "./pages/Contactos";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InicioPage />} />
        <Route path="/sobre-nosotros" element={<SobreNosotrosPage />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/contactos" element={<ContactosPage />} />
      </Routes>
    </BrowserRouter>
  );
}

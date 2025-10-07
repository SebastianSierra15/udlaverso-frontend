import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Inicio from "./pages/Inicio/Inicio";
import Login from "./pages/Auth/Login";
import Registrarse from "./pages/Auth/Registrarse";
import RecuperarContrasenia from "./pages/Auth/RecuperarContrasenia";
import AcercaDe from "./pages/AcercaDe/AcercaDe";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/acerca-de" element={<AcercaDe />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/registrarse" element={<Registrarse />} />
        <Route path="/recuperar" element={<RecuperarContrasenia />} />
      </Routes>
    </Router>
  );
}

export default App;

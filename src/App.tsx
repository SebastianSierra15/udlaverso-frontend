import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layouts/Layout";
import LayoutAdmin from "./Layouts/LayoutAdmin";
import ScrollToTop from "./components/utils/ScrollTop";
// Páginas públicas
import Inicio from "./pages/Inicio/Inicio";
import Login from "./pages/Auth/Login";
import Registrarse from "./pages/Auth/Registrarse";
import RecuperarContrasenia from "./pages/Auth/RecuperarContrasenia";
import AcercaDe from "./pages/AcercaDe/AcercaDe";
import Proyectos from "./pages/Proyectos/Proyectos";
import ProyectoDetalle from "./pages/Proyectos/ProyectoDetalle";
import Noticias from "./pages/Noticias/Noticias";
import NoticiaDetalle from "./pages/Noticias/NoticiaDetalle";
import Contacto from "./pages/Contacto/Contacto";
import FAQ from "./pages/FAQ/FAQ";
import ComoEmpezar from "./pages/ComoEmpezar/ComoEmpezar";
// Páginas admin
import Admin from "./pages/Admin/Admin";
import AdminComentarios from "./pages/Admin/AdminComentarios";
import AdminFAQ from "./pages/Admin/AdminFAQ";
import AdminNoticias from "./pages/Admin/AdminNoticias";
import AdminProyectos from "./pages/Admin/AdminProyectos";

function App() {
  return (
    <Router>
      <ScrollToTop />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registrarse" element={<Registrarse />} />
        <Route path="/recuperar" element={<RecuperarContrasenia />} />

        <Route element={<Layout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/acerca-de" element={<AcercaDe />} />
          <Route path="/como-empezar" element={<ComoEmpezar />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/proyectos/:nombre" element={<ProyectoDetalle />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/noticias/:id" element={<NoticiaDetalle />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/preguntas-frecuentes" element={<FAQ />} />
        </Route>

        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<Admin />} />
          <Route path="comentarios" element={<AdminComentarios />} />
          <Route path="noticias" element={<AdminNoticias />} />
          <Route path="preguntas-frecuentes" element={<AdminFAQ />} />
          <Route path="proyectos" element={<AdminProyectos />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

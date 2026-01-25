import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import LayoutAdmin from "./layouts/LayoutAdmin";
import ScrollToTop from "./components/utils/ScrollTop";
import RutaProtegida from "./components/Shared/organisms/RutaProtegida";
import { ROUTES } from "./routes";
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
import TerminosYCondiciones from "./pages/Legales/TerminosYCondiciones";
import Error404 from "./pages/Error/Error404";
import ErrorGeneral from "./pages/Error/ErrorGeneral";
// Páginas admin
import Admin from "./pages/Admin/Admin";
import AdminComentarios from "./pages/Admin/Comentarios/AdminComentarios";
import AdminFAQ from "./pages/Admin/FAQ/AdminFAQ";
import AdminNoticias from "./pages/Admin/Noticias/AdminNoticias";
import AdminNuevaNoticia from "./pages/Admin/Noticias/AdminNuevaNoticia";
import AdminEditarNoticia from "./pages/Admin/Noticias/AdminEditarNoticia";
import AdminProyectos from "./pages/Admin/Proyectos/AdminProyectos";
import AdminNuevoProyecto from "./pages/Admin/Proyectos/AdminNuevoProyecto";
import AdminEditarProyecto from "./pages/Admin/Proyectos/AdminEditarProyecto";

function App() {
  return (
    <Router>
      <ScrollToTop />

      <Routes>
        <Route path={ROUTES.error} element={<ErrorGeneral />} />
        <Route path={ROUTES.notFound} element={<Error404 />} />

        <Route path={ROUTES.login} element={<Login />} />
        <Route path={ROUTES.registrarse} element={<Registrarse />} />
        <Route path={ROUTES.recuperar} element={<RecuperarContrasenia />} />

        <Route element={<Layout />}>
          <Route path={ROUTES.home} element={<Inicio />} />
          <Route path={ROUTES.acercaDe} element={<AcercaDe />} />
          <Route path={ROUTES.comoEmpezar} element={<ComoEmpezar />} />
          <Route path={ROUTES.proyectos} element={<Proyectos />} />
          <Route path={ROUTES.proyectoDetalle} element={<ProyectoDetalle />} />
          <Route path={ROUTES.noticias} element={<Noticias />} />
          <Route path={ROUTES.noticiaDetalle} element={<NoticiaDetalle />} />
          <Route path={ROUTES.contacto} element={<Contacto />} />
          <Route path={ROUTES.faq} element={<FAQ />} />
          <Route path={ROUTES.terminos} element={<TerminosYCondiciones />} />
        </Route>

        <Route
          path={ROUTES.admin}
          element={
            <RutaProtegida permisosRequeridos={["ver_panel_admin"]}>
              <LayoutAdmin />
            </RutaProtegida>
          }
        >
          <Route
            index
            element={
              <RutaProtegida permisosRequeridos={["ver_panel_admin"]}>
                <Admin />
              </RutaProtegida>
            }
          />
          <Route
            path={ROUTES.adminResenias}
            element={
              <RutaProtegida permisosRequeridos={["moderar_reseñas"]}>
                <AdminComentarios />
              </RutaProtegida>
            }
          />
          <Route
            path={ROUTES.adminNoticias}
            element={
              <RutaProtegida permisosRequeridos={["ver_noticias"]}>
                <AdminNoticias />
              </RutaProtegida>
            }
          />
          <Route
            path={ROUTES.adminNoticiasNueva}
            element={
              <RutaProtegida permisosRequeridos={["crear_noticias"]}>
                <AdminNuevaNoticia />
              </RutaProtegida>
            }
          />
          <Route
            path={ROUTES.adminNoticiasEditar}
            element={
              <RutaProtegida permisosRequeridos={["editar_noticias"]}>
                <AdminEditarNoticia />
              </RutaProtegida>
            }
          />
          <Route
            path={ROUTES.adminFaq}
            element={
              <RutaProtegida permisosRequeridos={["gestionar_faq"]}>
                <AdminFAQ />
              </RutaProtegida>
            }
          />
          <Route
            path={ROUTES.adminProyectos}
            element={
              <RutaProtegida permisosRequeridos={["ver_proyectos"]}>
                <AdminProyectos />
              </RutaProtegida>
            }
          />
          <Route
            path={ROUTES.adminProyectosNuevo}
            element={
              <RutaProtegida permisosRequeridos={["crear_proyectos"]}>
                <AdminNuevoProyecto />
              </RutaProtegida>
            }
          />
          <Route
            path={ROUTES.adminProyectosEditar}
            element={
              <RutaProtegida permisosRequeridos={["editar_proyectos"]}>
                <AdminEditarProyecto />
              </RutaProtegida>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes";
import { Layout, LayoutAdmin } from "./layouts";
import { ScrollToTop, RutaProtegida } from "./components/Shared";
// Páginas públicas
import { Inicio } from "./pages/Inicio";
import { Login, Registrarse, RecuperarContrasenia } from "./pages/Auth";
import { AcercaDe } from "./pages/AcercaDe";
import { Proyectos, ProyectoDetalle } from "./pages/Proyectos";
import { Noticias, NoticiaDetalle } from "./pages/Noticias";
import { Contacto } from "./pages/Contacto";
import { FAQ } from "./pages/FAQ";
import { ComoEmpezar } from "./pages/ComoEmpezar";
import { TerminosYCondiciones } from "./pages/Legales";
import { Error404, ErrorGeneral } from "./pages/Error";
// Páginas admin
import {
  Admin,
  AdminComentarios,
  AdminFAQ,
  AdminNoticias,
  AdminNuevaNoticia,
  AdminEditarNoticia,
  AdminProyectos,
  AdminNuevoProyecto,
  AdminEditarProyecto,
} from "./pages/Admin";

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

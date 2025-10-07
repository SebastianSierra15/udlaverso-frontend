import React from "react";
import { Link } from "react-router-dom";
import GrupoRedes from "../molecules/GrupoRedes";
import ListaEnlaces from "../molecules/ListaEnlaces";
import TextoFooter from "../atoms/TextoFooter";
import TituloSeccion from "../atoms/TituloSeccion";
import Copyright from "../atoms/Copyright";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-t from-udlaverso-verde/10 via-white to-white border-t mt-10">
      <div className="max-w-7xl mx-auto py-10 px-6 justify-center sm:justify-normal grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo + Redes */}
        <div className="flex flex-col items-start gap-4">
          <Link to="/">
            <img
              src="/logos/logo.png"
              alt="Logo UDLAVERSO"
              className="h-14 w-auto"
              title="Inicio"
            />
          </Link>

          <GrupoRedes />
        </div>

        {/* Navegación */}
        <ListaEnlaces
          titulo="Navegación"
          enlaces={[
            { texto: "Inicio", ruta: "/" },
            { texto: "Proyectos", ruta: "/proyectos" },
            { texto: "Acerca de", ruta: "/acerca-de" },
            { texto: "Noticias", ruta: "/noticias" },
            { texto: "Contacto", ruta: "/contacto" },
          ]}
        />

        {/* Recursos */}
        <ListaEnlaces
          titulo="Recursos"
          enlaces={[
            { texto: "Descargar visor", ruta: "/descargas" },
            { texto: "FAQs", ruta: "/faq" },
          ]}
        />

        {/* Información institucional */}
        <div>
          <TituloSeccion texto="Información institucional" />
          <div className="flex flex-col gap-2">
            <TextoFooter texto="Carrera #3, Florencia, Caquetá" />
            <TextoFooter texto="Tel: 84358786" />
          </div>
        </div>
      </div>
      {/* Copyright */}
      <Copyright />
    </footer>
  );
};

export default Footer;

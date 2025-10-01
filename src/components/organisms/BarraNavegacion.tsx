import { Link, NavLink } from "react-router-dom";
import Boton from "../atoms/Boton";
import logo from "../../assets/logos/logo-udlaverso.png";

const BarraNavegacion = () => {
  return (
    <header className="bg-udlaverso-blanco shadow">
      <nav className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src={logo}
            alt="Logo UDLAVERSO"
            className="h-10 w-auto object-contain md:h-12"
          />
        </Link>

        {/* Menú */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 w-full md:w-auto">
          <ul className="flex flex-col md:flex-row gap-4 md:gap-8 text-udlaverso-gris font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-udlaverso-verde ${
                    isActive ? "border-b-2 border-udlaverso-verde" : ""
                  }`
                }
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/proyectos"
                className={({ isActive }) =>
                  `hover:text-udlaverso-verde ${
                    isActive ? "border-b-2 border-udlaverso-verde" : ""
                  }`
                }
              >
                Proyectos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/acerca"
                className={({ isActive }) =>
                  `hover:text-udlaverso-verde ${
                    isActive ? "border-b-2 border-udlaverso-verde" : ""
                  }`
                }
              >
                Acerca de
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/noticias"
                className={({ isActive }) =>
                  `hover:text-udlaverso-verde ${
                    isActive ? "border-b-2 border-udlaverso-verde" : ""
                  }`
                }
              >
                Noticias
              </NavLink>
            </li>
          </ul>

          {/* Botones */}
          <div className="flex flex-col md:flex-row gap-3">
            <Boton texto="Iniciar sesión" variante="secundario" />
            <Boton texto="Registrarse" variante="principal" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default BarraNavegacion;

import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Boton from "../atoms/Boton";

const Header = () => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isTop ? "bg-transparent shadow-none" : "bg-white shadow-sm"
      }`}
    >
      <nav className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src={isTop ? "/logos/logo-white.png" : "/logos/logo.png"}
            alt="Logo UDLAVERSO"
            className="h-10 w-auto object-contain md:h-12"
            title="Inicio"
          />
        </Link>

        {/* Menú */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 w-full md:w-auto">
          <ul
            className={`flex flex-col md:flex-row gap-2 md:gap-4 font-medium ${
              isTop ? "text-white" : "text-udlaverso-gris"
            }`}
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-udlaverso-verde ${
                    isActive
                      ? "border-b-2 font-bold border-udlaverso-verde"
                      : ""
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
                    isActive
                      ? "border-b-2 font-bold border-udlaverso-verde"
                      : ""
                  }`
                }
              >
                Proyectos
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/acerca-de"
                className={({ isActive }) =>
                  `hover:text-udlaverso-verde ${
                    isActive
                      ? "border-b-2 font-bold border-udlaverso-verde"
                      : ""
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
                    isActive
                      ? "border-b-2 font-bold border-udlaverso-verde"
                      : ""
                  }`
                }
              >
                Noticias
              </NavLink>
            </li>
          </ul>

          {/* Botones */}
          <div className="flex flex-col md:flex-row gap-3">
            <Link to="/login">
              <Boton
                texto="Iniciar sesión"
                variante="secundario"
                modo={isTop ? "light" : "default"}
              />
            </Link>

            <Link to="/registrarse">
              <Boton
                texto="Registrarse"
                variante="principal"
                modo={isTop ? "light" : "default"}
              />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

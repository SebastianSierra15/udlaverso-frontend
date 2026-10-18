import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from "../../../hooks/useAuth";
import MenuUsuario from "../molecules/MenuUsuario";
import Boton from "../atoms/Boton";

const Header = () => {
  const [isTop, setIsTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  const cerrarMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    cerrarMenu();
  }, [location.pathname]);

  const headerSolid = !isTop || menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        headerSolid ? "bg-white shadow-sm" : "bg-transparent shadow-none"
      }`}
    >
      <nav
        aria-label="Navegación principal"
        className="relative max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4"
      >
        {/* Logo */}
        <Link to="/" className="flex-shrink-0" onClick={cerrarMenu}>
          <img
            src={headerSolid ? "/logos/logo.png" : "/logos/logo-white.png"}
            alt="Logo UDLAVERSO"
            className="h-10 w-auto object-contain md:h-12"
          />
        </Link>

        <button
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="menu-principal"
          onClick={() => setMenuOpen((abierto) => !abierto)}
          className={`md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
            headerSolid
              ? "border-udlaverso-verde text-udlaverso-verde"
              : "border-white text-white"
          }`}
        >
          {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>

        {/* Menú */}
        <div
          id="menu-principal"
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute left-0 right-0 top-full flex-col gap-4 border-t border-gray-100 bg-white px-4 pb-5 pt-4 shadow-lg md:static md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0 md:shadow-none md:gap-6 md:w-auto`}
        >
          <ul
            className={`flex flex-col md:flex-row gap-1 md:gap-4 font-medium ${
              headerSolid ? "text-udlaverso-gris" : "text-white"
            }`}
          >
            <li>
              <NavLink
                to="/"
                onClick={cerrarMenu}
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
                onClick={cerrarMenu}
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
                onClick={cerrarMenu}
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
                to="/como-empezar"
                onClick={cerrarMenu}
                className={({ isActive }) =>
                  `hover:text-udlaverso-verde ${
                    isActive
                      ? "border-b-2 font-bold border-udlaverso-verde"
                      : ""
                  }`
                }
              >
                Cómo empezar
              </NavLink>
            </li>
          </ul>

          {/* Botones */}
          {user ? (
            <MenuUsuario
              nombre={user.nombresUsuario || "Usuario"}
              permisos={user.permisos || []}
              onLogout={logout}
              colorTexto={headerSolid ? "text-udlaverso-gris" : "text-white"}
            />
          ) : (
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/login" onClick={cerrarMenu}>
                <Boton
                  texto="Iniciar sesión"
                  variante="secundario"
                  modo={headerSolid ? "default" : "light"}
                />
              </Link>
              <Link to="/registrarse" onClick={cerrarMenu}>
                <Boton
                  texto="Registrarse"
                  variante="principal"
                  modo={headerSolid ? "default" : "light"}
                />
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

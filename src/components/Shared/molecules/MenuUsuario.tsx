import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import IconoUsuario from "../atoms/IconoUsuario";

interface Permiso {
  nombrePermiso: string;
}

interface MenuUsuarioProps {
  nombre: string;
  permisos: Permiso[];
  onLogout: () => void;
  colorTexto?: string;
}

const MenuUsuario: React.FC<MenuUsuarioProps> = ({
  nombre,
  permisos,
  onLogout,
  colorTexto = "text-udlaverso-gris",
}) => {
  const [abierto, setAbierto] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const puedeVerPanel = permisos.some(
    (p) => p.nombrePermiso.toLowerCase() !== "escribir_reseña"
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setAbierto(false);
      }
    };

    if (abierto) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [abierto]);

  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={() => setAbierto(!abierto)}
        className={`flex items-center gap-2 font-medium ${colorTexto} hover:text-udlaverso-verde transition`}
      >
        <IconoUsuario color={colorTexto} tamano="text-xl" />
        <span className="hidden sm:inline">{nombre}</span>
        <FaChevronDown
          className={`transition-transform ${abierto ? "rotate-180" : ""}`}
        />
      </button>

      {abierto && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border text-udlaverso-gris z-50">
          {puedeVerPanel && (
            <Link
              to="/admin"
              onClick={() => setAbierto(false)}
              className="block px-4 py-2 hover:bg-udlaverso-verde/10 hover:text-udlaverso-verde transition"
            >
              Panel administración
            </Link>
          )}
          <button
            onClick={() => {
              onLogout();
              setAbierto(false);
            }}
            className="w-full text-left px-4 py-2 hover:bg-udlaverso-verde/10 hover:text-udlaverso-verde transition"
          >
            Cerrar sesión
          </button>
        </div>
      )}
    </div>
  );
};

export default MenuUsuario;

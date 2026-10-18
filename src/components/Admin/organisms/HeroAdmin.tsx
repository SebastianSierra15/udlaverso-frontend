import { FaHome } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { useAuth } from "../../../hooks/useAuth";

const HeroAdmin: React.FC = () => {
  const { logout } = useAuth();

  return (
    <header className="flex flex-col items-start justify-between gap-4 rounded-2xl border bg-white px-4 py-3 shadow-sm sm:flex-row sm:items-center sm:px-5">
      <div className="flex items-center gap-3 sm:gap-4">
        <img
          src="/logos/logo-udla.webp"
          alt="Logo UdlaVerso"
          className="w-12 h-12 object-contain"
        />

        <div>
          <h1 className="text-lg font-extrabold tracking-tight text-udlaverso-negro sm:text-xl md:text-2xl">
            Panel de Administración
          </h1>

          <p className="text-sm text-gray-500">
            Gestiona proyectos, noticias, reseñas y preguntas frecuentes.
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:gap-3">
        <a
          href="/"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-lg border bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-gray-100"
        >
          <FaHome className="w-4 h-4 text-udlaverso-verde" />
          <span>Ir al portal</span>
        </a>

        <button
          onClick={logout}
          className="flex items-center justify-center gap-2 rounded-lg border border-red-100 bg-red-50 px-4 py-2 text-sm font-medium text-red-700 transition-all hover:bg-red-100 hover:text-red-800"
        >
          <LuLogOut className="w-4 h-4" />
          <span>Cerrar sesión</span>
        </button>
      </div>
    </header>
  );
};

export default HeroAdmin;

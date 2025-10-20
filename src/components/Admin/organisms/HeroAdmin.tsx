import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";

const HeroAdmin: React.FC = () => {
  const navigate = useNavigate();

  // const volverInicio = () => navigate("/");
  const cerrarSesion = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="bg-white border rounded-2xl px-5 py-3 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-sm">
      <div className="flex items-center gap-4">
        <img
          src="/logos/logo-udla.webp"
          alt="Logo UdlaVerso"
          className="w-12 h-12 object-contain"
        />

        <div>
          <h1 className="text-xl md:text-2xl font-extrabold text-udlaverso-negro tracking-tight">
            Panel de Administración
          </h1>

          <p className="text-sm text-gray-500">
            Gestiona proyectos, noticias, comentarios y preguntas frecuentes.
          </p>
        </div>
      </div>

      <div className="flex gap-3">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-gray-50 text-gray-700 hover:bg-gray-100 border transition-all"
        >
          <FaHome className="w-4 h-4 text-udlaverso-verde" />
          <span>Ir al portal</span>
        </a>

        <button
          onClick={cerrarSesion}
          className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-red-50 text-red-700 border border-red-100 hover:bg-red-100 hover:text-red-800 transition-all"
        >
          <LuLogOut className="w-4 h-4" />
          <span>Cerrar sesión</span>
        </button>
      </div>
    </header>
  );
};

export default HeroAdmin;

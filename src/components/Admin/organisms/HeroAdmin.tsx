import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";

const HeroAdmin: React.FC = () => {
  const navigate = useNavigate();

  const volverInicio = () => navigate("/");
  const cerrarSesion = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="bg-white border rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
      <div className="flex items-center gap-3">
        <img
          src="/logos/logo-udla.webp"
          alt="Logo UdlaVerso"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h1 className="text-xl md:text-2xl font-extrabold text-udlaverso-negro">
            Administrador
          </h1>
          <p className="text-sm text-udlaverso-gris">
            Gestiona proyectos, comentarios, noticias, preguntas frecuentes y
            métricas.
          </p>
        </div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={volverInicio}
          className="flex items-center gap-2 text-sm px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
        >
          <FaHome className="w-4 h-4" />
          <span>Inicio</span>
        </button>

        <button
          onClick={cerrarSesion}
          className="flex items-center gap-2 text-sm px-3 py-2 rounded-lg bg-red-100 text-red-700 hover:bg-red-200 transition"
        >
          <LuLogOut className="w-4 h-4" />
          <span>Cerrar sesión</span>
        </button>
      </div>
    </header>
  );
};

export default HeroAdmin;

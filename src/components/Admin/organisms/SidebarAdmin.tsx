import { NavLink, useLocation } from "react-router-dom";
import {
  FaChartPie,
  FaCube,
  FaComments,
  FaNewspaper,
  FaQuestionCircle,
} from "react-icons/fa";

const enlaces = [
  { to: "/admin", label: "Métricas", icon: <FaChartPie /> },
  { to: "/admin/proyectos", label: "Proyectos", icon: <FaCube /> },
  { to: "/admin/resenias", label: "Reseñas", icon: <FaComments /> },
  { to: "/admin/noticias", label: "Noticias", icon: <FaNewspaper /> },
  {
    to: "/admin/preguntas-frecuentes",
    label: "Preguntas frecuentes",
    icon: <FaQuestionCircle />,
  },
];

const SidebarAdmin: React.FC = () => {
  const location = useLocation();

  return (
    <aside className="w-full md:w-64 shrink-0">
      <nav className="bg-white border rounded-2xl p-4 sticky top-4 shadow-sm">
        <h3 className="text-base font-semibold text-udlaverso-negro/80 mb-4 tracking-tight">
          Panel de administración
        </h3>

        <ul className="space-y-1">
          {enlaces.map((e) => {
            const isActive =
              e.to === "/admin"
                ? location.pathname === "/admin"
                : location.pathname.startsWith(e.to);

            return (
              <li key={e.to}>
                <NavLink
                  to={e.to}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
                    isActive
                      ? "bg-udlaverso-verde/10 text-udlaverso-verde font-semibold"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <span
                    className={`text-base ${
                      isActive ? "text-udlaverso-verde" : "text-gray-500"
                    }`}
                  >
                    {e.icon}
                  </span>
                  <span>{e.label}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarAdmin;

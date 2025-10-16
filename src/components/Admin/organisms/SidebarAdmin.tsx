import { NavLink, useLocation } from "react-router-dom";

const enlaces = [
  { to: "/admin", label: "Métricas", exact: true },
  { to: "/admin/proyectos", label: "Proyectos" },
  { to: "/admin/comentarios", label: "Comentarios" },
  { to: "/admin/noticias", label: "Noticias" },
  { to: "/admin/preguntas-frecuentes", label: "Preguntas frecuentes" },
];

const SidebarAdmin: React.FC = () => {
  const location = useLocation();

  return (
    <aside className="w-full md:w-64 shrink-0">
      <nav className="bg-white border rounded-2xl p-4 sticky top-4">
        <h3 className="text-sm font-semibold text-udlaverso-gris mb-3">
          Panel
        </h3>

        <ul className="space-y-2">
          {enlaces.map((e) => {
            const isActive =
              e.to === "/admin"
                ? location.pathname === "/admin"
                : location.pathname.startsWith(e.to);

            return (
              <li key={e.to}>
                <NavLink
                  to={e.to}
                  className={`block px-3 py-2 rounded-md text-sm ${
                    isActive
                      ? "bg-udlaverso-verde/10 text-udlaverso-verde font-semibold"
                      : "hover:bg-gray-50"
                  }`}
                >
                  {e.label}
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

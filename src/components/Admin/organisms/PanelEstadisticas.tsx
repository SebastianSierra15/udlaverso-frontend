import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const dataProyectos = [
  { nombre: "RA", total: 12 },
  { nombre: "IoT", total: 8 },
  { nombre: "Eventos", total: 5 },
];

const dataEstados = [
  { name: "Activos", value: 18 },
  { name: "Borrador", value: 4 },
  { name: "Inactivos", value: 3 },
];

const colores = {
  barra: ["#15803d", "#fb923c", "#9ca3af"],
  pie: ["#15803d", "#fb923c", "#9ca3af"],
};

const PanelEstadisticas: React.FC = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white border rounded-2xl p-4">
        <h3 className="font-semibold text-udlaverso-negro mb-2">
          Proyectos por categoría
        </h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dataProyectos}>
              <XAxis dataKey="nombre" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="total">
                {dataProyectos.map((_, i) => (
                  <Cell
                    key={i}
                    fill={colores.barra[i % colores.barra.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white border rounded-2xl p-4">
        <h3 className="font-semibold text-udlaverso-negro mb-2">
          Estado de proyectos
        </h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={dataEstados}
                dataKey="value"
                nameKey="name"
                innerRadius={50}
                outerRadius={80}
                label
              >
                {dataEstados.map((_, i) => (
                  <Cell key={i} fill={colores.pie[i % colores.pie.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default PanelEstadisticas;

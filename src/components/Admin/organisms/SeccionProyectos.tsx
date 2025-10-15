import { useMemo, useState } from "react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import TablaSimple from "../molecules/TablaSimple";
import BarraAcciones from "../molecules/BarraAcciones";
import InsigniaEstado from "../atoms/InsigniaEstado";

type FilaProyecto = {
  nombre: string;
  categoria: string;
  autor: string;
  estado: "activo" | "borrador" | "inactivo";
  visitas: number;
  acciones?: {
    icono: React.ReactNode;
    onClick: () => void;
    color: string;
    titulo: string;
  }[];
};

const mock: FilaProyecto[] = [
  {
    nombre: "Isla Biodiversidad",
    categoria: "RA",
    autor: "Equipo A",
    estado: "activo",
    visitas: 321,
  },
  {
    nombre: "Laboratorio IoT",
    categoria: "IoT",
    autor: "Equipo B",
    estado: "borrador",
    visitas: 87,
  },
  {
    nombre: "Events 3D",
    categoria: "Eventos",
    autor: "Equipo C",
    estado: "inactivo",
    visitas: 12,
  },
];

const SeccionProyectos: React.FC = () => {
  const [q, setQ] = useState("");

  const filas = useMemo(
    () =>
      mock
        .filter(
          (f) =>
            f.nombre.toLowerCase().includes(q.toLowerCase()) ||
            f.categoria.toLowerCase().includes(q.toLowerCase())
        )
        .map((f) => ({
          ...f,
          acciones: [
            {
              icono: <FaEye className="w-4 h-4" />,
              color: "text-green-600 hover:text-green-700",
              titulo: "Ver proyecto",
              onClick: () => alert(`Ver proyecto: ${f.nombre}`),
            },
            {
              icono: <FaEdit className="w-4 h-4" />,
              color: "text-blue-600 hover:text-blue-700",
              titulo: "Editar proyecto",
              onClick: () => alert(`Editar proyecto: ${f.nombre}`),
            },
            {
              icono: <FaTrash className="w-4 h-4" />,
              color: "text-red-600 hover:text-red-700",
              titulo: "Eliminar proyecto",
              onClick: () => alert(`Eliminar proyecto: ${f.nombre}`),
            },
          ],
        })),
    [q]
  );

  const columnas = [
    { id: "nombre", titulo: "Proyecto" },
    { id: "categoria", titulo: "Categoría" },
    { id: "autor", titulo: "Autor" },
    {
      id: "estado",
      titulo: "Estado",
      render: (f: FilaProyecto) => <InsigniaEstado estado={f.estado} />,
    },
    { id: "visitas", titulo: "Visitas" },
    {
      id: "acciones",
      titulo: "Acciones",
      ancho: "120px",
      render: (f: FilaProyecto) => (
        <div className="flex gap-3 justify-start">
          {f.acciones?.map((a, i) => (
            <button
              key={i}
              onClick={a.onClick}
              title={a.titulo}
              className={`transition ${a.color}`}
            >
              {a.icono}
            </button>
          ))}
        </div>
      ),
    },
  ] as const;

  return (
    <section id="proyectos" className="space-y-3">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h2 className="text-lg md:text-xl font-bold text-udlaverso-negro">
          Proyectos
        </h2>
        <BarraAcciones
          onNuevo={() => alert("Nuevo proyecto")}
          onBuscar={setQ}
          placeholder="Buscar proyecto..."
        />
      </div>

      <TablaSimple<FilaProyecto> columnas={columnas as any} filas={filas} />
    </section>
  );
};

export default SeccionProyectos;

import TarjetaProyectoListado from "../molecules/TarjetaProyectoListado";
import type { Proyecto } from "../../../types/Proyecto.type";

interface Props {
  proyectos: Proyecto[];
}

const GridProyectos: React.FC<Props> = ({ proyectos }) => {
  if (!proyectos.length) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl p-6 text-center text-udlaverso-gris mt-6">
        No hay proyectos disponibles.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {proyectos.map((p) => (
        <TarjetaProyectoListado
          key={p.idProyecto}
          titulo={p.nombreProyecto}
          resumen={p.descripcioncortaProyecto}
          categorias={p.categoriaNombre ? [p.categoriaNombre] : []}
          imagenes={p.imagenesProyecto || []}
        />
      ))}
    </div>
  );
};

export default GridProyectos;

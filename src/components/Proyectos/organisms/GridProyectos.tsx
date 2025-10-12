import TarjetaProyectoListado from "../molecules/TarjetaProyectoListado";

export interface Proyecto {
  id: number;
  titulo: string;
  resumen: string;
  categorias: string[];
  imagen1: string;
  imagen2: string;
  imagen3: string;
}

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
          key={p.id}
          titulo={p.titulo}
          resumen={p.resumen}
          categorias={p.categorias}
          imagenes={[p.imagen1, p.imagen2, p.imagen3]}
        />
      ))}
    </div>
  );
};

export default GridProyectos;

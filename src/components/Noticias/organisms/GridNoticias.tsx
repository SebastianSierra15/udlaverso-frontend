import { memo } from "react";
import TarjetaNoticiaGrande from "../molecules/TarjetaNoticiaGrande";

interface Noticia {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: string;
  imagen: string;
}

interface Props {
  noticias: Noticia[];
}

const GridNoticias: React.FC<Props> = ({ noticias }) => {
  if (!noticias.length)
    return (
      <p className="text-center text-udlaverso-gris mt-10">
        No hay noticias disponibles.
      </p>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {noticias.map((n) => (
        <TarjetaNoticiaGrande
          key={n.id}
          titulo={n.titulo}
          descripcion={n.descripcion}
          fecha={n.fecha}
          imagen={n.imagen}
        />
      ))}
    </div>
  );
};

export default memo(GridNoticias);

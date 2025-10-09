import { Link } from "react-router-dom";
import { memo } from "react";
import ImagenNoticiaGrande from "../atoms/ImagenNoticiaGrande";
import TituloNoticia from "../atoms/TituloNoticia";
import FechaPublicacion from "../atoms/FechaPublicacion";

interface Props {
  titulo: string;
  descripcion: string;
  fecha: string;
  imagen: string;
  ruta?: string;
}

const TarjetaNoticiaGrande: React.FC<Props> = ({
  titulo,
  descripcion,
  fecha,
  imagen,
  ruta = "/noticias/1",
}) => (
  <Link
    to={ruta}
    className="block group bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition overflow-hidden focus:outline-none focus:ring-2 focus:ring-udlaverso-verde"
  >
    <ImagenNoticiaGrande src={imagen} alt={titulo} />

    <div className="p-5 flex flex-col gap-2">
      <FechaPublicacion fecha={fecha} />

      <TituloNoticia titulo={titulo} />

      <p className="text-sm text-udlaverso-gris line-clamp-3 group-hover:text-udlaverso-negro transition">
        {descripcion}
      </p>
    </div>
  </Link>
);

export default memo(TarjetaNoticiaGrande);

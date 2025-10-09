import { Link } from "react-router-dom";
import FechaPublicacion from "../atoms/FechaPublicacion";

interface Props {
  titulo: string;
  fecha: string;
  imagen: string;
  contenido: string;
}

const DetalleNoticia: React.FC<Props> = ({
  titulo,
  fecha,
  imagen,
  contenido,
}) => {
  return (
    <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      <img
        src={imagen}
        alt={titulo}
        className="w-full h-64 md:h-80 object-cover"
      />

      {/* Contenido */}
      <div className="p-6 md:p-10">
        <FechaPublicacion fecha={fecha} />

        <h1 className="text-3xl md:text-4xl font-extrabold text-udlaverso-negro mb-6 mt-2">
          {titulo}
        </h1>

        <div className="prose prose-lg text-udlaverso-gris max-w-none leading-relaxed">
          {contenido.split("\n").map((p, i) => (
            <p key={i} className="mb-4">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/noticias"
            className="inline-block px-6 py-3 border-2 border-udlaverso-verde text-udlaverso-verde font-semibold rounded-full hover:bg-udlaverso-verde hover:text-white transition-all duration-300"
          >
            ← Volver a noticias
          </Link>
        </div>
      </div>
    </article>
  );
};

export default DetalleNoticia;

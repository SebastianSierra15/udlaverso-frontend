import { Link } from "react-router-dom";
import { useNoticiasRecientes } from "../../../hooks";
import { Boton } from "../../Shared";
import { TarjetaNoticia } from "../molecules";
import { NoticiasRecientesSkeleton } from "./NoticiasRecientesSkeleton";

export const NoticiasRecientes: React.FC = () => {
  const { noticias, cargando } = useNoticiasRecientes();

  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <h2 className="text-2xl font-bold text-udlaverso-negro mb-8">
        Últimas Noticias
      </h2>

      {cargando ? (
        <NoticiasRecientesSkeleton />
      ) : noticias.length === 0 ? (
        <p className="text-center text-udlaverso-gris mt-10">
          No hay noticias disponibles.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {noticias.map((n) => (
            <TarjetaNoticia
              key={n.idNoticia}
              titulo={n.tituloNoticia}
              descripcion={n.contenidoNoticia}
              imagen={n.imagenNoticia ?? "/images/hero.png"}
              ruta={`/noticias/${encodeURIComponent(n.tituloNoticia)}`}
            />
          ))}
        </div>
      )}

      <div className="flex justify-center">
        <Link to="/noticias">
          <Boton
            texto="Ver todas las noticias"
            variante="alternativo"
            modo="light"
          />
        </Link>
      </div>
    </section>
  );
};

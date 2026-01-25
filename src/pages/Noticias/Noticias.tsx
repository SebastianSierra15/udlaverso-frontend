import { Helmet } from "react-helmet-async";
import { useNoticias } from "../../hooks";
import {
  HeroNoticias,
  BarraBusquedaNoticias,
  GridNoticias,
  GridNoticiasSkeleton,
} from "../../components/Noticias";
import { Paginacion } from "../../components/Shared";

export const Noticias: React.FC = () => {
  const {
    noticias,
    total,
    page,
    pages,
    q,
    orden,
    setQ,
    setPage,
    setOrden,
    cargando,
    error,
  } = useNoticias();

  return (
    <>
      <Helmet>
        <title>Noticias - UdlaVerso</title>
        <meta
          name="description"
          content="Explora las últimas noticias y actualizaciones del UdlaVerso."
        />
      </Helmet>

      <HeroNoticias />

      <section className="max-w-7xl mx-auto px-6 md:px-8 -mt-10 relative z-10">
        {/* Barra de búsqueda */}
        <BarraBusquedaNoticias
          total={total}
          busqueda={q}
          onBuscar={(v) => {
            setQ(v);
            setPage(0);
          }}
          orden={orden}
          onOrdenar={(v) => {
            setOrden(v as "asc" | "desc");
            setPage(0);
          }}
        />

        {/* Contenido principal */}
        {cargando ? (
          <GridNoticiasSkeleton />
        ) : error ? (
          <p className="text-center text-red-600 mt-10">{error}</p>
        ) : (
          <>
            <GridNoticias
              noticias={noticias.map((n) => ({
                id: n.idNoticia,
                titulo: n.tituloNoticia ?? "Sin título",
                descripcion: n.contenidoNoticia ?? "Sin descripción",
                fecha: n.fechapublicacionNoticia ?? "",
                imagen: n.imagenNoticia ?? "/images/hero.png",
              }))}
            />

            {/* Paginación del backend */}
            <Paginacion
              pagina={page + 1}
              totalPaginas={pages}
              onChange={(p) => setPage(p - 1)}
              ariaLabel="Paginación de noticias"
            />
          </>
        )}
      </section>
    </>
  );
};

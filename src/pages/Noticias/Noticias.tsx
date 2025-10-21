import { Helmet } from "react-helmet-async";
import { useNoticias } from "../../hooks/useNoticias";
import HeroNoticias from "../../components/Noticias/organisms/HeroNoticias";
import BarraBusquedaNoticias from "../../components/Noticias/molecules/BarraBusquedaNoticias";
import GridNoticias from "../../components/Noticias/organisms/GridNoticias";
import Paginacion from "../../components/Shared/molecules/Paginacion";

const Noticias: React.FC = () => {
  const { noticias, total, page, pages, q, setQ, setPage, cargando, error } =
    useNoticias();

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
          orden="desc"
          onOrdenar={(v) => {
            console.log("Orden seleccionado:", v);
          }}
        />

        {/* Contenido principal */}
        {cargando ? (
          <p className="text-center text-udlaverso-gris mt-10">
            Cargando noticias...
          </p>
        ) : error ? (
          <p className="text-center text-red-600 mt-10">{error}</p>
        ) : (
          <>
            <GridNoticias
              noticias={noticias.map((n) => ({
                id: n.idNoticia,
                titulo: n.tituloNoticia,
                descripcion: n.contenidoNoticia,
                fecha: n.fechapublicacionNoticia,
                imagen: n.imagenNoticia,
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

export default Noticias;

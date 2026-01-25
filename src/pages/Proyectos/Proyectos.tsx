import { Helmet } from "react-helmet-async";
import { useCategorias, useProyectos } from "../../hooks";
import {
  HeroProyectos,
  BarraFiltros,
  GridProyectos,
  GridProyectosSkeleton,
} from "../../components/Proyectos";
import { Paginacion } from "../../components/Shared";

export const Proyectos: React.FC = () => {
  const { categorias } = useCategorias();

  const opciones = [
    "Todas",
    ...categorias.map((c) => ({
      id: c.idCategoria,
      nombre: c.nombreCategoria,
    })),
  ];

  const {
    proyectos,
    total,
    page,
    pages,
    q,
    categoria,
    setQ,
    setCategoria,
    setPage,
    loading,
    error,
  } = useProyectos();

  return (
    <>
      <Helmet>
        <title>Proyectos - UdlaVerso</title>
        <meta
          name="description"
          content="Listado de proyectos del UdlaVerso con filtros por categoría y paginación."
        />
      </Helmet>

      <HeroProyectos />

      <section className="max-w-7xl mx-auto px-6 md:px-8 -mt-10 relative z-10">
        <BarraFiltros
          opciones={opciones}
          seleccion={categoria}
          onChange={(v) => {
            setCategoria(v);
            setPage(0);
          }}
          total={total}
          busqueda={q}
          onBuscar={(v) => {
            setQ(v);
            setPage(0);
          }}
        />

        {loading ? (
          <GridProyectosSkeleton />
        ) : error ? (
          <p className="text-center text-red-600 mt-10">{error}</p>
        ) : (
          <>
            <GridProyectos proyectos={proyectos} />

            <Paginacion
              pagina={page + 1}
              totalPaginas={pages}
              onChange={(p) => setPage(p - 1)}
              ariaLabel="Paginación de proyectos"
            />
          </>
        )}
      </section>
    </>
  );
};

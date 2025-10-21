import { Helmet } from "react-helmet-async";
import { useCategorias } from "../../hooks/useCategorias";
import { useProyectos } from "../../hooks/useProyectos";
import HeroProyectos from "../../components/Proyectos/organisms/HeroProyectos";
import BarraFiltros from "../../components/Proyectos/molecules/BarraFiltros";
import GridProyectos from "../../components/Proyectos/organisms/GridProyectos";
import Paginacion from "../../components/Shared/molecules/Paginacion";

const Proyectos: React.FC = () => {
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
          <p className="text-center text-gray-500 mt-10">
            Cargando proyectos...
          </p>
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

export default Proyectos;

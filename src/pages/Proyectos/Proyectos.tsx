import SEO from "../../components/SEO/SEO";
import { useCategorias } from "../../hooks/useCategorias";
import { useProyectos } from "../../hooks/useProyectos";
import HeroProyectos from "../../components/Proyectos/organisms/HeroProyectos";
import BarraFiltros from "../../components/Proyectos/molecules/BarraFiltros";
import GridProyectos from "../../components/Proyectos/organisms/GridProyectos";
import Paginacion from "../../components/Shared/molecules/Paginacion";
import GridProyectosSkeleton from "../../components/Proyectos/organisms/GridProyectosSkeleton";

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
      <SEO
        title="Proyectos de realidad aumentada | UdlaVerso"
        description="Explora los proyectos de realidad aumentada del UdlaVerso, filtra por categoría y descubre experiencias inmersivas creadas por la comunidad universitaria."
        path="/proyectos"
        image="/images/puente.webp"
        keywords="proyectos realidad aumentada, proyectos UdlaVerso, innovación universitaria"
      />

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

export default Proyectos;

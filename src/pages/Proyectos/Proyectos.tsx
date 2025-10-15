import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import HeroProyectos from "../../components/Proyectos/organisms/HeroProyectos";
import BarraFiltros from "../../components/Proyectos/molecules/BarraFiltros";
import GridProyectos from "../../components/Proyectos/organisms/GridProyectos";
import Paginacion from "../../components/Shared/molecules/Paginacion";
import { useCategorias } from "../../components/Proyectos/hooks/useCategorias";
import { proyectosMock } from "../../components/Proyectos/mockData";

const Proyectos: React.FC = () => {
  const [categoria, setCategoria] = useState("Todas");
  const [busqueda, setBusqueda] = useState("");
  const [pagina, setPagina] = useState(1);
  const porPagina = 9;

  const { categorias } = useCategorias();

  const opciones = ["Todas", ...categorias.map((c) => c.nombre)];

  const filtrados = useMemo(() => {
    let base =
      categoria === "Todas"
        ? proyectosMock
        : proyectosMock.filter((p) => p.categorias.includes(categoria));

    if (busqueda.trim()) {
      base = base.filter(
        (p) =>
          p.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
          p.resumen.toLowerCase().includes(busqueda.toLowerCase())
      );
    }

    return base;
  }, [categoria, busqueda]);

  const totalPaginas = Math.ceil(filtrados.length / porPagina);
  const visibles = filtrados.slice(
    (pagina - 1) * porPagina,
    pagina * porPagina
  );

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
            setPagina(1);
          }}
          total={filtrados.length}
          busqueda={busqueda}
          onBuscar={(v) => {
            setBusqueda(v);
            setPagina(1);
          }}
        />

        <GridProyectos proyectos={visibles} />

        <Paginacion
          pagina={pagina}
          totalPaginas={totalPaginas}
          onChange={setPagina}
          ariaLabel="Paginación de proyectos"
        />
      </section>
    </>
  );
};

export default Proyectos;

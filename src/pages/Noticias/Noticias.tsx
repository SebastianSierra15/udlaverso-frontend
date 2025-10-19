import { Helmet } from "react-helmet-async";
import { useMemo, useState, useCallback } from "react";
import { useNoticias } from "../../hooks/useNoticias";
import HeroNoticias from "../../components/Noticias/organisms/HeroNoticias";
import BarraBusquedaNoticias from "../../components/Noticias/molecules/BarraBusquedaNoticias";
import GridNoticias from "../../components/Noticias/organisms/GridNoticias";
import Paginacion from "../../components/Shared/molecules/Paginacion";

const Noticias: React.FC = () => {
  const { noticias, cargando } = useNoticias();

  const [busqueda, setBusqueda] = useState("");
  const [orden, setOrden] = useState<"asc" | "desc">("desc");
  const [pagina, setPagina] = useState(1);
  const porPagina = 9;

  const handleBusqueda = useCallback((v: string) => {
    setBusqueda(v);
    setPagina(1);
  }, []);

  const handleOrden = useCallback((v: string) => {
    setOrden(v as "asc" | "desc");
    setPagina(1);
  }, []);

  const noticiasFiltradas = useMemo(() => {
    const texto = busqueda.trim().toLowerCase();

    const filtradas = noticias.filter((n) =>
      n.tituloNoticia.toLowerCase().includes(texto)
    );

    return filtradas
      .slice()
      .sort((a, b) =>
        orden === "asc"
          ? a.fechapublicacionNoticia.localeCompare(b.fechapublicacionNoticia)
          : b.fechapublicacionNoticia.localeCompare(a.fechapublicacionNoticia)
      );
  }, [busqueda, orden, noticias]);

  const totalPaginas = Math.max(
    1,
    Math.ceil(noticiasFiltradas.length / porPagina)
  );

  const paginaActual = Math.min(pagina, totalPaginas);
  const desde = (paginaActual - 1) * porPagina;
  const visibles = noticiasFiltradas.slice(desde, desde + porPagina);

  return (
    <>
      <Helmet>
        <title>Noticias - UdlaVerso</title>
        <meta
          name="description"
          content="Explora las últimas noticias y actualizaciones del UDLAVERSO."
        />
      </Helmet>

      <HeroNoticias />

      <section className="max-w-7xl mx-auto px-6 md:px-8 -mt-10 relative z-10">
        <BarraBusquedaNoticias
          valor={busqueda}
          onChange={handleBusqueda}
          orden={orden}
          onOrdenar={handleOrden}
        />

        {cargando ? (
          <p className="text-center text-udlaverso-gris mt-10">
            Cargando noticias...
          </p>
        ) : (
          <GridNoticias
            noticias={visibles.map((n) => ({
              id: n.idNoticia,
              titulo: n.tituloNoticia,
              descripcion: n.contenidoNoticia,
              fecha: n.fechapublicacionNoticia,
              imagen: n.imagenNoticia,
            }))}
          />
        )}

        <Paginacion
          pagina={paginaActual}
          totalPaginas={totalPaginas}
          onChange={setPagina}
          ariaLabel="Paginación de noticias"
        />
      </section>
    </>
  );
};

export default Noticias;

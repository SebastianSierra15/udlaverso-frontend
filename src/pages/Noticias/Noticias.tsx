import { Helmet } from "react-helmet-async";
import { useMemo, useState } from "react";
import HeroNoticias from "../../components/Noticias/organisms/HeroNoticias";
import BarraBusquedaNoticias from "../../components/Noticias/molecules/BarraBusquedaNoticias";
import GridNoticias from "../../components/Noticias/organisms/GridNoticias";
import Paginacion from "../../components/Shared/molecules/Paginacion";

const listaNoticias = [
  {
    id: 1,
    titulo: "Avances en el Visor UA3D",
    descripcion:
      "El visor UA3D incorpora nuevas funciones que mejoran la interacción con los entornos virtuales del UdlaVerso.",
    fecha: "2025-10-05",
    imagen: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
  {
    id: 2,
    titulo: "Nuevas Islas de Aprendizaje",
    descripcion:
      "Docentes y estudiantes desarrollan nuevas experiencias de RA enfocadas en la educación ambiental.",
    fecha: "2025-09-20",
    imagen: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    id: 3,
    titulo: "Reconocimiento Nacional",
    descripcion:
      "El UDLAVERSO fue premiado por su contribución a la innovación educativa en realidad aumentada.",
    fecha: "2025-08-10",
    imagen: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
  },
];

const Noticias: React.FC = () => {
  const [busqueda, setBusqueda] = useState("");
  const [orden, setOrden] = useState<"asc" | "desc">("desc");
  const [pagina, setPagina] = useState(1);
  const porPagina = 9;

  const noticiasFiltradas = useMemo(() => {
    let base = listaNoticias.filter((n) =>
      n.titulo.toLowerCase().includes(busqueda.toLowerCase())
    );
    base = base.sort((a, b) =>
      orden === "asc"
        ? a.fecha.localeCompare(b.fecha)
        : b.fecha.localeCompare(a.fecha)
    );
    return base;
  }, [busqueda, orden]);

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
          onChange={(v) => {
            setBusqueda(v);
            setPagina(1);
          }}
          orden={orden}
          onOrdenar={(v) => {
            setOrden(v as "asc" | "desc");
            setPagina(1);
          }}
        />

        <GridNoticias noticias={visibles} />

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

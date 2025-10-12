import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import HeroProyectos from "../../components/Proyectos/organisms/HeroProyectos";
import BarraFiltros from "../../components/Proyectos/molecules/BarraFiltros";
import GridProyectos from "../../components/Proyectos/organisms/GridProyectos";
import Paginacion from "../../components/Shared/molecules/Paginacion";
import type { Proyecto } from "../../components/Proyectos/organisms/GridProyectos";

const datos: Proyecto[] = [
  {
    id: 1,
    titulo: "Proyecto 1",
    resumen:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.",
    categorias: ["Educación", "Ciencia"],
    imagen1: "/images/imagen1.png",
    imagen2: "/images/imagen2.png",
    imagen3: "/images/imagen3.jpg",
  },
  {
    id: 2,
    titulo: "Proyecto 2",
    resumen: "Exploración interactiva con RA para conceptos de física.",
    categorias: ["Ciencia"],
    imagen1: "/images/imagen2.png",
    imagen2: "/images/imagen3.jpg",
    imagen3: "/images/imagen1.png",
  },
  {
    id: 3,
    titulo: "Proyecto 3",
    resumen: "Visor UA3D para eventos académicos inmersivos.",
    categorias: ["Eventos", "Tecnología", "Educación"],
    imagen1: "/images/imagen3.jpg",
    imagen2: "/images/imagen1.png",
    imagen3: "/images/imagen2.png",
  },
  {
    id: 4,
    titulo: "Proyecto 4",
    resumen: "Laboratorio IoT con sensores simulados en RA.",
    categorias: ["Tecnología", "Ciencia"],
    imagen1: "/images/imagen1.png",
    imagen2: "/images/imagen3.jpg",
    imagen3: "/images/imagen2.png",
  },
  {
    id: 5,
    titulo: "Proyecto 5",
    resumen: "Matemáticas básicas con estaciones interactivas.",
    categorias: ["Educación"],
    imagen1: "/images/imagen2.png",
    imagen2: "/images/imagen1.png",
    imagen3: "/images/imagen3.jpg",
  },
  {
    id: 6,
    titulo: "Proyecto 6",
    resumen: "Entorno colaborativo para aprendizaje de idiomas.",
    categorias: ["Educación", "Eventos", "Tecnología"],
    imagen1: "/images/imagen3.jpg",
    imagen2: "/images/imagen2.png",
    imagen3: "/images/imagen1.png",
  },
  {
    id: 7,
    titulo: "Proyecto 7",
    resumen: "Biología amazónica: biodiversidad en RA.",
    categorias: ["Ciencia", "Educación"],
    imagen1: "/images/imagen1.png",
    imagen2: "/images/imagen2.png",
    imagen3: "/images/imagen3.jpg",
  },
  {
    id: 8,
    titulo: "Proyecto 8",
    resumen: "Visualización de datos y analítica en RA.",
    categorias: ["Tecnología"],
    imagen1: "/images/imagen2.png",
    imagen2: "/images/imagen3.jpg",
    imagen3: "/images/imagen1.png",
  },
  {
    id: 9,
    titulo: "Proyecto 9",
    resumen:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.",
    categorias: ["Educación", "Eventos"],
    imagen1: "/images/imagen1.png",
    imagen2: "/images/imagen2.png",
    imagen3: "/images/imagen3.jpg",
  },
  {
    id: 10,
    titulo: "Proyecto 10",
    resumen: "Exploración interactiva con RA para conceptos de física.",
    categorias: ["Ciencia", "Tecnología", "Eventos"],
    imagen1: "/images/imagen2.png",
    imagen2: "/images/imagen3.jpg",
    imagen3: "/images/imagen1.png",
  },
  {
    id: 11,
    titulo: "Proyecto 11",
    resumen: "Visor UA3D para eventos académicos inmersivos.",
    categorias: ["Eventos"],
    imagen1: "/images/imagen3.jpg",
    imagen2: "/images/imagen1.png",
    imagen3: "/images/imagen2.png",
  },
  {
    id: 12,
    titulo: "Proyecto 12",
    resumen: "Laboratorio IoT con sensores simulados en RA.",
    categorias: ["Tecnología", "Educación"],
    imagen1: "/images/imagen1.png",
    imagen2: "/images/imagen3.jpg",
    imagen3: "/images/imagen2.png",
  },
  {
    id: 13,
    titulo: "Proyecto 13",
    resumen: "Matemáticas básicas con estaciones interactivas.",
    categorias: ["Educación", "Ciencia", "Eventos"],
    imagen1: "/images/imagen2.png",
    imagen2: "/images/imagen1.png",
    imagen3: "/images/imagen3.jpg",
  },
  {
    id: 14,
    titulo: "Proyecto 14",
    resumen: "Entorno colaborativo para aprendizaje de idiomas.",
    categorias: ["Educación", "Tecnología"],
    imagen1: "/images/imagen3.jpg",
    imagen2: "/images/imagen2.png",
    imagen3: "/images/imagen1.png",
  },
  {
    id: 15,
    titulo: "Proyecto 15",
    resumen: "Biología amazónica: biodiversidad en RA.",
    categorias: ["Ciencia", "Eventos"],
    imagen1: "/images/imagen1.png",
    imagen2: "/images/imagen2.png",
    imagen3: "/images/imagen3.jpg",
  },
  {
    id: 16,
    titulo: "Proyecto 16",
    resumen: "Visualización de datos y analítica en RA.",
    categorias: ["Tecnología", "Ciencia", "Educación"],
    imagen1: "/images/imagen2.png",
    imagen2: "/images/imagen3.jpg",
    imagen3: "/images/imagen1.png",
  },
];

const opciones = ["Todas", "Educación", "Ciencia", "Tecnología", "Eventos"];

const Proyectos: React.FC = () => {
  const [categoria, setCategoria] = useState("Todas");
  const [busqueda, setBusqueda] = useState("");
  const [pagina, setPagina] = useState(1);
  const porPagina = 9;

  const filtrados = useMemo(() => {
    let base =
      categoria === "Todas"
        ? datos
        : datos.filter((p) => p.categorias.includes(categoria));

    if (busqueda.trim() !== "") {
      base = base.filter(
        (p) =>
          p.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
          p.resumen.toLowerCase().includes(busqueda.toLowerCase())
      );
    }

    return base;
  }, [categoria, busqueda]);

  const totalPaginas = Math.max(1, Math.ceil(filtrados.length / porPagina));
  const paginaActual = Math.min(pagina, totalPaginas);
  const desde = (paginaActual - 1) * porPagina;
  const visibles = filtrados.slice(desde, desde + porPagina);

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
          pagina={paginaActual}
          totalPaginas={totalPaginas}
          onChange={setPagina}
          ariaLabel="Paginación de proyectos"
        />
      </section>
    </>
  );
};

export default Proyectos;

import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import HeroProyectoIndividual from "../../components/Proyectos/organisms/HeroProyectoIndividual";
import DetalleProyecto from "../../components/Proyectos/organisms/DetalleProyecto";

const proyectos = [
  {
    id: "1",
    titulo: "Laboratorio IoT",
    categoria: "Tecnología",
    promedio: 2.7,
    visitas: 124,
    autor: "Jhoan Sebastián Sierra Perdomo",
    tecnologias: ["Unity", "Blender", "OpenSim"],
    palabrasClave: ["IoT", "RA", "Educación", "Simulación", "Innovación"],
    fecha: "Junio 2024",
    descripcionCorta:
      "El Laboratorio IoT es un entorno interactivo en realidad aumentada diseñado para la enseñanza práctica de IoT en la Universidad de la Amazonia.",
    descripcionLarga: `
    <b>El Laboratorio IoT</b> es un proyecto educativo innovador que permite a los estudiantes explorar la interconexión de dispositivos inteligentes mediante <b>simulaciones en realidad aumentada (RA)</b>.

    Su entorno reproduce con precisión diversos <b>sensores, actuadores y redes en tiempo real</b>, ofreciendo una comprensión profunda del ecosistema del Internet de las Cosas (IoT). Gracias a esta experiencia inmersiva, los participantes pueden visualizar y analizar cómo los dispositivos comunican datos y reaccionan entre sí dentro de un entorno virtual controlado.

    <b>Objetivos principales:</b>
    <ul>
      <li>Fomentar el aprendizaje práctico del IoT a través de entornos virtuales interactivos.</li>
      <li>Impulsar la innovación tecnológica aplicada a la educación en la región amazónica.</li>
      <li>Facilitar la comprensión de conceptos complejos mediante la experimentación visual.</li>
    </ul>
    Durante su desarrollo se emplearon <b>modelado 3D</b>, <b>animaciones interactivas</b> y <b>programación por nodos</b> para recrear escenarios donde los estudiantes pueden conectar sensores virtuales, activar actuadores y observar respuestas en tiempo real. Este enfoque no solo estimula la curiosidad científica, sino que también promueve el trabajo colaborativo y la resolución de problemas.

    El proyecto forma parte del ecosistema de innovación digital de la <b>Universidad de la Amazonia</b>, contribuyendo al fortalecimiento de la formación tecnológica en la región. Su propósito a largo plazo es crear una plataforma abierta que pueda integrarse con otros laboratorios virtuales, permitiendo que más instituciones adopten herramientas similares.

    <b>En resumen:</b> el Laboratorio IoT no solo es una simulación, sino una puerta hacia el aprendizaje interactivo y la transformación educativa digital, conectando la teoría con la práctica a través de experiencias inmersivas y significativas.
    `,
    objetivos:
      "Fomentar el aprendizaje de Internet de las Cosas mediante simulaciones interactivas y experiencias inmersivas.",
    linkProyecto: "/descargas",
    video: "https://www.youtube.com/embed/ScMzIvxBSi4",
    imagenes: [
      "/images/parque.webp",
      "/images/bus.webp",
      "/images/hero-acercade.webp",
      "/images/puente.webp",
      "/images/escenario.webp",
      "/images/casetas.webp",
      "/images/hero.webp",
    ],
    resenias: [
      {
        usuario: "Laura Gómez",
        comentario:
          "Excelente iniciativa, demuestra cómo la tecnología puede aplicarse de forma práctica en la educación universitaria.",
        estrellas: 5,
        fecha: "15 de julio de 2024",
      },
      {
        usuario: "Carlos Rojas",
        comentario:
          "Muy útil para clases, facilita la comprensión de conceptos complejos de IoT mediante la simulación.",
        estrellas: 4,
        fecha: "2 de agosto de 2024",
      },
      {
        usuario: "Mariana Pérez",
        comentario:
          "Un proyecto muy interesante y bien desarrollado. Me ayudó a visualizar cómo se comunican los dispositivos inteligentes en tiempo real.",
        estrellas: 5,
        fecha: "18 de septiembre de 2024",
      },
    ],
  },
];

const ProyectoDetalle: React.FC = () => {
  const { id } = useParams();
  const proyecto = proyectos.find((p) => p.id === id);

  if (!proyecto)
    return (
      <section className="flex flex-col items-center justify-center py-20">
        <p className="text-udlaverso-gris text-lg mb-4">
          No se encontró el proyecto solicitado.
        </p>
      </section>
    );

  return (
    <>
      <Helmet>
        <title>{proyecto.titulo} - UdlaVerso</title>
        <meta name="description" content={proyecto.descripcionCorta} />
      </Helmet>

      <HeroProyectoIndividual
        titulo={proyecto.titulo}
        descripcion={proyecto.objetivos}
        imagenFondo={proyecto.imagenes[0]}
      />

      <DetalleProyecto {...proyecto} />
    </>
  );
};

export default ProyectoDetalle;

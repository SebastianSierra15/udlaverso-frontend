import { Link } from "react-router-dom";
import Boton from "../../Shared/atoms/Boton";
import TarjetaNoticia from "../molecules/TarjetaNoticia";

const NoticiasRecientes: React.FC = () => {
  const noticias = [
    {
      titulo: "Nueva Isla Interactiva en el UDLAVERSO",
      descripcion:
        "Estudiantes de ingeniería presentan una experiencia inmersiva para aprender sobre biodiversidad amazónica.",
      imagen: "/images/puente.webp",
    },
    {
      titulo: "Visor UA3D se actualiza con nuevas funciones",
      descripcion:
        "La última versión del visor integra mejoras de rendimiento y nuevos espacios colaborativos.",
      imagen: "/images/escenario.webp",
    },
    {
      titulo: "Laboratorio IoT impulsa la investigación",
      descripcion:
        "El laboratorio virtual IoT permite a los estudiantes experimentar con sensores y redes desde cualquier lugar.",
      imagen: "/images/caseta.webp",
    },
    {
      titulo: "Estudiantes logran reconocimiento nacional",
      descripcion:
        "Proyectos de realidad aumentada del UDLAVERSO fueron destacados en el Congreso de Innovación Educativa.",
      imagen: "/images/parque.webp",
    },
    {
      titulo: "Universidad fortalece su ecosistema digital",
      descripcion:
        "El portal UDLAVERSO busca consolidarse como la vitrina tecnológica institucional de la Amazonia.",
      imagen: "/images/bus.webp",
    },
    {
      titulo: "Avances en accesibilidad digital",
      descripcion:
        "Nuevas herramientas permiten que los proyectos del UDLAVERSO sean más inclusivos y accesibles.",
      imagen: "/images/hero.webp",
    },
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <h2 className="text-2xl font-bold text-udlaverso-negro mb-8">
        Últimas Noticias
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {noticias.map((n, i) => (
          <TarjetaNoticia
            key={i}
            titulo={n.titulo}
            descripcion={n.descripcion}
            imagen={n.imagen}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <Link to="/noticias">
          <Boton
            texto="Ver todas las noticias"
            variante="alternativo"
            modo="light"
          />
        </Link>
      </div>
    </section>
  );
};

export default NoticiasRecientes;

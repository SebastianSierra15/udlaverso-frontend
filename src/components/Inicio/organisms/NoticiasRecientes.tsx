import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TarjetaNoticia from "../molecules/TarjetaNoticia";

const NoticiasRecientes: React.FC = () => {
  const noticias = [
    {
      titulo: "Nueva Isla Interactiva en el UDLAVERSO",
      descripcion:
        "Estudiantes de ingeniería presentan una experiencia inmersiva para aprender sobre biodiversidad amazónica.",
      imagen: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
    {
      titulo: "Visor UA3D se actualiza con nuevas funciones",
      descripcion:
        "La última versión del visor integra mejoras de rendimiento y nuevos espacios colaborativos.",
      imagen: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    },
    {
      titulo: "Laboratorio IoT impulsa la investigación",
      descripcion:
        "El laboratorio virtual IoT permite a los estudiantes experimentar con sensores y redes desde cualquier lugar.",
      imagen: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    },
    {
      titulo: "Estudiantes logran reconocimiento nacional",
      descripcion:
        "Proyectos de realidad aumentada del UDLAVERSO fueron destacados en el Congreso de Innovación Educativa.",
      imagen: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    },
    {
      titulo: "Universidad fortalece su ecosistema digital",
      descripcion:
        "El portal UDLAVERSO busca consolidarse como la vitrina tecnológica institucional de la Amazonia.",
      imagen: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      titulo: "Avances en accesibilidad digital",
      descripcion:
        "Nuevas herramientas permiten que los proyectos del UDLAVERSO sean más inclusivos y accesibles.",
      imagen: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f ",
    },
  ];

  return (
    <section className="py-10 max-w-7xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold text-udlaverso-negro mb-8"
      >
        Últimas Noticias
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {noticias.map((n, i) => (
          <TarjetaNoticia
            key={i}
            titulo={n.titulo}
            descripcion={n.descripcion}
            imagen={n.imagen}
            delay={i * 0.1}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <Link
          to="/noticias"
          className="px-6 py-3 border-2 border-udlaverso-verde text-udlaverso-verde font-semibold rounded-full hover:bg-udlaverso-verde hover:text-white transition-all duration-300"
        >
          Ver todas las noticias
        </Link>
      </div>
    </section>
  );
};

export default NoticiasRecientes;

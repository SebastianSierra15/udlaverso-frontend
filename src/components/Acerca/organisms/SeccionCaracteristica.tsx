import {
  FaVrCardboard,
  FaUsers,
  FaRocket,
  FaLightbulb,
  FaChalkboardTeacher,
  FaCode,
} from "react-icons/fa";
import TarjetaCaracteristica from "../molecules/TarjetaCaracteristica";

const SeccionCaracteristicas: React.FC = () => {
  const caracteristicas = [
    {
      icono: <FaVrCardboard className="text-3xl text-udlaverso-verde" />,
      titulo: "Experiencias en Realidad Aumentada",
      descripcion:
        "Los proyectos integran RA para explorar conceptos complejos de manera visual e interactiva.",
    },
    {
      icono: <FaUsers className="text-3xl text-udlaverso-verde" />,
      titulo: "Comunidad colaborativa",
      descripcion:
        "Estudiantes y docentes construyen juntos conocimiento a través de proyectos interdisciplinarios.",
    },
    {
      icono: <FaRocket className="text-3xl text-udlaverso-verde" />,
      titulo: "Innovación Amazónica",
      descripcion:
        "Una iniciativa tecnológica que impulsa el desarrollo digital desde el corazón de la Amazonia.",
    },
    {
      icono: <FaLightbulb className="text-3xl text-udlaverso-verde" />,
      titulo: "Aprendizaje activo",
      descripcion:
        "Cada proyecto está diseñado para fomentar la exploración, la curiosidad y la creatividad.",
    },
    {
      icono: <FaChalkboardTeacher className="text-3xl text-udlaverso-verde" />,
      titulo: "Transformación educativa",
      descripcion:
        "El UdlaVerso conecta la enseñanza con herramientas tecnológicas que potencian la pedagogía.",
    },
    {
      icono: <FaCode className="text-3xl text-udlaverso-verde" />,
      titulo: "Proyectos desarrollados por estudiantes",
      descripcion:
        "Los estudiantes de Ingeniería de Sistemas son los protagonistas del diseño, código y ejecución.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-udlaverso-verde/10 py-24 px-6 md:px-20 text-center">
      <h2 className="text-3xl md:text-3xl font-extrabold text-udlaverso-negro leading-tight mb-14">
        ¿Qué hace único al UdlaVerso?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {caracteristicas.map((c, i) => (
          <TarjetaCaracteristica
            key={i}
            icono={c.icono}
            titulo={c.titulo}
            descripcion={c.descripcion}
            delay={i * 0.1}
          />
        ))}
      </div>
    </section>
  );
};

export default SeccionCaracteristicas;

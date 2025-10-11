import { motion } from "framer-motion";
import Parrafo from "../atoms/Parrafo";

const autores = [
  {
    nombre: "Edwin Eduardo Millán Rojas",
    rol: "Director del proyecto y docente investigador de la Facultad de Ingeniería.",
    img: "/images/autor.webp",
  },
  {
    nombre: "Lubeimar Eduardo Gallego Ruiz",
    rol: "Desarrollador principal y diseñador del portal interactivo UdlaVerso.",
    img: "/images/autor.webp",
  },
  {
    nombre: "Fredy Antonio Verástegui González",
    rol: "Docente asesor del área tecnológica y coordinador del desarrollo académico.",
    img: "/images/autor.webp",
  },
];

const Autores: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-10 bg-white">
      <h2 className="text-3xl md:text-3xl font-extrabold text-udlaverso-negro leading-tight mb-14 text-center">
        Equipo creador del UdlaVerso
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {autores.map((autor, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg border border-gray-100 p-5 flex flex-col items-center text-center transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={autor.img}
              alt={autor.nombre}
              className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full border-4 border-udlaverso-verde mb-3"
            />

            <h3 className="font-semibold text-udlaverso-negro text-base sm:text-lg">
              {autor.nombre}
            </h3>

            <Parrafo
              texto={autor.rol}
              clase="text-xs sm:text-sm text-udlaverso-gris mt-1 max-w-[230px]"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Autores;

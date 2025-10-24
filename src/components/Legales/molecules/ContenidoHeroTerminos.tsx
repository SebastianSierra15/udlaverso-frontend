import { motion } from "framer-motion";

const ContenidoHeroTerminos: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="relative z-10 text-white text-center px-6"
  >
    <h1 className="text-4xl md:text-5xl font-bold mb-3">
      Términos y Condiciones
    </h1>
    <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-200">
      Conoce las políticas que rigen el uso del portal{" "}
      <span className="text-udlaverso-verde font-semibold">UdlaVerso</span> y el
      tratamiento responsable de tus datos personales.
    </p>
  </motion.div>
);

export default ContenidoHeroTerminos;

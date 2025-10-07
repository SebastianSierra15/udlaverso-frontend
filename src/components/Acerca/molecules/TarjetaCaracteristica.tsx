import { motion } from "framer-motion";
import Parrafo from "../atoms/Parrafo";
import Subtitulo from "../atoms/Subtitulo";

interface TarjetaCaracteristicaProps {
  icono: React.ReactNode;
  titulo: string;
  descripcion: string;
  delay?: number;
}

const TarjetaCaracteristica: React.FC<TarjetaCaracteristicaProps> = ({
  icono,
  titulo,
  descripcion,
  delay = 0,
}) => {
  return (
    <motion.div
      className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-udlaverso-verde/20 flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <div className="flex justify-center items-center mb-4">{icono}</div>

      <Subtitulo
        texto={titulo}
        clase="text-xl font-semibold text-udlaverso-negro mb-2"
      />

      <Parrafo
        texto={descripcion}
        clase="text-sm text-udlaverso-gris leading-relaxed"
      />
    </motion.div>
  );
};

export default TarjetaCaracteristica;

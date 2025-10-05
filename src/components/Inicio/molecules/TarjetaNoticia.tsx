import { motion } from "framer-motion";
import ImagenNoticia from "../atoms/ImagenNoticia";
import TituloNoticia from "../atoms/TituloNoticia";
import DescripcionNoticia from "../atoms/DescripcionNoticia";
import EnlaceLeerMas from "../atoms/EnlaceLeerMas";

interface Props {
  titulo: string;
  descripcion: string;
  imagen?: string;
  ruta?: string; // 👈 Nueva prop
  delay?: number;
}

const TarjetaNoticia: React.FC<Props> = ({
  titulo,
  descripcion,
  imagen = "/images/placeholder.png",
  ruta = "/noticias", // 👈 Ruta por defecto
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="flex bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden p-4"
    >
      <ImagenNoticia src={imagen} alt={titulo} ruta={ruta} />

      <div className="flex flex-col justify-between flex-1 pl-4">
        <div>
          <TituloNoticia texto={titulo} ruta={ruta} />
          <DescripcionNoticia texto={descripcion} />
        </div>
        <EnlaceLeerMas ruta={ruta} />
      </div>
    </motion.div>
  );
};

export default TarjetaNoticia;

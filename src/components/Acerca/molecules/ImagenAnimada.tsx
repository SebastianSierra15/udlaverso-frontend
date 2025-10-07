import { motion } from "framer-motion";
import Imagen from "../atoms/Imagen";

interface ImagenAnimadaProps {
  src: string;
  alt: string;
  invertir?: boolean;
}

const ImagenAnimada: React.FC<ImagenAnimadaProps> = ({
  src,
  alt,
  invertir = false,
}) => {
  return (
    <motion.div
      className="relative w-full md:w-1/2 flex justify-center"
      initial={{ opacity: 0, x: invertir ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Fondo difuminado */}
      <div className="absolute inset-0 flex justify-center items-center -z-10">
        <div className="w-[80%] h-[80%] rounded-[50%] bg-gradient-to-br from-udlaverso-verde/20 via-udlaverso-verdeClaro/20 to-udlaverso-rojo/20 blur-3xl opacity-70"></div>
      </div>

      <Imagen
        src={src}
        alt={alt}
        clase="w-full md:w-5/6 rounded-3xl shadow-2xl border border-white/30 object-cover cursor-crosshair"
      />
    </motion.div>
  );
};

export default ImagenAnimada;

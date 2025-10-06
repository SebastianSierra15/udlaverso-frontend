import { motion } from "framer-motion";
import Boton from "../../Shared/atoms/Boton";

interface Props {
  imagen: string;
  titulo: string;
  descripcion: string;
  delay?: number;
}

const TarjetaExperiencia: React.FC<Props> = ({
  imagen,
  titulo,
  descripcion,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="flex flex-col items-center text-center bg-transparent rounded-2xl p-6 transition h-full"
    >
      <img
        src={imagen}
        alt={titulo}
        className="w-56 h-56 object-cover rounded-full mb-6"
      />

      <div className="flex flex-col flex-grow justify-between w-full">
        <div>
          <h3 className="text-xl font-semibold text-udlaverso-negro mb-3">
            {titulo}
          </h3>
          <p className="text-udlaverso-gris text-sm md:text-base mb-6 leading-relaxed">
            {descripcion}
          </p>
        </div>

        <div className="mt-auto">
          <Boton texto="Más información" variante="alternativo" modo="light" />
        </div>
      </div>
    </motion.div>
  );
};

export default TarjetaExperiencia;

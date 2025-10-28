import { Link } from "react-router-dom";
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
  const esDescarga =
    titulo.toLowerCase().includes("ua3d") ||
    titulo.toLowerCase().includes("events");

  const urlDescarga =
    "https://www.mediafire.com/file/yi7wyivkcffq3lb/UA3D-Viwer.exe";

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

        <div className="mt-auto flex justify-center items-center w-full">
          {esDescarga ? (
            <a href={urlDescarga} target="_blank" rel="noopener noreferrer">
              <Boton texto="Descargar" variante="alternativo" modo="light" />
            </a>
          ) : (
            <Link
              to={`/proyectos/${encodeURIComponent(
                titulo.toLowerCase().replace(/\s+/g, "-")
              )}`}
            >
              <Boton
                texto="Más información"
                variante="alternativo"
                modo="light"
              />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TarjetaExperiencia;

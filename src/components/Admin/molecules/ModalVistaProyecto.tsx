import React from "react";
import { motion } from "framer-motion";
import EstrellasValoracion from "../../Proyectos/molecules/EstrellasValoracion";
import ContadorVisitas from "../../Proyectos/atoms/ContadorVisitas";
import BotonAdmin from "../atoms/BotonAdmin";

interface Proyecto {
  id: string;
  titulo: string;
  categoria: string;
  promedio: number;
  visitas: number;
  autor: string;
  fecha: string;
  descripcionCorta: string;
  linkProyecto: string;
  imagenes: string[];
}

interface Props {
  proyecto: Proyecto;
  onClose: () => void;
}

const ModalVistaProyecto: React.FC<Props> = ({ proyecto, onClose }) => {
  const abrirProyecto = () => window.open(proyecto.linkProyecto, "_blank");

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="bg-white rounded-2xl shadow-lg max-w-3xl w-full overflow-hidden"
      >
        {/* Encabezado */}
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h2 className="text-lg md:text-xl font-bold text-udlaverso-negro">
            Vista rápida del proyecto
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 text-xl font-semibold"
          >
            ✕
          </button>
        </div>

        {/* Contenido */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Imagen principal */}
          <div className="flex justify-center items-center bg-gray-100 rounded-xl overflow-hidden h-56">
            <img
              src={proyecto.imagenes?.[0] || "/images/default.png"}
              alt={proyecto.titulo}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Datos básicos */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-semibold text-udlaverso-negro">
              {proyecto.titulo}
            </h3>

            <p className="text-sm text-udlaverso-gris">
              <span className="font-medium text-udlaverso-negro">
                Categoría:
              </span>{" "}
              {proyecto.categoria}
            </p>

            <p className="text-sm text-udlaverso-gris">
              <span className="font-medium text-udlaverso-negro">Autor:</span>{" "}
              {proyecto.autor}
            </p>

            <p className="text-sm text-udlaverso-gris">
              <span className="font-medium text-udlaverso-negro">Fecha:</span>{" "}
              {new Date(proyecto.fecha).toLocaleDateString("es-ES")}
            </p>

            <EstrellasValoracion
              valor={proyecto.promedio}
              interactiva={false}
            />
            <ContadorVisitas visitas={proyecto.visitas} />

            <p className="text-sm text-gray-700 mt-2">
              {proyecto.descripcionCorta}
            </p>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="flex justify-end items-center gap-3 border-t px-6 py-4 bg-gray-50">
          <BotonAdmin
            texto="Ver como usuario"
            onClick={abrirProyecto}
            variante="principal"
          />
          <BotonAdmin texto="Cerrar" onClick={onClose} variante="secundario" />
        </div>
      </motion.div>
    </div>
  );
};

export default ModalVistaProyecto;

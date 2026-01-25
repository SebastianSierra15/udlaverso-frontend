import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiAlertCircle, FiCheckCircle, FiInfo, FiX } from "react-icons/fi";

interface Props {
  mensaje: string;
  tipo?: "error" | "success" | "info" | "warning";
  visible: boolean;
  onClose: () => void;
  duracion?: number; // milisegundos
}

const colores = {
  error: "bg-red-600 text-white",
  success: "bg-green-600 text-white",
  info: "bg-blue-600 text-white",
  warning: "bg-yellow-500 text-black",
};

const iconos = {
  error: <FiAlertCircle className="text-xl mr-2" />,
  success: <FiCheckCircle className="text-xl mr-2" />,
  info: <FiInfo className="text-xl mr-2" />,
  warning: <FiAlertCircle className="text-xl mr-2" />,
};

export const AlertaEmergente: React.FC<Props> = ({
  mensaje,
  tipo = "info",
  visible,
  onClose,
  duracion = 3500,
}) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(onClose, duracion);
      return () => clearTimeout(timer);
    }
  }, [visible, duracion, onClose]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-6 right-6 z-50 shadow-lg rounded-lg px-4 py-3 flex items-center ${colores[tipo]}`}
        >
          {iconos[tipo]}
          <span className="text-sm font-medium flex-1">{mensaje}</span>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onClose();
            }}
            className="ml-3 text-white/80 hover:text-white transition"
          >
            <FiX />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

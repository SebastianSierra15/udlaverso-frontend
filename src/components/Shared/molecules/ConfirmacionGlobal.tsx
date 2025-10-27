import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  visible: boolean;
  titulo?: string;
  mensaje: string;
  textoConfirmar?: string;
  textoCancelar?: string;
  onConfirmar: () => void;
  onCancelar: () => void;
}

const ConfirmacionGlobal: React.FC<Props> = ({
  visible,
  titulo = "¿Estás seguro?",
  mensaje,
  textoConfirmar = "Confirmar",
  textoCancelar = "Cancelar",
  onConfirmar,
  onCancelar,
}) => {
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onCancelar}
        >
          <motion.div
            className="bg-white rounded-xl shadow-xl p-6 max-w-md w-full mx-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <h2 className="text-lg font-semibold text-udlaverso-negro mb-2">
              {titulo}
            </h2>
            <p className="text-gray-700 mb-6">{mensaje}</p>

            <div className="flex justify-end gap-3">
              <button
                onClick={onCancelar}
                className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
              >
                {textoCancelar}
              </button>
              <button
                onClick={onConfirmar}
                className="px-4 py-2 rounded-lg bg-udlaverso-verde text-white hover:bg-green-700 transition"
              >
                {textoConfirmar}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConfirmacionGlobal;

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Pregunta from "../atoms/Pregunta";
import Respuesta from "../atoms/Respuesta";

interface ItemFAQProps {
  pregunta: string;
  respuesta: string;
}

const ItemFAQ: React.FC<ItemFAQProps> = ({ pregunta, respuesta }) => {
  const [abierto, setAbierto] = useState(false);

  return (
    <div className="border-b border-gray-200 py-5">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setAbierto(!abierto)}
      >
        <Pregunta texto={pregunta} />
        <FaChevronDown
          className={`transition-transform duration-300 ${
            abierto ? "rotate-180 text-udlaverso-verde" : "text-gray-400"
          }`}
        />
      </button>

      <AnimatePresence>
        {abierto && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden mt-3 pl-1 md:pl-3"
          >
            <Respuesta texto={respuesta} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ItemFAQ;

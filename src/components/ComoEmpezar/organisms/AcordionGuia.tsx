import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TarjetaPaso from "../molecules/TarjetaPaso";
import { comoEmpezar } from "../../../content/ComoEmpezar";

const AccordionGuia: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(comoEmpezar[0].id);

  return (
    <div className="divide-y divide-udlaverso-verde/20 rounded-2xl border border-udlaverso-verde/20 bg-white shadow-md">
      {comoEmpezar.map((sec) => {
        const isOpen = openId === sec.id;

        return (
          <div key={sec.id}>
            {/* Botón del acordeón */}
            <button
              onClick={() => setOpenId(isOpen ? null : sec.id)}
              className={`w-full flex items-center justify-between gap-3 px-6 py-5 md:px-8 md:py-6 text-left transition-all duration-200 ${
                isOpen ? "bg-udlaverso-verde/10" : "hover:bg-udlaverso-verde/5"
              }`}
              aria-expanded={isOpen}
              aria-controls={`panel-${sec.id}`}
            >
              <span className="text-base md:text-lg font-semibold text-udlaverso-gris">
                {sec.titulo}
              </span>

              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                className="text-udlaverso-verde text-xl font-bold"
                aria-hidden
              >
                ▾
              </motion.span>
            </button>

            {/* Contenido del acordeón */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key={`panel-${sec.id}`}
                  id={`panel-${sec.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 md:px-8 pb-6 md:pb-8 bg-white">
                    <TarjetaPaso
                      titulo={sec.titulo}
                      resumen={sec.resumen}
                      pasos={sec.pasos}
                      tip={sec.tip}
                      videoUrl={sec.videoUrl}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default AccordionGuia;

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Props {
  valor: number;
  texto: string;
  duracion?: number;
}

const TarjetaEstadistica: React.FC<Props> = ({
  valor,
  texto,
  duracion = 2,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const estaEnVista = useInView(ref, { once: true });
  const [contador, setContador] = useState(0);

  useEffect(() => {
    if (!estaEnVista) return;

    let frameId: number;
    const controls = animate(0, valor, {
      duration: duracion,
      ease: "easeOut",
      onUpdate: (v) => {
        frameId = requestAnimationFrame(() => setContador(Math.floor(v)));
      },
    });

    return () => {
      controls.stop();
      cancelAnimationFrame(frameId);
    };
  }, [estaEnVista, valor, duracion]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center text-white gap-y-6 select-none"
    >
      <span className="text-4xl md:text-5xl font-extrabold leading-tight">
        +{contador}
      </span>

      <p className="text-xl md:text-2xl font-semibold">{texto}</p>
    </motion.div>
  );
};

export default TarjetaEstadistica;

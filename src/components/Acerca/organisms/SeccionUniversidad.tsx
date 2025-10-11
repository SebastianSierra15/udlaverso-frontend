import { motion } from "framer-motion";
import ImagenAnimada from "../molecules/ImagenAnimada";

const SeccionUniversidad: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-white to-udlaverso-verde/10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
        <ImagenAnimada
          src="/images/uniamazonia-campus.webp"
          alt="Campus Universidad de la Amazonia"
        />

        <motion.div
          className="w-full md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-3xl font-extrabold text-udlaverso-negro leading-tight">
            Universidad de la Amazonia
          </h2>

          <p className="text-lg text-udlaverso-gris leading-relaxed">
            La <span className="font-semibold">Universidad de la Amazonia</span>{" "}
            es una institución pública comprometida con la formación, la
            investigación y la innovación para el desarrollo sostenible de la
            región amazónica. Desde su Facultad de Ingeniería impulsa proyectos
            como el <strong>UdlaVerso</strong>, que integran la tecnología con
            la pedagogía para transformar los procesos educativos.
          </p>

          <a
            href="https://www.uniamazonia.edu.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-udlaverso-verde font-semibold hover:text-udlaverso-verdeClaro transition"
          >
            Ir al sitio oficial de la Universidad →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SeccionUniversidad;

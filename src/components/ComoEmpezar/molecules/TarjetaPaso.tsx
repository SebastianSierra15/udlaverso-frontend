import { motion } from "framer-motion";
import IconPaso from "../atoms/IconPaso";
import Etiqueta from "../atoms/Etiqueta";

type Paso = {
  texto: string;
  imagenes?: string[];
};

type Props = {
  titulo: string;
  resumen: string;
  pasos: Paso[];
  tip?: string;
  videoUrl?: string;
};

const TarjetaPaso: React.FC<Props> = ({
  titulo,
  resumen,
  pasos,
  tip,
  videoUrl,
}) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className="rounded-2xl border border-udlaverso-verde/20 bg-white/90 backdrop-blur p-6 md:p-10 shadow-lg"
  >
    <header className="flex items-start justify-between gap-3 mb-5">
      <h3 className="text-2xl font-bold text-udlaverso-gris">{titulo}</h3>

      <Etiqueta>Guía paso a paso</Etiqueta>
    </header>

    <p className="text-base text-udlaverso-gris/80 mb-8 max-w-3xl">{resumen}</p>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      {/* texto + imágenes */}
      <div className="space-y-8">
        <ol className="space-y-5">
          {pasos.map((p, i) => (
            <li key={i} className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <IconPaso className="mt-1" />
                <span className="text-base md:text-lg font-medium text-udlaverso-gris">
                  {p.texto}
                </span>
              </div>

              {/* Imagen(es) del paso */}
              {p.imagenes && p.imagenes.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-7">
                  {p.imagenes.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Ilustración del paso ${i + 1}`}
                      className="rounded-lg shadow-md object-cover w-full h-48"
                    />
                  ))}
                </div>
              )}
            </li>
          ))}
        </ol>

        {tip && (
          <p className="mt-6 text-sm italic text-udlaverso-gris/70 border-t border-udlaverso-verde/10 pt-4">
            Consejo: {tip}
          </p>
        )}
      </div>

      {/* Lado derecho: video explicativo */}
      {videoUrl && (
        <div className="aspect-video rounded-xl overflow-hidden shadow-md border border-udlaverso-verde/20">
          <iframe
            src={videoUrl}
            title={`Video explicativo de ${titulo}`}
            allowFullScreen
            className="w-full h-full border-0"
          ></iframe>
        </div>
      )}
    </div>
  </motion.article>
);

export default TarjetaPaso;

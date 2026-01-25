import { ContenidoHero } from "../../Shared";

export const HeroFAQ: React.FC = () => (
  <section className="relative h-[45vh] md:h-[55vh] flex items-center justify-center text-white">
    <img
      src="/images/bus.webp"
      alt="Preguntas Frecuentes UdlaVerso"
      className="absolute inset-0 w-full h-full object-cover -z-10"
    />

    <div className="absolute inset-0 bg-black/60 -z-10" />

    <ContenidoHero
      titulo="Preguntas Frecuentes"
      descripcion="Encuentra respuestas sobre el uso del portal UdlaVerso, el visor UA3D y la interacción con los proyectos."
    />
  </section>
);

import { FaChevronDown } from "react-icons/fa";
import { animate } from "framer-motion";
import Boton from "../../Shared/atoms/Boton";

const Hero = () => {
  const scrollToNext = () => {
    const target = document.getElementById("introduccion");
    if (target) {
      const startY = window.scrollY;
      const endY = target.getBoundingClientRect().top + window.scrollY - 70;

      const controls = animate(startY, endY, {
        duration: 1,
        ease: "easeInOut",
        onUpdate: (value) => window.scrollTo(0, value),
      });

      return () => controls.stop();
    }
  };

  return (
    <section className="relative h-screen flex items-center text-white overflow-hidden">
      {/* Imagen de fondo */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="/images/hero.webp"
        alt="Fondo UdlaVerso"
      />

      <div className="absolute inset-0 bg-black/30 -z-10" />

      {/* Contenido alineado a la izquierda */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-start text-left pl-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          UdlaVerso
        </h1>

        <p className="text-lg md:text-xl mb-6 max-w-xl drop-shadow-md">
          Un espacio académico virtual para explorar la innovación en Realidad
          Aumentada
        </p>

        <div className="flex gap-4">
          <Boton texto="Descargar visor" variante="principal" modo="light" />
          <Boton
            texto="Nuestros Proyectos"
            variante="secundario"
            modo="light"
          />
        </div>
      </div>

      {/* Flecha centrada abajo */}
      <button
        onClick={scrollToNext}
        className="absolute hover:text-udlaverso-verdeClaro duration-300 transition-colors bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-3xl"
      >
        <FaChevronDown />
      </button>
    </section>
  );
};

export default Hero;

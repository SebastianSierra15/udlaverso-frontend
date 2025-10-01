import { FaChevronDown } from "react-icons/fa";
import Boton from "../../Shared/atoms/Boton";

const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[calc(100vh-70px)] flex items-center text-white overflow-hidden">
      {/* Imagen de fondo */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="/images/hero.webp"
        alt="Fondo UdlaVerso"
      />

      <div className="absolute inset-0 bg-black/30 -z-10" />

      {/* Contenido alineado a la izquierda */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-start text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          UdlaVerso
        </h1>

        <p className="text-lg md:text-xl mb-6 max-w-xl drop-shadow-md">
          Un espacio académico virtual para explorar la innovación en Realidad
          Aumentada
        </p>

        <div className="flex gap-4">
          <Boton texto="Descargar visor" variante="principal" />
          <Boton texto="Nuestros Proyectos" variante="terciario" />
        </div>
      </div>

      {/* Flecha centrada abajo */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-3xl"
      >
        <FaChevronDown />
      </button>
    </section>
  );
};

export default Hero;

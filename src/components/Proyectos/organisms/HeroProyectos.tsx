import { ContenidoHero } from "../../Shared";

export const HeroProyectos: React.FC = () => {
  return (
    <section className="relative h-[45vh] md:h-[55vh] flex items-center justify-center overflow-hidden text-white">
      <img
        src="/images/puente.webp"
        alt="Nuestros Proyectos"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 -z-10" />

      <ContenidoHero
        titulo="Nuestros Proyectos"
        descripcion="Explora iniciativas en RA desarrolladas por estudiantes y docentes. Filtra por categoría y descubre experiencias inmersivas."
      />
    </section>
  );
};

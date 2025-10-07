import TarjetaExperiencia from "../molecules/TarjetaExperiencia";

const experiencias = [
  {
    titulo: "Visor UA3D",
    descripcion:
      "Descarga el visor para disfrutar la mejor experiencia del campus virtual de la Universidad de la Amazonia.",
    imagen: "/images/ua3d.png",
  },
  {
    titulo: "Laboratorio IoT",
    descripcion:
      "Mejora la velocidad y vive una experiencia más inmersiva en el Laboratorio IoT descargando el visor.",
    imagen: "/images/iot.png",
  },
  {
    titulo: "Visor Events",
    descripcion:
      "Accede a tus eventos en RA con mayor fluidez y calidad descargando el visor.",
    imagen: "/images/events.png",
  },
];

const ExperienciasInteractivas = () => {
  return (
    <section className="bg-gradient-to-b to-white from-udlaverso-verde/10 py-16 px-6 md:px-20 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-udlaverso-negro mb-12">
        Experiencias Interactivas
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {experiencias.map((item, i) => (
          <TarjetaExperiencia
            key={i}
            imagen={item.imagen}
            titulo={item.titulo}
            descripcion={item.descripcion}
            delay={i * 0.2}
          />
        ))}
      </div>
    </section>
  );
};

export default ExperienciasInteractivas;

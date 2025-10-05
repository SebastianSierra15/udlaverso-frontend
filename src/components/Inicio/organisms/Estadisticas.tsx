import TarjetaEstadistica from "../molecules/TarjetaEstadistica";

const Estadisticas: React.FC = () => {
  const data = [
    { valor: 40, texto: "Proyectos publicados" },
    { valor: 100, texto: "Estudiantes participando" },
    { valor: 10, texto: "Laboratorios RA" },
  ];

  return (
    <section className="bg-udlaverso-verde py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
        {data.map((item, i) => (
          <TarjetaEstadistica
            key={i}
            valor={item.valor}
            texto={item.texto}
            duracion={2 + i * 0.3}
          />
        ))}
      </div>
    </section>
  );
};

export default Estadisticas;

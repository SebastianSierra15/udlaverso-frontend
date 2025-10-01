import TarjetaProyecto from "../../components/Shared/molecules/TarjetaProyecto";
import Hero from "../../components/Inicio/organisms/Hero";

function Inicio() {
  return (
    <>
      <Hero />

      <section className="p-8">
        <h2 className="text-2xl font-bold mb-4">Proyectos Destacados</h2>
        <div className="grid grid-cols-3 gap-4">
          <TarjetaProyecto titulo="Proyecto 1" imagen="/assets/proyecto1.png" />
          <TarjetaProyecto titulo="Proyecto 2" imagen="/assets/proyecto2.png" />
          <TarjetaProyecto titulo="Proyecto 3" imagen="/assets/proyecto3.png" />
        </div>
      </section>
    </>
  );
}

export default Inicio;

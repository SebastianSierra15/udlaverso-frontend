import TarjetaProyecto from "../../components/Shared/molecules/TarjetaProyecto";
import Boton from "../../components/Shared/atoms/Boton";

function Inicio() {
  return (
    <>
      <div className="h-[60vh] flex flex-col items-center justify-center text-center bg-gray-100 z-0">
        <h1 className="text-4xl font-bold">
          Laboratorio Amazónico de Realidad Aumentada
        </h1>
        <div className="mt-4 flex gap-4">
          <Boton texto="Descargar visor" variante="principal" />
          <Boton texto="Nuestros proyectos" variante="secundario" />
        </div>
      </div>

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

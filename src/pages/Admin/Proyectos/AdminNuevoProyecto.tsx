import { useState } from "react";
import Stepper from "../../../components/Admin/molecules/Stepper";
import PasoDatosBasicos from "../../../components/Admin/organisms/PasoDatosBasicos";
import PasoContenido from "../../../components/Admin/organisms/PasoContenido";
import PasoImagenes from "../../../components/Admin/organisms/PasoImagenes";
import PasoRevision from "../../../components/Admin/organisms/PasoRevision";
import BotonAdmin from "../../../components/Admin/atoms/BotonAdmin";

const AdminNuevoProyecto = () => {
  const [paso, setPaso] = useState(1);
  const totalPasos = 4;

  const siguiente = () => paso < totalPasos && setPaso(paso + 1);
  const anterior = () => paso > 1 && setPaso(paso - 1);

  const [datosBasicos, setDatosBasicos] = useState({
    titulo: "",
    autor: "",
    objetivo: "",
    descripcionCorta: "",
  });

  const [contenido, setContenido] = useState({
    categorias: [] as string[],
    herramientas: [] as string[],
    palabrasClave: [] as string[],
    descripcionDetallada: "",
  });

  const [imagenes, setImagenes] = useState({
    hero: null as File | null,
    galeria: [] as File[],
    video: "",
  });

  return (
    <section className="p-6 bg-white rounded-xl shadow-md space-y-6">
      <h1 className="text-xl md:text-2xl font-bold text-udlaverso-negro">
        Agregar Proyecto
      </h1>

      <Stepper pasoActual={paso} total={totalPasos} />

      {paso === 1 && (
        <PasoDatosBasicos data={datosBasicos} onChange={setDatosBasicos} />
      )}
      {paso === 2 && <PasoContenido data={contenido} onChange={setContenido} />}
      {paso === 3 && <PasoImagenes data={imagenes} onChange={setImagenes} />}
      {paso === 4 && (
        <PasoRevision
          datosBasicos={datosBasicos}
          contenido={contenido}
          imagenes={imagenes}
        />
      )}

      {/* Controles */}
      <div className="flex justify-between mt-6">
        {paso > 1 ? (
          <BotonAdmin texto="Volver" onClick={anterior} variante="secundario" />
        ) : (
          <div />
        )}
        {paso < totalPasos ? (
          <BotonAdmin texto="Siguiente" onClick={siguiente} />
        ) : (
          <BotonAdmin
            texto="Guardar proyecto"
            onClick={() => alert("Proyecto guardado")}
            variante="principal"
          />
        )}
      </div>
    </section>
  );
};

export default AdminNuevoProyecto;

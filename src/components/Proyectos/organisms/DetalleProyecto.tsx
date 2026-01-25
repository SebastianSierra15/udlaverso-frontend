import type { Proyecto } from "../../../types";
import {
  TituloAccionProyecto,
  CategoriaSocialProyecto,
  EstrellasValoracion,
} from "../molecules";
import { ContadorVisitas } from "../atoms";
import { ContenidoProyecto } from "./ContenidoProyecto";
import { ReseniasProyecto } from "./ReseniasProyecto";

type Props = Proyecto & {
  linkProyecto?: string;
};

export const DetalleProyecto: React.FC<Props> = ({
  idProyecto,
  nombreProyecto,
  categoriaNombre,
  visualizacionesProyecto,
  autorProyecto,
  herramientasProyecto,
  fechacreacionProyecto,
  descripcioncortaProyecto,
  descripcionlargaProyecto,
  objetivoProyecto,
  videoProyecto,
  palabrasclaveProyecto,
  imagenesProyecto,
  valoracionPromedio = 0,
}) => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-10 bg-white rounded-2xl shadow-sm -mt-10 relative z-10">
      <TituloAccionProyecto titulo={nombreProyecto} />
      <CategoriaSocialProyecto
        categoria={categoriaNombre ?? "General"}
        titulo={nombreProyecto}
      />

      <div className="flex items-center gap-2 mt-2">
        <EstrellasValoracion valor={valoracionPromedio} interactiva={false} />
        <ContadorVisitas visitas={Number(visualizacionesProyecto) || 0} />
      </div>

      <ContenidoProyecto
        titulo={nombreProyecto}
        autor={autorProyecto}
        fecha={fechacreacionProyecto ?? ""}
        tecnologias={
          herramientasProyecto?.split(",").map((h) => h.trim()) ?? []
        }
        descripcionCorta={descripcioncortaProyecto}
        descripcionLarga={descripcionlargaProyecto}
        objetivos={objetivoProyecto}
        palabrasClave={
          palabrasclaveProyecto?.split(",").map((p) => p.trim()) ?? []
        }
        imagenes={imagenesProyecto ?? []}
        video={videoProyecto ?? ""}
      />

      <ReseniasProyecto idProyecto={idProyecto} />
    </section>
  );
};

import React from "react";
import SelectorCategorias from "../molecules/SelectorCategorias";
import EditorTexto from "../molecules/EditorTexto";
import CampoEtiquetas from "../molecules/CampoEtiquetas";

interface Props {
  data: {
    categorias: string[];
    herramientas: string[];
    palabrasClave: string[];
    descripcionDetallada: string;
  };
  onChange: (nuevaData: Props["data"]) => void;
}

const PasoContenido: React.FC<Props> = ({ data, onChange }) => {
  const actualizar = (campo: keyof Props["data"], valor: any) => {
    onChange({ ...data, [campo]: valor });
  };

  return (
    <div className="space-y-5">
      <h3 className="text-lg font-semibold text-udlaverso-negro">
        Contenido y Herramientas
      </h3>

      <SelectorCategorias
        categoriasDisponibles={[
          "Educación",
          "Ciencia",
          "Eventos",
          "Tecnología",
        ]}
        maxCategorias={3}
        categoriasSeleccionadas={data.categorias}
        onChange={(v) => actualizar("categorias", v)}
      />

      <CampoEtiquetas
        label="Herramientas utilizadas *"
        placeholder="Ej: Unity, Blender, OpenSim..."
        tooltip="Lista las herramientas o tecnologías utilizadas para el desarrollo del proyecto."
        maxEtiquetas={10}
        valores={data.herramientas}
        onChange={(v) => actualizar("herramientas", v)}
      />

      <CampoEtiquetas
        label="Palabras clave"
        placeholder="Ej: RA, IoT, biodiversidad..."
        tooltip="Ayudan a la búsqueda y clasificación del proyecto."
        maxEtiquetas={5}
        valores={data.palabrasClave}
        onChange={(v) => actualizar("palabrasClave", v)}
      />

      <EditorTexto
        label="Descripción detallada *"
        maxLength={2200}
        value={data.descripcionDetallada}
        onChange={(v) => actualizar("descripcionDetallada", v)}
      />
    </div>
  );
};

export default PasoContenido;

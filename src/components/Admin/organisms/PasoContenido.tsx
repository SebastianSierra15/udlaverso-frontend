import React from "react";
import SelectorOpciones from "../molecules/SelectorOpciones";
import EditorTexto from "../molecules/EditorTexto";
import CampoEtiquetas from "../molecules/CampoEtiquetas";
import type { Categoria } from "../../../types/Categoria.type";

interface Props {
  data: {
    categorias: string[];
    herramientas: string[];
    palabrasClave: string[];
    descripcionDetallada: string;
  };
  onChange: (nuevaData: Props["data"]) => void;
  categorias: Categoria[];
  cargando: boolean;
  error: string | null;
}

const PasoContenido: React.FC<Props> = ({
  data,
  onChange,
  categorias,
  cargando,
  error,
}) => {
  const actualizar = <K extends keyof Props["data"]>(
    campo: K,
    valor: Props["data"][K]
  ) => {
    onChange({ ...data, [campo]: valor });
  };

  const opcionesCategorias = categorias.map((cat) => ({
    label: cat.nombreCategoria,
    value: String(cat.idCategoria),
  }));

  return (
    <div className="space-y-5">
      <h3 className="text-lg font-semibold text-udlaverso-negro">
        Contenido y Herramientas
      </h3>

      {cargando ? (
        <p className="text-gray-500 text-sm">Cargando categorías...</p>
      ) : error ? (
        <p className="text-red-600 text-sm">{error}</p>
      ) : (
        <SelectorOpciones
          label="Categoría del proyecto"
          tooltip="Selecciona la categoría a la que pertenece el proyecto."
          opciones={opcionesCategorias}
          maxSeleccion={1}
          seleccionadas={data.categorias}
          onChange={(v) => actualizar("categorias", v)}
          obligatorio
          placeholder="Selecciona una categoría"
        />
      )}

      <CampoEtiquetas
        label="Herramientas utilizadas"
        placeholder="Ej: Unity, Blender, OpenSim..."
        tooltip="Lista las herramientas o tecnologías utilizadas para el desarrollo del proyecto. (presiona Enter para agregar)"
        maxEtiquetas={5}
        valores={data.herramientas}
        onChange={(v) => actualizar("herramientas", v)}
        obligatorio
      />

      <CampoEtiquetas
        label="Palabras clave"
        placeholder="Ej: RA, IoT, biodiversidad..."
        tooltip="Ayudan a la búsqueda y clasificación del proyecto. (presiona Enter para agregar)"
        maxEtiquetas={5}
        valores={data.palabrasClave}
        onChange={(v) => actualizar("palabrasClave", v)}
        obligatorio
      />

      <EditorTexto
        label="Descripción detallada"
        maxLength={3000}
        value={data.descripcionDetallada}
        onChange={(v) => actualizar("descripcionDetallada", v)}
        obligatorio
      />
    </div>
  );
};

export default PasoContenido;

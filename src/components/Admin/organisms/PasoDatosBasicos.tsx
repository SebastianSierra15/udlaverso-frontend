import React from "react";
import CampoTexto from "../atoms/CampoTexto";
import CampoTextoArea from "../atoms/CampoTextoArea";

interface Props {
  data: {
    titulo: string;
    autor: string;
    objetivo: string;
    descripcionCorta: string;
  };
  onChange: (nuevaData: Props["data"]) => void;
}

const PasoDatosBasicos: React.FC<Props> = ({ data, onChange }) => {
  const actualizar = (campo: keyof Props["data"], valor: string) => {
    onChange({ ...data, [campo]: valor });
  };

  return (
    <div className="space-y-5">
      <h3 className="text-lg font-semibold text-udlaverso-negro">
        Datos Básicos
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CampoTexto
          label="Título del proyecto *"
          placeholder="Ingrese el título del proyecto"
          tooltip="Nombre principal del proyecto tal como aparecerá públicamente."
          value={data.titulo}
          onChange={(v) => actualizar("titulo", v)}
        />

        <CampoTexto
          label="Autor *"
          placeholder="Ej: Sebastián Sierra"
          tooltip="Nombre del autor del desarrollo."
          value={data.autor}
          onChange={(v) => actualizar("autor", v)}
        />
      </div>

      <CampoTextoArea
        label="Objetivo principal del proyecto *"
        placeholder="Describe el objetivo principal del proyecto..."
        tooltip="Describe el propósito central del proyecto. Este texto se mostrará debajo del título en la sección principal del proyecto."
        maxLength={100}
        filas={3}
        value={data.objetivo}
        onChange={(v) => actualizar("objetivo", v)}
      />

      <CampoTextoArea
        label="Descripción corta (aparece en las tarjetas) *"
        placeholder="Ej: Exploración interactiva en RA para conceptos de física."
        tooltip="Texto breve que se muestra en la tarjeta del proyecto para resumir su contenido."
        maxLength={200}
        filas={3}
        value={data.descripcionCorta}
        onChange={(v) => actualizar("descripcionCorta", v)}
      />
    </div>
  );
};

export default PasoDatosBasicos;

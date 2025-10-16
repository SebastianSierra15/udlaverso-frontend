import React from "react";
import CampoTexto from "../atoms/CampoTexto";
import VistaPreviaImagen from "../atoms/VistaPreviaImagen";
import LabelConTooltip from "../atoms/LabelConTooltip";
import GaleriaImagenes from "../molecules/GaleriaImagenes";

interface Props {
  data: {
    hero: File | null;
    galeria: File[];
    video: string;
  };
  onChange: (nuevaData: Props["data"]) => void;
}

const PasoImagenes: React.FC<Props> = ({ data, onChange }) => {
  const actualizar = (campo: keyof Props["data"], valor: any) => {
    onChange({ ...data, [campo]: valor });
  };

  return (
    <div className="space-y-5">
      <h3 className="text-lg font-semibold text-udlaverso-negro">
        Imágenes y Multimedia
      </h3>

      <div className="space-y-3">
        <LabelConTooltip
          texto="Imagen principal (Hero)"
          obligatorio
          tooltip="Esta imagen aparecerá como encabezado del proyecto en la vista pública."
        />

        <input
          type="file"
          accept="image/*"
          className="text-sm text-gray-600 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-udlaverso-verde file:text-white hover:file:bg-udlaverso-verde/90"
          onChange={(e) => actualizar("hero", e.target.files?.[0] || null)}
        />

        {data.hero && (
          <div className="mt-3">
            <VistaPreviaImagen
              src={URL.createObjectURL(data.hero)}
              alt="Hero"
              onRemove={() => actualizar("hero", null)}
            />
          </div>
        )}

        <p className="text-xs text-gray-500 mt-1">
          Esta imagen aparecerá como encabezado del proyecto.
        </p>
      </div>

      <div className="space-y-3">
        <LabelConTooltip
          texto="Otras imágenes (galería)"
          tooltip="Agrega imágenes adicionales del proyecto (máximo 10)."
        />

        <GaleriaImagenes
          minimo={3}
          onChange={(v) => actualizar("galeria", v)}
          maxImagenes={10}
        />
      </div>

      <CampoTexto
        label="Video del proyecto"
        placeholder="https://youtube.com/..."
        tooltip="Puedes incluir un enlace a un video de YouTube relacionado con tu proyecto."
        value={data.video}
        onChange={(v) => actualizar("video", v)}
      />
    </div>
  );
};

export default PasoImagenes;

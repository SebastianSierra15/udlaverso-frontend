import React, { useState } from "react";
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
  const [errores, setErrores] = useState({
    hero: "",
    galeria: "",
    video: "",
  });

  const actualizar = (campo: keyof Props["data"], valor: any) => {
    onChange({ ...data, [campo]: valor });
  };

  // 🔍 Validar video de YouTube
  const validarVideo = (url: string) => {
    const regex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
    if (!regex.test(url)) {
      setErrores((prev) => ({
        ...prev,
        video: "Debe ser un enlace válido de YouTube.",
      }));
    } else {
      setErrores((prev) => ({ ...prev, video: "" }));
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-udlaverso-negro">
        Imágenes y Multimedia
      </h3>

      {/* Imagen principal */}
      <div className="space-y-3">
        <LabelConTooltip
          texto="Imagen principal (Hero)"
          obligatorio
          tooltip="Esta imagen aparecerá como encabezado del proyecto en la vista pública."
        />

        <input
          type="file"
          accept="image/*"
          required
          className={`text-sm text-gray-600 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-udlaverso-verde file:text-white hover:file:bg-udlaverso-verde/90 ${
            errores.hero ? "border border-red-500" : ""
          }`}
          onChange={(e) => {
            const archivo = e.target.files?.[0] || null;
            actualizar("hero", archivo);
            if (!archivo) {
              setErrores((prev) => ({
                ...prev,
                hero: "Debe seleccionar una imagen principal.",
              }));
            } else {
              setErrores((prev) => ({ ...prev, hero: "" }));
            }
          }}
        />

        {errores.hero && (
          <p className="text-xs text-red-600 mt-1">{errores.hero}</p>
        )}

        {data.hero && (
          <div className="mt-3">
            <VistaPreviaImagen
              src={URL.createObjectURL(data.hero)}
              alt="Hero"
              onRemove={() => {
                actualizar("hero", null);
                setErrores((prev) => ({
                  ...prev,
                  hero: "Debe seleccionar una imagen principal.",
                }));
              }}
            />
          </div>
        )}
      </div>

      {/* Galería de imágenes */}
      <div className="space-y-3">
        <LabelConTooltip
          texto="Otras imágenes (galería)"
          obligatorio
          tooltip="Agrega imágenes adicionales del proyecto (mínimo 3, máximo 10)."
        />

        <GaleriaImagenes
          minimo={3}
          maxImagenes={10}
          onChange={(v) => {
            actualizar("galeria", v);
            if (v.length < 3) {
              setErrores((prev) => ({
                ...prev,
                galeria: "Debes subir al menos 3 imágenes.",
              }));
            } else if (v.length > 10) {
              setErrores((prev) => ({
                ...prev,
                galeria: "Solo puedes subir hasta 10 imágenes.",
              }));
            } else {
              setErrores((prev) => ({ ...prev, galeria: "" }));
            }
          }}
        />

        {errores.galeria && (
          <p className="text-xs text-red-600 mt-1">{errores.galeria}</p>
        )}
      </div>

      {/* Video */}
      <div>
        <CampoTexto
          label="Video del proyecto *"
          placeholder="https://youtube.com/..."
          tooltip="Incluye un enlace de YouTube relacionado con tu proyecto."
          value={data.video}
          maxLength={500}
          obligatorio
          onChange={(v) => {
            actualizar("video", v);
            validarVideo(v);
          }}
        />
        {errores.video && (
          <p className="text-xs text-red-600 mt-1">{errores.video}</p>
        )}
      </div>
    </div>
  );
};

export default PasoImagenes;

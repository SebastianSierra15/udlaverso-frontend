import { useState, useEffect, useRef } from "react";
import { convertirAWebp } from "../../../utils/convertirAWebp";
import CampoTexto from "../atoms/CampoTexto";
import VistaPreviaImagen from "../atoms/VistaPreviaImagen";
import LabelConTooltip from "../atoms/LabelConTooltip";
import GaleriaImagenes from "../molecules/GaleriaImagenes";

interface Props {
  data: {
    hero: File | null;
    galeria: File[];
    video: string;
    heroUrl?: string;
    galeriaUrls?: string[];
    galeriaEliminadas?: string[];
  };
  onChange: (nuevaData: Props["data"]) => void;
}

type ArchivoConPreview = File & { preview?: string };

const PasoImagenes: React.FC<Props> = ({ data, onChange }) => {
  const [errores, setErrores] = useState({
    hero: "",
    galeria: "",
    video: "",
  });
  const [inputKey, setInputKey] = useState(0);
  const inicializado = useRef(false);

  const actualizar = <K extends keyof Props["data"]>(
    campo: K,
    valor: Props["data"][K]
  ) => {
    onChange({ ...data, [campo]: valor });
  };

  const obtenerPreview = (archivo: File) => {
    const conPreview = archivo as ArchivoConPreview;
    if (!conPreview.preview) {
      conPreview.preview = URL.createObjectURL(archivo);
    }
    return conPreview.preview;
  };

  const liberarPreview = (archivo: File | null) => {
    const conPreview = archivo as ArchivoConPreview | null;
    if (conPreview?.preview) {
      URL.revokeObjectURL(conPreview.preview);
    }
  };

  // Validar video de YouTube
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

  useEffect(() => {
    if (data.hero) {
      obtenerPreview(data.hero);
    }
  }, [data.hero]);

  useEffect(() => {
    if (inicializado.current) return;
    inicializado.current = true;

    if (data.galeria && data.galeria.length > 0) {
      onChange({ ...data });
    }
  }, [data, onChange]);

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
          key={inputKey}
          type="file"
          accept="image/*"
          required
          className={`text-sm text-gray-600 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-udlaverso-verde file:text-white hover:file:bg-udlaverso-verde/90 ${
            errores.hero ? "border border-red-500" : ""
          }`}
          onChange={async (e) => {
            const archivo = e.target.files?.[0] || null;

            if (!archivo) {
              setErrores((prev) => ({
                ...prev,
                hero: "Debe seleccionar una imagen principal.",
              }));
              actualizar("hero", null);
              return;
            }

            try {
              // Convierte a WebP antes de actualizar el estado
              const convertido = await convertirAWebp(archivo);
              obtenerPreview(convertido);
              actualizar("hero", convertido);
              setErrores((prev) => ({ ...prev, hero: "" }));
            } catch {
              obtenerPreview(archivo);
              actualizar("hero", archivo); // fallback
            }
          }}
        />

        {errores.hero && (
          <p className="text-xs text-red-600 mt-1">{errores.hero}</p>
        )}

        {/* Imagen principal (único bloque para hero o heroUrl) */}
        {(() => {
          if (data.hero) {
            return (
              <div className="mt-3" key="hero-preview">
                <VistaPreviaImagen
                  key={obtenerPreview(data.hero)}
                  src={obtenerPreview(data.hero)}
                  alt="Imagen principal"
                  onRemove={() => {
                    liberarPreview(data.hero);

                    // 🔧 Agrupamos todo en un solo update
                    onChange({
                      ...data,
                      hero: null,
                      heroUrl: "",
                    });

                    setInputKey((prev) => prev + 1);
                    setErrores((prev) => ({
                      ...prev,
                      hero: "Debe seleccionar una imagen principal.",
                    }));
                  }}
                />
              </div>
            );
          }

          if (data.heroUrl && data.heroUrl.trim() !== "") {
            return (
              <div className="mt-3" key="hero-url">
                <VistaPreviaImagen
                  key={data.heroUrl}
                  src={data.heroUrl}
                  alt="Imagen principal"
                  onRemove={() => {
                    liberarPreview(data.hero);

                    // 🔧 Agrupamos todo en un solo update
                    onChange({
                      ...data,
                      hero: null,
                      heroUrl: "",
                    });

                    setInputKey((prev) => prev + 1);
                    setErrores((prev) => ({
                      ...prev,
                      hero: "Debe seleccionar una imagen principal.",
                    }));
                  }}
                />
              </div>
            );
          }

          return null;
        })()}
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
          iniciales={data.galeriaUrls ?? []}
          archivos={data.galeria ?? []}
          onChange={async ({ archivos, urls, eliminadas }) => {
            const convertidos = await Promise.all(
              archivos.map((f) => convertirAWebp(f))
            );

            onChange({
              ...data,
              galeria: convertidos,
              galeriaUrls: urls,
              galeriaEliminadas: eliminadas,
            });

            const total = convertidos.length + urls.length;

            if (total < 3) {
              setErrores((prev) => ({
                ...prev,
                galeria: "Debes subir al menos 3 imágenes.",
              }));
            } else if (total > 10) {
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

import React, { useEffect, useState } from "react";
import VistaPreviaImagen from "../atoms/VistaPreviaImagen";
import BotonFlecha from "../atoms/BotonFlecha";

type Props = {
  minimo?: number;
  maxVisibles?: number;
  maxImagenes?: number;
  iniciales?: string[]; // imágenes ya existentes (URLs)
  archivos?: File[];
  onChange: (data: {
    archivos: File[];
    urls: string[];
    eliminadas: string[];
  }) => void;
};

const GaleriaImagenes: React.FC<Props> = ({
  minimo = 3,
  maxVisibles = 5,
  maxImagenes = 10,
  iniciales = [],
  archivos = [],
  onChange,
}) => {
  const [imagenes, setImagenes] = useState<File[]>(archivos ?? []);
  const [urls, setUrls] = useState<string[]>(iniciales);
  const [indice, setIndice] = useState(0);
  const [mensajeError, setMensajeError] = useState("");
  const [eliminadas, setEliminadas] = useState<string[]>([]);

  useEffect(() => {
    setUrls(iniciales);
  }, [iniciales]);

  useEffect(() => {
    setImagenes(archivos);
  }, [archivos]);

  const handleSeleccion = (e: React.ChangeEvent<HTMLInputElement>) => {
    const archivos = e.target.files ? Array.from(e.target.files) : [];
    const nuevas = [...imagenes, ...archivos];

    const total = nuevas.length + urls.length;

    if (total > maxImagenes) {
      setMensajeError(`Solo se permiten ${maxImagenes} imágenes como máximo.`);
      return;
    }

    if (total < minimo) {
      setMensajeError(`Debes tener al menos ${minimo} imágenes en total.`);
    } else {
      setMensajeError("");
    }

    setImagenes(nuevas);
    onChange({ archivos: nuevas, urls, eliminadas });
  };

  const eliminarImagen = (index: number, esUrl = false) => {
    if (esUrl) {
      // Si es una imagen del backend (URL)
      const urlEliminada = urls[index];
      const nuevasUrls = urls.filter((_, i) => i !== index);

      setUrls(nuevasUrls);
      setEliminadas((prev) => [...prev, urlEliminada]);
      onChange({
        archivos: imagenes,
        urls: nuevasUrls,
        eliminadas: [...eliminadas, urlEliminada],
      });
    } else {
      const indexReal = index - urls.length;
      if (indexReal < 0 || indexReal >= imagenes.length) return;

      const nuevas = imagenes.filter((_, i) => i !== indexReal);
      setImagenes(nuevas);
      onChange({ archivos: nuevas, urls, eliminadas });

      if (nuevas.length === 0 && urls.length === 0) {
        setMensajeError("Debes subir al menos 3 imágenes.");
      }
    }
  };

  const navegar = (direccion: "prev" | "next") => {
    const total = imagenes.length + urls.length;
    if (total <= maxVisibles) return;

    setIndice((prev) =>
      direccion === "next"
        ? Math.min(prev + 1, total - maxVisibles)
        : Math.max(prev - 1, 0)
    );
  };

  // Combinar imágenes existentes y nuevas
  const todasLasImagenes = [
    ...urls.map((u) => ({ src: u, esUrl: true })),
    ...imagenes.map((f) => ({
      src: URL.createObjectURL(f),
      esUrl: false,
    })),
  ];

  const visibles = todasLasImagenes.slice(indice, indice + maxVisibles);

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleSeleccion}
        className="text-sm text-gray-600 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-gray-200 hover:file:bg-gray-300"
      />

      {mensajeError && (
        <p className="text-xs text-red-500 mt-1">{mensajeError}</p>
      )}

      {todasLasImagenes.length > 0 && (
        <div className="mt-3 space-y-3">
          <p className="text-xs text-gray-500">
            {todasLasImagenes.length} imagen
            {todasLasImagenes.length !== 1 ? "es" : ""} cargada
            {todasLasImagenes.length < minimo && (
              <> — se requieren al menos {minimo}</>
            )}
          </p>

          <div className="flex items-center gap-2 mt-2">
            {todasLasImagenes.length > maxVisibles && (
              <BotonFlecha
                direccion="left"
                onClick={() => navegar("prev")}
                deshabilitado={indice === 0}
              />
            )}

            <div className="flex gap-3 overflow-hidden">
              {visibles.map((img, i) => (
                <VistaPreviaImagen
                  key={i + indice}
                  src={img.src}
                  alt={`Imagen ${i + 1}`}
                  onRemove={() => eliminarImagen(i + indice, img.esUrl)}
                />
              ))}
            </div>

            {todasLasImagenes.length > maxVisibles && (
              <BotonFlecha
                direccion="right"
                onClick={() => navegar("next")}
                deshabilitado={indice + maxVisibles >= todasLasImagenes.length}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GaleriaImagenes;

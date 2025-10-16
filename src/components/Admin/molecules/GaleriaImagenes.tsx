import React, { useState } from "react";
import VistaPreviaImagen from "../atoms/VistaPreviaImagen";
import BotonFlecha from "../atoms/BotonFlecha";

type Props = {
  minimo?: number;
  maxVisibles?: number;
  maxImagenes?: number; // ← nuevo límite total
  onChange: (archivos: File[]) => void;
};

const GaleriaImagenes: React.FC<Props> = ({
  minimo = 3,
  maxVisibles = 5,
  maxImagenes = 10,
  onChange,
}) => {
  const [imagenes, setImagenes] = useState<File[]>([]);
  const [indice, setIndice] = useState(0);
  const [mensajeError, setMensajeError] = useState("");

  const handleSeleccion = (e: React.ChangeEvent<HTMLInputElement>) => {
    const archivos = e.target.files ? Array.from(e.target.files) : [];
    const nuevas = [...imagenes, ...archivos];

    if (nuevas.length > maxImagenes) {
      setMensajeError(`Solo se permiten ${maxImagenes} imágenes como máximo.`);
      return;
    }

    setMensajeError("");
    setImagenes(nuevas);
    onChange(nuevas);
  };

  const eliminarImagen = (index: number) => {
    const nuevas = imagenes.filter((_, i) => i !== index);
    setImagenes(nuevas);
    onChange(nuevas);
    setMensajeError("");
  };

  const navegar = (direccion: "prev" | "next") => {
    if (imagenes.length <= maxVisibles) return;
    setIndice((prev) =>
      direccion === "next"
        ? Math.min(prev + 1, imagenes.length - maxVisibles)
        : Math.max(prev - 1, 0)
    );
  };

  const visibleImagenes = imagenes.slice(indice, indice + maxVisibles);

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

      {imagenes.length > 0 && (
        <div className="mt-3 space-y-3">
          <p className="text-xs text-gray-500">
            {imagenes.length} imagen{imagenes.length !== 1 ? "es" : ""} cargada
            {imagenes.length < minimo && <> — se requieren al menos {minimo}</>}
          </p>

          <div className="flex items-center gap-2 mt-2">
            {imagenes.length > maxVisibles && (
              <BotonFlecha
                direccion="left"
                onClick={() => navegar("prev")}
                deshabilitado={indice === 0}
              />
            )}

            <div className="flex gap-3 overflow-hidden">
              {visibleImagenes.map((img, i) => (
                <VistaPreviaImagen
                  key={i + indice}
                  src={URL.createObjectURL(img)}
                  alt={`Miniatura ${i + 1}`}
                  onRemove={() => eliminarImagen(i + indice)}
                />
              ))}
            </div>

            {imagenes.length > maxVisibles && (
              <BotonFlecha
                direccion="right"
                onClick={() => navegar("next")}
                deshabilitado={indice + maxVisibles >= imagenes.length}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GaleriaImagenes;

import { useState, useEffect } from "react";
import { appConfig } from "../../../config";
import CampoTexto from "../atoms/CampoTexto";
import EditorTexto from "./EditorTexto";
import VistaPreviaImagen from "../atoms/VistaPreviaImagen";

type Props = {
  titulo: string;
  contenido: string;
  onTituloChange: (v: string) => void;
  onContenidoChange: (v: string) => void;
  onImagenChange: (file: File | null) => void;
  imagenActual?: string | null;
};

const FormularioNoticia: React.FC<Props> = ({
  titulo,
  contenido,
  onTituloChange,
  onContenidoChange,
  onImagenChange,
  imagenActual = null,
}) => {
  const [vistaPrevia, setVistaPrevia] = useState<string | null>(null);

  useEffect(() => {
    if (imagenActual) {
      setVistaPrevia(`${appConfig.apiUrl}${imagenActual}`);
    }
  }, [imagenActual]);

  const manejarCambioImagen = (e: React.ChangeEvent<HTMLInputElement>) => {
    const archivo = e.target.files?.[0];
    if (archivo) {
      const url = URL.createObjectURL(archivo);
      setVistaPrevia(url);
    }
    onImagenChange(archivo ?? null);
  };

  const eliminarImagen = () => {
    setVistaPrevia(null);
    // limpiar input visualmente
    const input = document.getElementById("imagen-noticia") as HTMLInputElement;
    if (input) input.value = "";
    // notificar al padre
    onImagenChange(null);
  };

  // limpiar URL creada en memoria
  useEffect(() => {
    return () => {
      if (vistaPrevia) URL.revokeObjectURL(vistaPrevia);
    };
  }, [vistaPrevia]);

  return (
    <div className="flex flex-col gap-6">
      <CampoTexto
        label="Título de la noticia"
        placeholder="Ej. Lanzamiento del nuevo laboratorio UDLAVerso"
        maxLength={150}
        obligatorio
        value={titulo}
        onChange={onTituloChange}
        tooltip="Escribe un título claro y atractivo. Este texto será visible en el listado y encabezado de la noticia."
      />

      <EditorTexto
        label="Contenido de la noticia"
        value={contenido}
        onChange={onContenidoChange}
        obligatorio
        maxLength={3000}
      />
      <p className="text-xs text-gray-500 -mt-3">
        💡 Puedes usar negritas, listas o enlaces para enriquecer el contenido
        de la noticia.
      </p>

      <div className="space-y-3">
        <label
          htmlFor="imagen-noticia"
          className="text-sm font-semibold text-gray-700 mb-1 block items-center gap-1"
        >
          Imagen principal <span className="text-red-500">*</span>
          <span className="text-xs text-gray-500 font-normal">
            (Aparecerá como portada)
          </span>
        </label>

        <input
          id="imagen-noticia"
          type="file"
          accept="image/*"
          onChange={manejarCambioImagen}
          className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-udlaverso-verde focus:border-udlaverso-verde"
        />

        {vistaPrevia && (
          <div className="flex items-center gap-3">
            <VistaPreviaImagen src={vistaPrevia} onRemove={eliminarImagen} />
          </div>
        )}

        <p className="text-xs text-gray-500 mt-1">
          Recomendado: formato JPG o PNG, mínimo 800×400 px.
        </p>
      </div>
    </div>
  );
};

export default FormularioNoticia;

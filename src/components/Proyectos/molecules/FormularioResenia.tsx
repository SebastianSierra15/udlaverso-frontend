import { useState, useEffect } from "react";
import { Estrella, BotonAccion } from "../atoms";

interface Props {
  onSubmit: (comentario: string, estrellas: number) => void;
  valoresIniciales?: {
    comentario: string;
    estrellas: number;
  };
}

export const FormularioResenia: React.FC<Props> = ({
  onSubmit,
  valoresIniciales,
}) => {
  const [comentario, setComentario] = useState("");
  const [estrellas, setEstrellas] = useState(0);

  // Cargar valores iniciales cuando se edita
  useEffect(() => {
    if (valoresIniciales) {
      setComentario(valoresIniciales.comentario);
      setEstrellas(valoresIniciales.estrellas);
    }
  }, [valoresIniciales]);

  const enviar = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comentario.trim() || estrellas === 0) return;
    onSubmit(comentario, estrellas);
  };

  return (
    <form onSubmit={enviar} className="flex flex-col gap-4">
      {/* === Estrellas === */}
      <div className="flex justify-center gap-2">
        {[1, 2, 3, 4, 5].map((n) => (
          <Estrella
            key={n}
            activa={n <= estrellas}
            onClick={() => setEstrellas(n)}
            grande
          />
        ))}
      </div>

      {/* === Comentario === */}
      <textarea
        placeholder="Describe tu experiencia..."
        value={comentario}
        onChange={(e) => setComentario(e.target.value)}
        maxLength={500}
        className="border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-udlaverso-verde outline-none resize-none"
        rows={4}
      />

      {/* === Botón de acción === */}
      <div className="flex justify-end">
        <BotonAccion
          texto={valoresIniciales ? "Guardar cambios" : "Publicar reseña"}
          claseExtra="mt-2"
        />
      </div>
    </form>
  );
};

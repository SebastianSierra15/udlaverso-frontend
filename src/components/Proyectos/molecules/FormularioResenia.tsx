import { useState } from "react";
import Estrella from "../atoms/Estrella";

interface Props {
  onSubmit: (usuario: string, comentario: string, estrellas: number) => void;
}

const FormularioResenia: React.FC<Props> = ({ onSubmit }) => {
  const [usuario, setUsuario] = useState("");
  const [comentario, setComentario] = useState("");
  const [estrellas, setEstrellas] = useState(0);

  const enviar = (e: React.FormEvent) => {
    e.preventDefault();
    if (!usuario || !comentario || estrellas === 0) return;
    onSubmit(usuario, comentario, estrellas);
    setUsuario("");
    setComentario("");
    setEstrellas(0);
  };

  return (
    <form onSubmit={enviar} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Tu nombre"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        className="border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-udlaverso-verde outline-none"
      />

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

      <textarea
        placeholder="Describe tu experiencia (opcional)"
        value={comentario}
        onChange={(e) => setComentario(e.target.value)}
        maxLength={500}
        className="border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-udlaverso-verde outline-none resize-none"
        rows={4}
      />

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-udlaverso-verde text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-udlaverso-verdeOscuro transition"
        >
          Publicar reseña
        </button>
      </div>
    </form>
  );
};

export default FormularioResenia;

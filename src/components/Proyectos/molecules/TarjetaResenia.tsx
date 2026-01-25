import { Estrella, AvatarUsuario } from "../atoms";

interface Props {
  usuario: string;
  comentario: string;
  estrellas: number;
  fecha?: string;
  esPropia?: boolean;
  onEditar?: () => void;
  onEliminar?: () => void;
}

export const TarjetaResenia: React.FC<Props> = ({
  usuario,
  comentario,
  estrellas,
  fecha,
  esPropia,
  onEditar,
  onEliminar,
}) => (
  <div className="p-5 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition bg-white">
    <div className="flex items-center gap-3 mb-2">
      <AvatarUsuario nombre={usuario} />

      <div className="flex flex-col">
        <p className="font-semibold text-udlaverso-negro">{usuario}</p>
        <p className="text-xs text-gray-400">{fecha}</p>
      </div>
    </div>

    <div className="flex gap-1 mb-2">
      {[...Array(5)].map((_, i) => (
        <Estrella key={i} activa={i < estrellas} interactiva={false} />
      ))}
    </div>

    <p className="text-[14px] text-udlaverso-gris leading-relaxed">
      {comentario}
    </p>

    {esPropia && (
      <div className="flex gap-2 mt-2">
        <button
          onClick={onEditar}
          className="text-sm text-udlaverso-verde hover:underline"
        >
          Editar
        </button>
        <button
          onClick={onEliminar}
          className="text-sm text-red-500 hover:underline"
        >
          Eliminar
        </button>
      </div>
    )}
  </div>
);

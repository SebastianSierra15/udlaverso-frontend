import Estrella from "../atoms/Estrella";
import AvatarUsuario from "../atoms/AvatarUsuario";

interface Props {
  usuario: string;
  comentario: string;
  estrellas: number;
  fecha: string;
}

const TarjetaResenia: React.FC<Props> = ({
  usuario,
  comentario,
  estrellas,
  fecha,
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
        <Estrella key={i} activa={i < estrellas} />
      ))}
    </div>

    <p className="text-[14px] text-udlaverso-gris leading-relaxed">
      {comentario}
    </p>
  </div>
);

export default TarjetaResenia;

interface Props {
  texto: string;
  onClick?: () => void;
  color?: "verde" | "rojo" | "gris";
  deshabilitado?: boolean;
  claseExtra?: string;
}

export const BotonAccion: React.FC<Props> = ({
  texto,
  onClick,
  color = "verde",
  deshabilitado = false,
  claseExtra = "",
}) => {
  const colores =
    color === "rojo"
      ? "bg-red-500 hover:bg-red-600 text-white"
      : color === "gris"
        ? "bg-gray-200 hover:bg-gray-300 text-gray-700"
        : "bg-udlaverso-verde hover:bg-udlaverso-verdeOscuro text-white";

  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={deshabilitado}
      className={`${colores} font-semibold px-5 py-2 rounded-full shadow-sm transition disabled:opacity-50 disabled:cursor-not-allowed ${claseExtra}`}
    >
      {texto}
    </button>
  );
};

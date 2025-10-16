import React from "react";

type Variante = "principal" | "secundario" | "peligro";

interface Props {
  texto: string;
  onClick: () => void;
  variante?: Variante;
  icono?: React.ReactNode;
  claseExtra?: string;
}

const coloresPorVariante: Record<Variante, string> = {
  principal:
    "bg-udlaverso-verde text-white hover:bg-udlaverso-verde/90 focus:ring-2 focus:ring-udlaverso-verde/50",
  secundario:
    "bg-gray-100 text-udlaverso-negro hover:bg-gray-200 focus:ring-2 focus:ring-gray-300",
  peligro:
    "bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-400",
};

const BotonAdmin: React.FC<Props> = ({
  texto,
  onClick,
  variante = "principal",
  icono,
  claseExtra = "",
}) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-center gap-2 text-sm font-medium px-4 py-2 rounded-lg shadow-sm transition ${coloresPorVariante[variante]} ${claseExtra}`}
  >
    {icono && <span className="text-base">{icono}</span>}
    {texto}
  </button>
);

export default BotonAdmin;

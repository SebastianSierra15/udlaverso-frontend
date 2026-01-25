import { FaExclamationTriangle } from "react-icons/fa";

interface Props {
  tipo?: "404" | "error";
}

export const IconoError: React.FC<Props> = ({ tipo = "error" }) => {
  const color = tipo === "404" ? "text-udlaverso-verde" : "text-udlaverso-rojo";
  return (
    <div className="flex justify-center mb-6">
      <FaExclamationTriangle className={`text-6xl md:text-7xl ${color}`} />
    </div>
  );
};

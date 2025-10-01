import React from "react";

interface PropiedadesBoton {
  texto: string;
  onClick?: () => void;
  variante?: "principal" | "secundario" | "terciario";
}

const Boton: React.FC<PropiedadesBoton> = ({
  texto,
  onClick,
  variante = "principal",
}) => {
  const base =
    "rounded-full font-semibold transition duration-300 ease-in-out text-sm md:text-base lg:text-lg px-3 md:px-4 lg:px-6 py-2 border border-black";

  const estilos: Record<string, string> = {
    principal: "bg-udlaverso-verde text-white hover:bg-udlaverso-verdeOscuro",
    secundario: "hover:bg-udlaverso-verdeClaro hover:text-white",
    terciario:
      "text-white border-white hover:bg-udlaverso-verdeClaro hover:text-white",
  };

  return (
    <button className={`${base} ${estilos[variante]}`} onClick={onClick}>
      {texto}
    </button>
  );
};

export default Boton;

import React from "react";

interface PropiedadesBoton {
  texto: string;
  onClick?: () => void;
  variante?: "principal" | "secundario" | "alternativo";
  modo?: "default" | "light";
  claseExtra?: string;
}

const Boton: React.FC<PropiedadesBoton> = ({
  texto,
  onClick,
  variante = "principal",
  modo = "default",
  claseExtra = "",
}) => {
  const base =
    "rounded-full font-semibold transition duration-300 ease-in-out text-sm md:text-base lg:text-lg px-3 md:px-4 lg:px-6 py-2 border";

  const estilos: Record<string, Record<string, string>> = {
    principal: {
      default:
        "bg-udlaverso-verde text-white border-black hover:bg-udlaverso-verdeOscuro",
      light:
        "bg-udlaverso-verde text-white border-white hover:bg-udlaverso-verdeOscuro",
    },
    secundario: {
      default:
        "text-udlaverso-verde border-black hover:bg-udlaverso-verde hover:text-white",
      light:
        "text-white border-white hover:bg-white hover:text-udlaverso-verde text-white",
    },
    alternativo: {
      default:
        "text-black bg-white border border-black hover:bg-udlaverso-verde hover:text-white",
      light:
        "text-udlaverso-verde border-2 border-udlaverso-verde hover:bg-udlaverso-verde hover:text-white",
    },
  };

  return (
    <button
      className={`${base} ${estilos[variante][modo]} ${claseExtra}`}
      onClick={onClick}
    >
      {texto}
    </button>
  );
};

export default Boton;

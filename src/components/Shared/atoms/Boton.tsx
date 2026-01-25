import { BiLoaderAlt } from "react-icons/bi";

interface PropiedadesBoton {
  texto: string;
  onClick?: () => void;
  variante?: "principal" | "secundario" | "alternativo";
  modo?: "default" | "light";
  tipo?: "button" | "submit";
  claseExtra?: string;
  deshabilitado?: boolean;
  cargando?: boolean;
}

export const Boton: React.FC<PropiedadesBoton> = ({
  texto,
  onClick,
  variante = "principal",
  modo = "default",
  tipo = "button",
  claseExtra = "",
  deshabilitado = false,
  cargando = false,
}) => {
  const base =
    "flex items-center justify-center rounded-full font-semibold transition duration-300 ease-in-out text-sm md:text-base lg:text-lg px-3 md:px-4 lg:px-6 py-2 border";

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

  const estaDeshabilitado = deshabilitado || cargando;

  return (
    <button
      type={tipo}
      disabled={estaDeshabilitado}
      onClick={!cargando ? onClick : undefined}
      className={`
        ${base}
        ${estilos[variante][modo]}
        ${estaDeshabilitado ? "opacity-50 cursor-not-allowed" : ""}
        ${claseExtra}
      `}
    >
      {cargando ? (
        <BiLoaderAlt className="animate-spin w-5 h-5 text-current" />
      ) : (
        texto
      )}
    </button>
  );
};

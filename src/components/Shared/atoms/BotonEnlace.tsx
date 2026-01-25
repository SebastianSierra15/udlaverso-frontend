import { Boton } from "./Boton";

interface Props {
  texto: string;
  href: string;
  nuevaPestana?: boolean;
  variante?: "principal" | "secundario" | "alternativo";
  modo?: "default" | "light";
}

export const BotonEnlace: React.FC<Props> = ({
  texto,
  href,
  nuevaPestana = true,
  variante = "principal",
  modo = "default",
}) => {
  return (
    <a
      href={href}
      target={nuevaPestana ? "_blank" : "_self"}
      rel={nuevaPestana ? "noopener noreferrer" : undefined}
    >
      <Boton texto={texto} variante={variante} modo={modo} />
    </a>
  );
};

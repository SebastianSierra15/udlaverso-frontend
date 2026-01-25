interface Props {
  children: React.ReactNode;
  variante?: "base" | "enlace";
}

export const Texto: React.FC<Props> = ({ children, variante = "base" }) => {
  const estilos: Record<string, string> = {
    base: "text-udlaverso-gris text-sm md:text-base leading-relaxed",
    enlace:
      "text-udlaverso-verde font-semibold hover:text-udlaverso-verdeClaro transition-colors duration-300",
  };

  return <p className={estilos[variante]}>{children}</p>;
};

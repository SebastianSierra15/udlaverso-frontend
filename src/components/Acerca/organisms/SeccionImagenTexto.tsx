import ImagenAnimada from "../molecules/ImagenAnimada";
import BloqueTexto from "../molecules/BloqueTexto";

interface SeccionImagenTextoProps {
  titulo: string;
  texto: string;
  imgSrc: string;
  imgAlt: string;
  invertir?: boolean;
  gradient?: boolean;
  direccionGradient?: "up" | "down";
}

const SeccionImagenTexto: React.FC<SeccionImagenTextoProps> = ({
  titulo,
  texto,
  imgSrc,
  imgAlt,
  invertir = false,
  gradient = false,
  direccionGradient = "down",
}) => {
  const gradientClass = gradient
    ? direccionGradient === "down"
      ? "bg-gradient-to-b from-white to-udlaverso-verde/10"
      : "bg-gradient-to-t from-white to-udlaverso-verde/10"
    : "";

  return (
    <section className={`py-16 px-6 md:px-20 ${gradientClass}`}>
      <div
        className={`flex flex-col md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto ${
          invertir ? "md:flex-row-reverse md:pl-10" : ""
        }`}
      >
        <ImagenAnimada src={imgSrc} alt={imgAlt} invertir={invertir} />
        <BloqueTexto titulo={titulo} texto={texto} />
      </div>
    </section>
  );
};

export default SeccionImagenTexto;

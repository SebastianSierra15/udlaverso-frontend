import IconoError from "../atoms/IconError";
import MensajeError from "../molecules/MensajeError";

interface Props {
  tipo?: "404" | "error";
  titulo: string;
  descripcion: string;
  botonTexto: string;
  onClick: () => void;
}

const SeccionError: React.FC<Props> = ({
  tipo = "error",
  titulo,
  descripcion,
  botonTexto,
  onClick,
}) => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center bg-white">
      <IconoError tipo={tipo} />
      <MensajeError
        titulo={titulo}
        descripcion={descripcion}
        botonTexto={botonTexto}
        onClick={onClick}
      />
    </section>
  );
};

export default SeccionError;

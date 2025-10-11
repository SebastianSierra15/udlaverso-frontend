import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface Props {
  direccion: "izquierda" | "derecha";
  onClick: () => void;
}

const BotonNavegacion: React.FC<Props> = ({ direccion, onClick }) => {
  const Icono = direccion === "izquierda" ? FaChevronLeft : FaChevronRight;

  return (
    <button
      onClick={onClick}
      className={`absolute ${
        direccion === "izquierda" ? "left-3" : "right-3"
      } top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-udlaverso-verde transition`}
    >
      <Icono />
    </button>
  );
};

export default BotonNavegacion;

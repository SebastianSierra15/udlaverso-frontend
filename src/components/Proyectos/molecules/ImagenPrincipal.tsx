import BotonNavegacion from "../atoms/BotonNavegacion";

interface Props {
  imagen: string;
  onAnterior: () => void;
  onSiguiente: () => void;
  mostrarControles: boolean;
}

const ImagenPrincipal: React.FC<Props> = ({
  imagen,
  onAnterior,
  onSiguiente,
  mostrarControles,
}) => (
  <div className="relative w-full h-72 md:h-96 overflow-hidden rounded-xl shadow-md">
    <img
      src={imagen}
      alt="Vista principal"
      className="w-full h-full object-cover transition-all duration-500 select-none pointer-events-none"
      draggable={false}
    />
    {mostrarControles && (
      <>
        <BotonNavegacion direccion="izquierda" onClick={onAnterior} />
        <BotonNavegacion direccion="derecha" onClick={onSiguiente} />
      </>
    )}
  </div>
);

export default ImagenPrincipal;

import { useState, useEffect } from "react";
import ImagenPrincipal from "../molecules/ImagenPrincipal";
import ListaMiniaturas from "../molecules/ListaMiniaturas";

interface Props {
  imagenes: string[];
}

const GaleriaProyecto: React.FC<Props> = ({ imagenes }) => {
  const [indice, setIndice] = useState(0);

  // Navegación con flechas del teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight")
        setIndice((prev) => (prev + 1) % imagenes.length);
      if (e.key === "ArrowLeft")
        setIndice((prev) => (prev - 1 + imagenes.length) % imagenes.length);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [imagenes.length]);

  return (
    <div className="flex flex-col gap-4 select-none">
      <ImagenPrincipal
        imagen={imagenes[indice]}
        onAnterior={() =>
          setIndice((prev) => (prev - 1 + imagenes.length) % imagenes.length)
        }
        onSiguiente={() => setIndice((prev) => (prev + 1) % imagenes.length)}
        mostrarControles={imagenes.length > 1}
      />

      <ListaMiniaturas
        imagenes={imagenes}
        activa={indice}
        onSeleccionar={setIndice}
      />
    </div>
  );
};

export default GaleriaProyecto;

import React from "react";
import EtiquetaCategoria from "../atoms/EtiquetaCategoria";
import BotonCompartir from "./BotonCompartir";

interface Props {
  categoria: string;
  titulo: string;
}

const CategoriaSocialProyecto: React.FC<Props> = ({ categoria, titulo }) => {
  return (
    <div className="flex justify-between items-center sm:mr-4 lg:mr-8">
      <EtiquetaCategoria categoria={categoria} />

      <BotonCompartir url={window.location.href} titulo={titulo} />
    </div>
  );
};

export default CategoriaSocialProyecto;

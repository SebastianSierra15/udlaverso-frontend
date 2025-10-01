import React from "react";

interface PropiedadesTarjetaProyecto {
  titulo: string;
  imagen: string;
}

const TarjetaProyecto: React.FC<PropiedadesTarjetaProyecto> = ({
  titulo,
  imagen,
}) => {
  return (
    <div className="rounded-xl shadow-md overflow-hidden bg-white transition transform hover:shadow-lg hover:scale-105">
      <img
        src={imagen}
        alt={titulo}
        className="w-full h-40 md:h-48 lg:h-56 object-cover"
      />
      <div className="p-4">
        <h3 className="text-base md:text-lg lg:text-xl font-bold text-udlaverso-verdeOscuro">
          {titulo}
        </h3>
      </div>
    </div>
  );
};

export default TarjetaProyecto;

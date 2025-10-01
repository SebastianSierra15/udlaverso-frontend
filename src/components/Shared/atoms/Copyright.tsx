import React from "react";

const Copyright: React.FC = () => {
  const anio = new Date().getFullYear();

  return (
    <p className="text-xs text-center text-udlaverso-gris p-4 border-t">
      © {anio} UDLAVERSO - Universidad de la Amazonia. Todos los derechos
      reservados.
    </p>
  );
};

export default Copyright;

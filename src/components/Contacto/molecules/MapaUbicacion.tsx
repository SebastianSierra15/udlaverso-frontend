import React from "react";

const MapaUbicacion: React.FC = () => {
  return (
    <div className="w-full h-full rounded-2xl overflow-hidden shadow-md border border-gray-200 min-h-[430px] flex-1">
      <iframe
        title="Mapa Universidad de la Amazonia"
        src="https://www.google.com/maps?q=Universidad+de+la+Amazonia,+Florencia,+Caquetá,+Colombia&hl=es&z=16&output=embed"
        width="100%"
        height="100%"
        loading="lazy"
        className="w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapaUbicacion;

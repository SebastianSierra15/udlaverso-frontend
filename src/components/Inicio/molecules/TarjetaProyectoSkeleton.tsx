export const TarjetaProyectoSkeleton: React.FC = () => {
  return (
    <div className="relative block rounded-xl shadow-md overflow-hidden bg-gray-100 animate-pulse">
      {/* Imagen simulada */}
      <div className="w-full h-40 md:h-48 bg-gray-300" />

      {/* Título simulado */}
      <div className="absolute bottom-2 left-2 right-2">
        <div className="h-6 bg-gray-400/70 rounded w-3/4 mb-1" />
        <div className="h-3 bg-gray-400/50 rounded w-1/2" />
      </div>
    </div>
  );
};

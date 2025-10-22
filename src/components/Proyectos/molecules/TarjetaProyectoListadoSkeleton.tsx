const TarjetaProyectoListadoSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden animate-pulse">
      {/* Imagen simulada */}
      <div className="w-full h-40 md:h-44 bg-gray-300" />

      {/* Contenido */}
      <div className="p-4 space-y-3">
        {/* Título */}
        <div className="h-5 bg-gray-400 rounded w-3/4" />

        {/* Chips de categorías */}
        <div className="flex gap-2 mt-2">
          <div className="h-5 w-16 bg-gray-300 rounded-full" />
          <div className="h-5 w-20 bg-gray-300 rounded-full" />
        </div>

        {/* Descripción corta */}
        <div className="space-y-2 mt-3">
          <div className="h-3 bg-gray-200 rounded w-full" />
          <div className="h-3 bg-gray-200 rounded w-5/6" />
        </div>
      </div>
    </div>
  );
};

export default TarjetaProyectoListadoSkeleton;

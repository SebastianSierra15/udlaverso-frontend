export const TarjetaNoticiaGrandeSkeleton: React.FC = () => {
  return (
    <div className="block bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden animate-pulse">
      {/* Imagen simulada */}
      <div className="w-full h-48 bg-gray-300" />

      {/* Contenido */}
      <div className="p-5 flex flex-col gap-3">
        {/* Fecha */}
        <div className="h-3 bg-gray-300 rounded w-1/3" />

        {/* Título */}
        <div className="h-5 bg-gray-400 rounded w-3/4" />

        {/* Descripción */}
        <div className="space-y-2">
          <div className="h-3 bg-gray-200 rounded w-full" />
          <div className="h-3 bg-gray-200 rounded w-11/12" />
          <div className="h-3 bg-gray-200 rounded w-10/12" />
        </div>
      </div>
    </div>
  );
};

const TarjetaNoticiaSkeleton: React.FC = () => {
  return (
    <div className="flex bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden p-4 animate-pulse">
      {/* Imagen */}
      <div className="w-28 h-28 bg-gray-300 rounded-lg flex-shrink-0" />

      {/* Contenido */}
      <div className="flex flex-col justify-between flex-1 pl-4">
        <div className="space-y-3">
          <div className="h-5 bg-gray-300 rounded w-3/4" />
          <div className="h-3 bg-gray-200 rounded w-full" />
          <div className="h-3 bg-gray-200 rounded w-5/6" />
        </div>

        <div className="h-4 bg-gray-300 rounded w-24 mt-4" />
      </div>
    </div>
  );
};

export default TarjetaNoticiaSkeleton;

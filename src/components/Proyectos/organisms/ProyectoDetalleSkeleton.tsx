import { FaRegEye } from "react-icons/fa6";

export const ProyectoDetalleSkeleton = () => {
  return (
    <>
      {/* Hero del proyecto (imagen + overlay simulada) */}
      <div className="relative h-[45vh] md:h-[55vh] bg-gray-200 animate-pulse">
        <div className="absolute inset-0 bg-gray-300"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <div className="h-10 bg-gray-400 w-2/3 md:w-1/2 rounded mb-4"></div>
          <div className="h-4 bg-gray-400 w-1/2 md:w-1/3 rounded"></div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-10 bg-white rounded-2xl shadow-sm -mt-10 relative z-10 animate-pulse">
        {/* Título y botón */}
        <div className="flex justify-between items-start md:items-center gap-4 mb-4">
          <div className="h-8 bg-gray-200 rounded w-2/3"></div>
          <div className="h-10 bg-gray-200 rounded-lg w-32"></div>
        </div>

        {/* Categoría y compartir */}
        <div className="flex justify-between items-center mb-4">
          <div className="h-6 bg-gray-200 rounded w-24"></div>
          <div className="h-8 bg-gray-200 rounded-full w-10"></div>
        </div>

        {/* Estrellas y visitas */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="w-5 h-5 bg-gray-200 rounded-full"></div>
            ))}
          </div>
          <div className="flex items-center gap-1 text-gray-400 text-sm">
            <FaRegEye size={18} />
            <div className="h-3 w-16 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8 items-start">
          {/* Galería */}
          <div className="space-y-3">
            <div className="w-full h-64 bg-gray-200 rounded-xl"></div>
            <div className="flex gap-2 justify-center">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="w-16 h-16 bg-gray-200 rounded-lg"></div>
              ))}
            </div>
          </div>

          {/* Información */}
          <div className="space-y-5">
            <div className="h-5 bg-gray-200 rounded w-1/3"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-24 bg-gray-200 rounded"></div>
            <div className="h-48 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Reseñas */}
        <div className="mt-12 bg-gray-50 p-8 rounded-2xl border border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <div className="h-6 bg-gray-200 w-1/3 rounded"></div>
            <div className="h-8 bg-gray-200 w-40 rounded"></div>
          </div>

          <div className="space-y-4">
            {Array.from({ length: 2 }).map((_, i) => (
              <div
                key={i}
                className="bg-gray-100 border border-gray-200 p-4 rounded-xl"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div className="h-4 bg-gray-200 w-1/3 rounded"></div>
                </div>
                <div className="h-4 bg-gray-200 w-full rounded mb-2"></div>
                <div className="h-4 bg-gray-200 w-2/3 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

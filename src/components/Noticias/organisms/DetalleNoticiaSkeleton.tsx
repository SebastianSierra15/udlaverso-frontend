import { BotonVolver } from "../atoms";

export const DetalleNoticiaSkeleton: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden animate-pulse">
      {/* Imagen simulada */}
      <div className="w-full h-64 md:h-80 bg-gray-300" />

      {/* Contenido */}
      <div className="p-6 md:p-10 space-y-4">
        {/* Fecha */}
        <div className="h-3 bg-gray-300 rounded w-1/4" />

        {/* Título */}
        <div className="h-8 bg-gray-400 rounded w-3/4 mt-2" />

        {/* Contenido simulado */}
        <div className="space-y-3 mt-6">
          <div className="h-3 bg-gray-200 rounded w-full" />
          <div className="h-3 bg-gray-200 rounded w-11/12" />
          <div className="h-3 bg-gray-200 rounded w-10/12" />
          <div className="h-3 bg-gray-200 rounded w-9/12" />
          <div className="h-3 bg-gray-200 rounded w-full" />
        </div>

        {/* Botón volver */}
        <div className="mt-8">
          <BotonVolver to="/noticias" texto="← Volver a noticias" />
        </div>
      </div>
    </article>
  );
};

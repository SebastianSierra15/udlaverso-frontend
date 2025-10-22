import TarjetaProyectoListadoSkeleton from "../molecules/TarjetaProyectoListadoSkeleton";

const GridProyectosSkeleton: React.FC = () => {
  const placeholders = Array.from({ length: 6 });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {placeholders.map((_, i) => (
        <TarjetaProyectoListadoSkeleton key={i} />
      ))}
    </div>
  );
};

export default GridProyectosSkeleton;

import TarjetaProyectoSkeleton from "../molecules/TarjetaProyectoSkeleton";

const CarruselProyectosSkeleton: React.FC = () => {
  const placeholders = Array.from({ length: 4 });

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex gap-6">
        {placeholders.map((_, i) => (
          <div
            key={i}
            className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 shrink-0 px-2"
          >
            <TarjetaProyectoSkeleton />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarruselProyectosSkeleton;

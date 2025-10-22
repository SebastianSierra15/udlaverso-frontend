import TarjetaProyectoSkeleton from "../molecules/TarjetaProyectoSkeleton";

const CarruselProyectosSkeleton: React.FC = () => {
  const placeholders = Array.from({ length: 4 });

  return (
    <div className="relative w-full">
      <div className="flex gap-6">
        {placeholders.map((_, i) => (
          <div key={i} className="px-2 max-w-96" style={{ flex: "0 0 25%" }}>
            <TarjetaProyectoSkeleton />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarruselProyectosSkeleton;

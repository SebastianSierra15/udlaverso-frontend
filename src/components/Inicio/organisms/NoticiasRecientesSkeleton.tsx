import TarjetaNoticiaSkeleton from "../molecules/TarjetaNoticiaSkeleton";

const NoticiasRecientesSkeleton: React.FC = () => {
  const placeholders = Array.from({ length: 6 });

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {placeholders.map((_, i) => (
          <TarjetaNoticiaSkeleton key={i} />
        ))}
      </div>
    </>
  );
};

export default NoticiasRecientesSkeleton;

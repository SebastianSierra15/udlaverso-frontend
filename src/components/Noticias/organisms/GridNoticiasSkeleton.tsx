import { TarjetaNoticiaGrandeSkeleton } from "../molecules";

export const GridNoticiasSkeleton: React.FC = () => {
  const placeholders = Array.from({ length: 6 });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {placeholders.map((_, i) => (
        <TarjetaNoticiaGrandeSkeleton key={i} />
      ))}
    </div>
  );
};

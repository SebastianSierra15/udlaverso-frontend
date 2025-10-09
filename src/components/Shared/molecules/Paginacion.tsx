import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

interface Props {
  pagina: number;
  totalPaginas: number;
  onChange: (pagina: number) => void;
  ariaLabel?: string;
}

const Paginacion: React.FC<Props> = ({
  pagina,
  totalPaginas,
  onChange,
  ariaLabel = "Paginación",
}) => {
  const rangoVisible = 3; // cantidad de páginas a mostrar alrededor
  const paginas: (number | string)[] = [];

  // Calcula el rango de páginas visibles con puntos suspensivos (...)
  for (let i = 1; i <= totalPaginas; i++) {
    if (
      i === 1 ||
      i === totalPaginas ||
      (i >= pagina - rangoVisible && i <= pagina + rangoVisible)
    ) {
      paginas.push(i);
    } else if (
      i === pagina - rangoVisible - 1 ||
      i === pagina + rangoVisible + 1
    ) {
      paginas.push("...");
    }
  }

  const cambiarPagina = (p: number | string) => {
    if (typeof p === "number" && p !== pagina) onChange(p);
  };

  const prev = () => onChange(Math.max(1, pagina - 1));
  const next = () => onChange(Math.min(totalPaginas, pagina + 1));

  return (
    <nav
      className="flex items-center justify-center gap-2 mt-8 text-sm select-none"
      aria-label={ariaLabel}
    >
      {/* Botón anterior */}
      <button
        onClick={prev}
        disabled={pagina === 1}
        className={`flex items-center gap-2 group px-4 py-2 transition-colors text-udlaverso-verde ${
          pagina === 1 ? "opacity-50" : "hover:text-udlaverso-verdeClaro"
        }`}
      >
        <FaArrowLeft
          className={`w-4 h-4 transform transition-transform duration-300 ease-in-out ${
            pagina === 1 ? "" : "group-hover:-translate-x-1"
          }`}
        />
        <span className={`${pagina === 1 ? "text-gray-400" : "text-black"}`}>
          Anterior
        </span>
      </button>

      {/* Números */}
      {paginas.map((num, index) =>
        num === "..." ? (
          <span key={`dots-${index}`} className="px-2 text-gray-600">
            ...
          </span>
        ) : (
          <button
            key={num}
            onClick={() => cambiarPagina(num)}
            className={`w-8 h-8 flex items-center justify-center rounded-md border text-sm font-medium transition-colors
              ${
                num === pagina
                  ? "bg-udlaverso-verde text-white border-udlaverso-verde"
                  : "border-none hover:border-gray-200 text-gray-700 hover:bg-gray-100"
              }`}
          >
            {num}
          </button>
        )
      )}

      {/* Botón siguiente */}
      <button
        onClick={next}
        disabled={pagina === totalPaginas}
        className={`flex items-center gap-2 group px-4 py-2 transition-colors text-udlaverso-verde ${
          pagina === totalPaginas
            ? "opacity-50"
            : "hover:text-udlaverso-verdeClaro"
        }`}
      >
        <span
          className={`${
            pagina === totalPaginas ? "text-gray-400" : "text-black"
          }`}
        >
          Siguiente
        </span>
        <FaArrowRight
          className={`w-4 h-4 transform transition-transform duration-300 ease-in-out ${
            pagina === totalPaginas ? "" : "group-hover:translate-x-1"
          }`}
        />
      </button>
    </nav>
  );
};

export default Paginacion;

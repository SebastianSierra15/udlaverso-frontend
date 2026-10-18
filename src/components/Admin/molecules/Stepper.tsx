const nombresPasos = [
  "Datos Básicos",
  "Contenido y Herramientas",
  "Imágenes y Multimedia",
  "Revisión",
];

interface Props {
  pasoActual: number;
  total: number;
  onPasoChange?: (nuevoPaso: number) => void;
}

const Stepper: React.FC<Props> = ({ pasoActual, total, onPasoChange }) => {
  return (
    <div className="mx-auto mb-8 grid w-full max-w-2xl grid-cols-4 items-start gap-1 sm:gap-2">
      {Array.from({ length: total }, (_, i) => {
        const numero = i + 1;
        const activo = numero <= pasoActual;
        const esClickeable = numero < pasoActual;

        return (
          <div
            key={i}
            className={`relative flex min-w-0 flex-col items-center ${
              esClickeable ? "cursor-pointer group" : ""
            }`}
            onClick={() => esClickeable && onPasoChange?.(numero)}
            title={esClickeable ? `Ir al paso ${numero}` : ""}
          >
            {i > 0 && (
              <div
                className={`absolute left-[-50%] top-4 -z-10 h-1 w-full ${
                  activo ? "bg-udlaverso-verde" : "bg-gray-300"
                } -z-10`}
              />
            )}

            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full border-2 text-sm font-medium transition ${
                activo
                  ? "bg-udlaverso-verde border-udlaverso-verde text-white"
                  : "border-gray-300 text-gray-400 bg-white"
              } ${esClickeable ? "hover:bg-udlaverso-verdeClaro" : ""}`}
            >
              {numero}
            </div>

            <span
              className={`mt-2 text-center text-[10px] leading-tight sm:text-xs ${
                activo ? "text-udlaverso-verde font-medium" : "text-gray-400"
              } ${esClickeable ? "group-hover:text-udlaverso-verde" : ""}`}
            >
              {nombresPasos[i]}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;

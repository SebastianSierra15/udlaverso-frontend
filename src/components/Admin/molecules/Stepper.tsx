const nombresPasos = [
  "Datos Básicos",
  "Contenido y Herramientas",
  "Imágenes y Multimedia",
  "Revisión",
];

interface Props {
  pasoActual: number;
  total: number;
}

const Stepper: React.FC<Props> = ({ pasoActual, total }) => {
  return (
    <div className="flex justify-between items-center w-full max-w-2xl mx-auto mb-8">
      {Array.from({ length: total }, (_, i) => {
        const numero = i + 1;
        const activo = numero <= pasoActual;
        return (
          <div key={i} className="flex-1 flex flex-col items-center relative">
            {i > 0 && (
              <div
                className={`absolute top-4 left-[-50%] w-full h-1 ${
                  activo ? "bg-udlaverso-verde" : "bg-gray-300"
                } -z-10`}
              />
            )}
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full border-2 text-sm font-medium transition ${
                activo
                  ? "bg-udlaverso-verde border-udlaverso-verde text-white"
                  : "border-gray-300 text-gray-400 bg-white"
              }`}
            >
              {numero}
            </div>
            <span
              className={`text-xs mt-2 ${
                activo ? "text-udlaverso-verde font-medium" : "text-gray-400"
              }`}
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

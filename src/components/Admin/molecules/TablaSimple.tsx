import { SelectorCantidad } from "../atoms";
import { ControlPaginacion } from "./ControlPaginacion";

type Columna<T> = {
  id: keyof T | string;
  titulo: string;
  ancho?: string;
  render?: (fila: T) => React.ReactNode;
};

type Props<T> = {
  columnas: Columna<T>[];
  filas: T[];
  vacio?: string;
  nombreEntidad?: string;
  paginaActual?: number;
  totalPaginas?: number;
  totalRegistros?: number;
  porPagina?: number;
  onCambioPagina?: (nuevaPagina: number) => void;
  onCambioCantidad?: (cantidad: number) => void;
};

export function TablaSimple<T extends Record<string, unknown>>({
  columnas,
  filas,
  vacio = "Sin registros",
  nombreEntidad = "registros",
  paginaActual = 1,
  totalPaginas = 1,
  totalRegistros = 0,
  porPagina = 5,
  onCambioPagina,
  onCambioCantidad,
}: Props<T>) {
  const obtenerValor = (fila: T, id: keyof T | string) => {
    if (typeof id === "string" && !(id in fila)) return null;
    return fila[id as keyof T];
  };

  return (
    <div className="overflow-x-auto border rounded-xl bg-white">
      <div className="flex items-center justify-between px-4 py-2 border-b bg-gray-50 flex-wrap gap-3">
        {onCambioCantidad && (
          <SelectorCantidad
            valor={porPagina}
            onChange={onCambioCantidad}
            nombreEntidad={nombreEntidad}
          />
        )}
      </div>

      <table className="min-w-full text-sm">
        <thead className="bg-gray-50 text-udlaverso-gris">
          <tr>
            {columnas.map((c) => (
              <th
                key={String(c.id)}
                className="text-left font-semibold px-4 py-3"
                style={{ width: c.ancho }}
              >
                {c.titulo}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {filas.length === 0 && (
            <tr>
              <td
                colSpan={columnas.length}
                className="px-4 py-8 text-center text-udlaverso-gris"
              >
                {vacio}
              </td>
            </tr>
          )}

          {filas.map((fila, i) => (
            <tr key={i} className="border-t hover:bg-gray-50">
              {columnas.map((col, j) => (
                <td
                  key={String(col.id)}
                  className={`px-4 py-3 align-middle ${
                    j === 0 ? "font-semibold text-udlaverso-negro" : ""
                  }`}
                >
                  {col.render
                    ? col.render(fila)
                    : (obtenerValor(fila, col.id) as React.ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {onCambioPagina && (
        <ControlPaginacion
          pagina={paginaActual}
          totalPaginas={totalPaginas}
          onCambioPagina={onCambioPagina}
          desde={(paginaActual - 1) * porPagina + 1}
          hasta={Math.min(paginaActual * porPagina, totalRegistros)}
          total={totalRegistros}
          nombreEntidad={nombreEntidad}
        />
      )}
    </div>
  );
}

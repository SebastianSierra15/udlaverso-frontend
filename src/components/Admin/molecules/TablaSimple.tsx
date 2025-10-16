import { useState } from "react";
import SelectorCantidad from "../atoms/SelectorCantidad";
import ControlPaginacion from "./ControlPaginacion";

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
};

function TablaSimple<T extends Record<string, any>>({
  columnas,
  filas,
  vacio = "Sin registros",
  nombreEntidad = "registros",
}: Props<T>) {
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(5);

  const totalPaginas = Math.ceil(filas.length / porPagina);
  const filasPaginadas = filas.slice(
    (pagina - 1) * porPagina,
    pagina * porPagina
  );

  const cambiarPagina = (nuevaPagina: number) => {
    if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas) setPagina(nuevaPagina);
  };

  return (
    <div className="overflow-x-auto border rounded-xl bg-white">
      <div className="flex items-center justify-between px-4 py-2 border-b bg-gray-50 flex-wrap gap-3">
        <SelectorCantidad
          valor={porPagina}
          onChange={(v) => {
            setPorPagina(v);
            setPagina(1);
          }}
          nombreEntidad={nombreEntidad}
        />
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

          {filasPaginadas.map((fila, i) => (
            <tr key={i} className="border-t hover:bg-gray-50">
              {columnas.map((col) => (
                <td key={String(col.id)} className="px-4 py-3 align-middle">
                  {col.render
                    ? col.render(fila)
                    : (fila[col.id] as React.ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <ControlPaginacion
        pagina={pagina}
        totalPaginas={totalPaginas}
        onCambioPagina={cambiarPagina}
        desde={(pagina - 1) * porPagina + 1}
        hasta={Math.min(pagina * porPagina, filas.length)}
        total={filas.length}
        nombreEntidad={nombreEntidad}
      />
    </div>
  );
}

export default TablaSimple;

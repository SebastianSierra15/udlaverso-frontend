import InsigniaEstado from "../atoms/InsigniaEstado";
import EtiquetaMini from "../atoms/EtiquetaMini";

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
};

function TablaSimple<T extends Record<string, any>>({
  columnas,
  filas,
  vacio = "Sin registros",
}: Props<T>) {
  return (
    <div className="overflow-x-auto border rounded-xl bg-white">
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

      <div className="px-4 py-3 bg-gray-50 flex items-center gap-4 border-t">
        <EtiquetaMini>ESTADOS:</EtiquetaMini>
        <div className="flex items-center gap-2">
          <InsigniaEstado estado="activo" />
          <InsigniaEstado estado="borrador" />
          <InsigniaEstado estado="inactivo" />
        </div>
      </div>
    </div>
  );
}

export default TablaSimple;

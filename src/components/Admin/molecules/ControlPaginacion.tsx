import BotonPagina from "../atoms/BotonPagina";

type Props = {
  pagina: number;
  totalPaginas: number;
  onCambioPagina: (nuevaPagina: number) => void;
  desde: number;
  hasta: number;
  total: number;
  nombreEntidad?: string;
};

const ControlPaginacion: React.FC<Props> = ({
  pagina,
  totalPaginas,
  onCambioPagina,
  desde,
  hasta,
  total,
  nombreEntidad = "registros",
}) => (
  <div className="px-4 py-3 bg-gray-50 border-t flex flex-col md:flex-row items-center justify-between gap-3">
    <div className="text-sm text-udlaverso-gris">
      Mostrando{" "}
      <span className="font-medium text-udlaverso-negro">{desde}</span> a{" "}
      <span className="font-medium text-udlaverso-negro">{hasta}</span> de{" "}
      <span className="font-medium text-udlaverso-negro">{total}</span>{" "}
      {nombreEntidad}
    </div>

    <div className="flex items-center gap-2">
      <BotonPagina
        deshabilitado={pagina === 1}
        onClick={() => onCambioPagina(pagina - 1)}
      >
        ‹
      </BotonPagina>

      {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((num) => (
        <BotonPagina
          key={num}
          activo={num === pagina}
          onClick={() => onCambioPagina(num)}
        >
          {num}
        </BotonPagina>
      ))}

      <BotonPagina
        deshabilitado={pagina === totalPaginas || totalPaginas === 0}
        onClick={() => onCambioPagina(pagina + 1)}
      >
        ›
      </BotonPagina>
    </div>
  </div>
);

export default ControlPaginacion;

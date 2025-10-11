interface Props {
  autor: string;
  fecha: string;
}

const BloqueAutorFecha: React.FC<Props> = ({ autor, fecha }) => (
  <div className="text-lg text-udlaverso-gris leading-relaxed">
    <p>
      Creado por{" "}
      <span className="font-semibold text-udlaverso-negro">{autor}</span> en{" "}
      <span className="text-udlaverso-negro">{fecha}</span>.
    </p>
  </div>
);

export default BloqueAutorFecha;

type Props = { children: React.ReactNode };

const EtiquetaMini: React.FC<Props> = ({ children }) => (
  <span className="text-xs uppercase tracking-wide text-udlaverso-gris">
    {children}
  </span>
);

export default EtiquetaMini;

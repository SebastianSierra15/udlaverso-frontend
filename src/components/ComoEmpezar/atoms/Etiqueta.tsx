type Props = { children: React.ReactNode };

const Etiqueta: React.FC<Props> = ({ children }) => (
  <span className="inline-block px-3 py-1 rounded-full bg-udlaverso-verde/10 text-udlaverso-verde text-xs font-semibold">
    {children}
  </span>
);

export default Etiqueta;

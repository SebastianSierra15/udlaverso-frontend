interface Props {
  descripcion: string;
}

const DescripcionLarga: React.FC<Props> = ({ descripcion }) => (
  <section>
    <h2 className="text-xl font-semibold text-udlaverso-negro">
      Sobre este proyecto
    </h2>

    <div
      className="text-udlaverso-gris leading-relaxed prose max-w-none"
      dangerouslySetInnerHTML={{ __html: descripcion.replace(/\n/g, "<br/>") }}
    />
  </section>
);

export default DescripcionLarga;

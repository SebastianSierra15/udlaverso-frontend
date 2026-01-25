interface Props {
  descripcion: string;
}

export const DescripcionLarga: React.FC<Props> = ({ descripcion }) => (
  <section>
    <h2 className="text-xl font-semibold text-udlaverso-negro mb-2">
      Sobre este proyecto
    </h2>

    <div
      className="text-udlaverso-gris leading-relaxed prose max-w-none"
      dangerouslySetInnerHTML={{ __html: descripcion.replace(/\n/g, "<br/>") }}
    />
  </section>
);

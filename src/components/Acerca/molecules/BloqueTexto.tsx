import Parrafo from "../atoms/Parrafo";

interface BloqueTextoProps {
  titulo: string;
  texto: string;
}

const BloqueTexto: React.FC<BloqueTextoProps> = ({ titulo, texto }) => {
  return (
    <div className="w-full md:w-1/2 space-y-10">
      <h2 className="text-3xl md:text-3xl font-extrabold text-udlaverso-negro leading-tight mb-4">
        {titulo}
      </h2>

      <Parrafo
        texto={texto}
        clase="text-udlaverso-gris text-lg leading-relaxed"
      />
    </div>
  );
};

export default BloqueTexto;

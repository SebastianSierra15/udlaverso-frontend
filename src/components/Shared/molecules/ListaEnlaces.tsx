import { TituloSeccion, EnlaceFooter } from "../atoms";

interface Props {
  titulo: string;
  enlaces: { texto: string; ruta: string }[];
}

export const ListaEnlaces: React.FC<Props> = ({ titulo, enlaces }) => {
  return (
    <div>
      <TituloSeccion texto={titulo} />
      <ul className="flex flex-col gap-1">
        {enlaces.map((enlace, i) => (
          <li key={i}>
            <EnlaceFooter texto={enlace.texto} ruta={enlace.ruta} />
          </li>
        ))}
      </ul>
    </div>
  );
};

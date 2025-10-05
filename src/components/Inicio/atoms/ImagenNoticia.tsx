import { Link } from "react-router-dom";

interface Props {
  src: string;
  alt: string;
  ruta?: string;
}

const ImagenNoticia: React.FC<Props> = ({ src, alt, ruta = "/noticias" }) => {
  return (
    <Link to={ruta} className="flex-shrink-0">
      <img
        src={src}
        alt={alt}
        className="w-20 h-20 object-cover rounded-md hover:opacity-80 transition duration-300"
      />
    </Link>
  );
};

export default ImagenNoticia;

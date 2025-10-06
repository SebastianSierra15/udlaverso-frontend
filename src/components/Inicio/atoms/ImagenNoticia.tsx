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
        src={`${src}?auto=format&fit=crop&w=200&q=60`} // versión comprimida
        alt={alt}
        loading="lazy"
        decoding="async"
        width={80}
        height={80}
        className="w-20 h-20 object-cover rounded-md hover:opacity-80 transition duration-300"
      />
    </Link>
  );
};

export default ImagenNoticia;

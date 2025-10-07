interface ImagenProps {
  src: string;
  alt: string;
  clase?: string;
}

const Imagen: React.FC<ImagenProps> = ({ src, alt, clase = "" }) => (
  <img src={src} alt={alt} className={clase} />
);

export default Imagen;

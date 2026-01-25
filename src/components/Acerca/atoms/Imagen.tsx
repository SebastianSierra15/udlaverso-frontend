interface ImagenProps {
  src: string;
  alt: string;
  clase?: string;
}

export const Imagen: React.FC<ImagenProps> = ({ src, alt, clase = "" }) => (
  <img src={src} alt={alt} className={clase} />
);

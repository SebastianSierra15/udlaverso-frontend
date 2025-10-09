interface Props {
  src: string;
  alt: string;
}

const ImagenNoticiaGrande: React.FC<Props> = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="w-full h-48 md:h-60 lg:h-72 object-cover rounded-t-xl"
    loading="lazy"
    decoding="async"
  />
);

export default ImagenNoticiaGrande;

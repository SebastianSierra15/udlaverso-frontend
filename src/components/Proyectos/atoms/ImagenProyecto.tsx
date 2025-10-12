interface Props {
  src: string;
  alt: string;
  visible: boolean;
}

const ImagenProyecto: React.FC<Props> = ({ src, alt, visible }) => (
  <img
    src={src}
    alt={alt}
    loading="lazy"
    className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out ${
      visible ? "opacity-100" : "opacity-0"
    }`}
  />
);

export default ImagenProyecto;

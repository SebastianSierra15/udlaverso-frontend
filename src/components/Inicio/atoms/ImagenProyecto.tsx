interface Props {
  src: string;
  alt: string;
}

export const ImagenProyecto: React.FC<Props> = ({ src, alt }) => {
  return (
    <img src={src} alt={alt} className="w-full h-32 object-cover rounded-lg" />
  );
};

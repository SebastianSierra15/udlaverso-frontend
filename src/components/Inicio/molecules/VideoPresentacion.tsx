interface Props {
  url: string;
  titulo: string;
}

const VideoPresentacion: React.FC<Props> = ({ url, titulo }) => {
  return (
    <div className="relative w-full max-w-md aspect-video rounded-2xl shadow-2xl overflow-hidden border border-white/30 bg-white/5 backdrop-blur-sm">
      <iframe
        className="w-full h-full rounded-2xl"
        src={url}
        title={titulo}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPresentacion;

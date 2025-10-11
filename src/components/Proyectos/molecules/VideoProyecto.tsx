interface Props {
  videoUrl: string;
  titulo: string;
}

const VideoProyecto: React.FC<Props> = ({ videoUrl, titulo }) => (
  <section className="space-y-3">
    <h2 className="text-xl font-semibold text-udlaverso-negro">
      {`Presentación de ${titulo}`}
    </h2>

    <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl border border-white/30">
      <iframe
        src={videoUrl}
        title={titulo}
        className="w-full h-full"
        allowFullScreen
      ></iframe>
    </div>
  </section>
);

export default VideoProyecto;

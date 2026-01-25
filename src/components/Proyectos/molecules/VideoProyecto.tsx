import { formatearYoutubeEmbed } from "../../../utils/formatearYoutubeEmbed ";

interface Props {
  videoUrl: string;
  titulo: string;
}

export const VideoProyecto: React.FC<Props> = ({ videoUrl, titulo }) => {
  const embedUrl = formatearYoutubeEmbed(videoUrl);

  if (!embedUrl) return null;

  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold text-udlaverso-negro">
        {`Presentación de ${titulo}`}
      </h2>

      <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl border border-white/30">
        <iframe
          src={embedUrl}
          title={titulo}
          className="w-full h-full"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

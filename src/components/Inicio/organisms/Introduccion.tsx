import { Descripcion, VideoPresentacion } from "../molecules";

export const Introduccion: React.FC = () => {
  const linkVideo = "https://www.youtube.com/watch?v=mUWpgcWZImk";

  const urlEmbed = linkVideo.replace("watch?v=", "embed/");

  return (
    <section
      id="introduccion"
      className="flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-20 py-20 max-w-7xl mx-auto"
    >
      <Descripcion />

      <div className="w-full md:w-1/2 flex justify-center relative">
        <div className="absolute inset-0 flex justify-center items-center -z-10">
          <div className="w-[90%] h-[90%] rounded-[50%] bg-gradient-to-br from-udlaverso-verde via-udlaverso-verdeClaro to-udlaverso-rojo opacity-20 blur-3xl"></div>
        </div>

        <VideoPresentacion url={urlEmbed} titulo="Video del UDLAVERSO" />
      </div>
    </section>
  );
};

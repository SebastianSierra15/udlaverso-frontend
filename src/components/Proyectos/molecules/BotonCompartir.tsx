import {
  FaFacebook,
  FaSquareXTwitter,
  FaWhatsapp,
  FaLink,
} from "react-icons/fa6";
import BotonRedSocial from "../atoms/BotonRedSocial";

type BotonCompartirProps = {
  url: string;
  titulo: string;
};

const BotonCompartir: React.FC<BotonCompartirProps> = ({ url, titulo }) => {
  const compartir = (red: "facebook" | "twitter" | "whatsapp") => {
    const enlaces: Record<"facebook" | "twitter" | "whatsapp", string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        url
      )}&text=${encodeURIComponent(titulo)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(
        `${titulo} - ${url}`
      )}`,
    };
    window.open(enlaces[red], "_blank", "noopener,noreferrer");
  };

  const copiarEnlace = () => {
    navigator.clipboard.writeText(url);
    alert("Enlace copiado al portapapeles ✅");
  };

  return (
    <div className="flex gap-3 justify-center mt-4">
      <BotonRedSocial
        icon={<FaFacebook size={20} />}
        label="Compartir en Facebook"
        onClick={() => compartir("facebook")}
      />

      <BotonRedSocial
        icon={<FaSquareXTwitter size={20} />}
        label="Compartir en X"
        onClick={() => compartir("twitter")}
      />

      <BotonRedSocial
        icon={<FaWhatsapp size={20} />}
        label="Compartir en WhatsApp"
        onClick={() => compartir("whatsapp")}
      />

      <BotonRedSocial
        icon={<FaLink size={20} />}
        label="Copiar enlace"
        onClick={copiarEnlace}
      />
    </div>
  );
};

export default BotonCompartir;

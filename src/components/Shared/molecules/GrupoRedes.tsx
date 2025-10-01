import React from "react";
import {
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa6";
import IconoRedSocial from "../atoms/IconoRedSocial";

const GrupoRedes: React.FC = () => {
  return (
    <div className="flex gap-4 text-xl">
      <IconoRedSocial icono={<FaXTwitter />} url="https://x.com/uniamazonia" />
      <IconoRedSocial
        icono={<FaInstagram />}
        url="https://www.instagram.com/uniamazonia/"
      />
      <IconoRedSocial
        icono={<FaYoutube />}
        url="https://www.youtube.com/c/uamazonia"
      />
      <IconoRedSocial
        icono={<FaFacebook />}
        url="https://www.facebook.com/uniamazonia.edu.co"
      />
      <IconoRedSocial
        icono={<FaTiktok />}
        url="https://www.tiktok.com/@uniamazonia"
      />
    </div>
  );
};

export default GrupoRedes;

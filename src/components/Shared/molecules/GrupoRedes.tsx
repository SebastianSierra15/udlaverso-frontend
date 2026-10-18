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
      <IconoRedSocial
        icono={<FaXTwitter />}
        url="https://x.com/uniamazonia"
        label="X de la Universidad de la Amazonia"
      />
      <IconoRedSocial
        icono={<FaInstagram />}
        url="https://www.instagram.com/uniamazonia/"
        label="Instagram de la Universidad de la Amazonia"
      />
      <IconoRedSocial
        icono={<FaYoutube />}
        url="https://www.youtube.com/c/uamazonia"
        label="YouTube de la Universidad de la Amazonia"
      />
      <IconoRedSocial
        icono={<FaFacebook />}
        url="https://www.facebook.com/uniamazonia.edu.co"
        label="Facebook de la Universidad de la Amazonia"
      />
      <IconoRedSocial
        icono={<FaTiktok />}
        url="https://www.tiktok.com/@uniamazonia"
        label="TikTok de la Universidad de la Amazonia"
      />
    </div>
  );
};

export default GrupoRedes;

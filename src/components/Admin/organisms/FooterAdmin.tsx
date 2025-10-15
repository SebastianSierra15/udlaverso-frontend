const FooterAdmin: React.FC = () => {
  return (
    <div className="text-center text-xs text-udlaverso-gris">
      <p>
        © {new Date().getFullYear()} UDLAVERSO - Universidad de la Amazonia
        Todos los derechos reservados.
      </p>
      <p className="mt-1">
        <a
          href="/manual-usuario.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-udlaverso-verde hover:underline"
        >
          Manual del administrador (en desarrollo)
        </a>
      </p>
    </div>
  );
};

export default FooterAdmin;

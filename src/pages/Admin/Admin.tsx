import { Helmet } from "react-helmet-async";
import { PanelEstadisticas } from "../../components/Admin";

export const Admin: React.FC = () => (
  <>
    <Helmet>
      <title> Administración | UdlaVerso</title>
    </Helmet>

    <PanelEstadisticas />
  </>
);

import { Helmet } from "react-helmet-async";
import PanelEstadisticas from "../../components/Admin/organisms/PanelEstadisticas";

const Admin: React.FC = () => (
  <>
    <Helmet>
      <title>Estadísticas | UdlaVerso</title>
    </Helmet>

    <PanelEstadisticas />
  </>
);

export default Admin;

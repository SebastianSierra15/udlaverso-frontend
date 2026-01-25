import { Helmet } from "react-helmet-async";
import { SeccionProyectos } from "../../../components/Admin";

export const AdminProyectos: React.FC = () => (
  <>
    <Helmet>
      <title>Proyectos | UdlaVerso</title>
    </Helmet>

    <SeccionProyectos />
  </>
);

import { Helmet } from "react-helmet-async";
import SeccionProyectos from "../../components/Admin/organisms/SeccionProyectos";

const AdminProyectos: React.FC = () => (
  <>
    <Helmet>
      <title>Proyectos | UdlaVerso</title>
    </Helmet>

    <SeccionProyectos />
  </>
);

export default AdminProyectos;

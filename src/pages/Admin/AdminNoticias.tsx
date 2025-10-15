import { Helmet } from "react-helmet-async";
import SeccionNoticias from "../../components/Admin/organisms/SeccionNoticias";

const AdminNoticias: React.FC = () => (
  <>
    <Helmet>
      <title>Noticias | UdlaVerso</title>
    </Helmet>

    <SeccionNoticias />
  </>
);

export default AdminNoticias;

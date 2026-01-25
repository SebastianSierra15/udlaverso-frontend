import { Helmet } from "react-helmet-async";
import { SeccionNoticias } from "../../../components/Admin";

export const AdminNoticias: React.FC = () => (
  <>
    <Helmet>
      <title>Noticias | UdlaVerso</title>
    </Helmet>

    <SeccionNoticias />
  </>
);

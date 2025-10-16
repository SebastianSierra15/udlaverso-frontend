import { Helmet } from "react-helmet-async";
import SeccionComentarios from "../../../components/Admin/organisms/SeccionComentarios";

const AdminComentarios: React.FC = () => (
  <>
    <Helmet>
      <title>Comentarios | UdlaVerso</title>
    </Helmet>

    <SeccionComentarios />
  </>
);

export default AdminComentarios;

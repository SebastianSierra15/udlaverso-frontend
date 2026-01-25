import { Helmet } from "react-helmet-async";
import { SeccionComentarios } from "../../../components/Admin";

export const AdminComentarios: React.FC = () => (
  <>
    <Helmet>
      <title>Comentarios | UdlaVerso</title>
    </Helmet>

    <SeccionComentarios />
  </>
);

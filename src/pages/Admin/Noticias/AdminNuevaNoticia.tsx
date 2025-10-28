import { Helmet } from "react-helmet-async";
import FormNuevaNoticia from "../../../components/Admin/organisms/FormNuevaNoticia";

const AdminNuevaNoticia: React.FC = () => (
  <>
    <Helmet>
      <title>Nueva Noticia | UdlaVerso</title>
    </Helmet>

    <FormNuevaNoticia />
  </>
);

export default AdminNuevaNoticia;

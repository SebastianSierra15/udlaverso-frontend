import { Helmet } from "react-helmet-async";
import { SeccionFAQ } from "../../../components/Admin";

export const AdminFAQ: React.FC = () => (
  <>
    <Helmet>
      <title>Preguntas frecuentes | UdlaVerso</title>
    </Helmet>

    <SeccionFAQ />
  </>
);

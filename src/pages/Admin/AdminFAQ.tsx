import { Helmet } from "react-helmet-async";
import SeccionFAQ from "../../components/Admin/organisms/SeccionFAQ";

const AdminFAQ: React.FC = () => (
  <>
    <Helmet>
      <title>FAQ | UdlaVerso</title>
    </Helmet>

    <SeccionFAQ />
  </>
);

export default AdminFAQ;

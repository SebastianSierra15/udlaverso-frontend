// AGREGAR
import { Helmet } from "react-helmet-async";
import ComoEmpezarTemplate from "../../components/ComoEmpezar/templates/ComoEmpezarTemplate";

const ComoEmpezar: React.FC = () => (
  <>
    <Helmet>
      <title>Como empezar - UdlaVerso</title>
      <meta
        name="description"
        content="Crea tu avatar, instala el visor UA3D y aprende a navegar por las islas del UDLAVERSO."
      />
    </Helmet>

    <ComoEmpezarTemplate />
  </>
);

export default ComoEmpezar;

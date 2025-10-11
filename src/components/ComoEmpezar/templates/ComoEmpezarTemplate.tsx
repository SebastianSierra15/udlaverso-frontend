import HeroComoEmpezar from "../organisms/HeroComoEmpezar";
import AccordionGuia from "../organisms/AcordionGuia";

const ComoEmpezarTemplate: React.FC = () => (
  <>
    <HeroComoEmpezar />

    <section className="max-w-7xl mx-auto px-6 md:px-8 -mt-6 md:-mt-10 relative z-10">
      <AccordionGuia />
    </section>
  </>
);

export default ComoEmpezarTemplate;

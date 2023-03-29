import ServicesInclude from "../../components/ServicesInclude/ServicesInclude";
import Achieved from "../../components/BenefitsAchieved/Achieved";
import ItWorks from "../../components/HowItWorks/ItWorks";
import OfflinePage from "../../components/OfflinePage/OfflinePage";
import OfflineSeo from "../../components/OfflineSeo/OfflineSeo";
import Work from "../../components/WhoLoveOurWorkSection/Work";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
function Services() {
  return (
    <div>
      <OfflinePage />
      <OfflineSeo />
      <ServicesInclude />
      <Achieved />
      <ItWorks />
      <Work />
      <Footer />
    </div>
  );
}

export default Services;

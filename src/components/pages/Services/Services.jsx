import ServicesInclude from "../Services/ServicesInclude/ServicesInclude";
import Achieved from "../Services/BenefitsAchieved/Achieved";
import ItWorks from "../Services/HowItWorks/ItWorks";
import OfflinePage from "../Services/OfflinePage/OfflinePage";
import OfflineSeo from "../Services/OfflineSeo/OfflineSeo";
import Work from "../Services/WhoLoveOurWorkSection/Work";
import Footer from "../../Footer/Footer";
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

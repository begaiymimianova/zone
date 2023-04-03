import ServicesInclude from "../../components/ServicesInclude/ServicesInclude";
import Achieved from "../../components/BenefitsAchieved/Achieved";
import ItWorks from "../../components/HowItWorks/ItWorks";
import OfflinePage from "../../components/OfflinePage/OfflinePage";
import OfflineSeo from "../../components/OfflineSeo/OfflineSeo";
import Footer from "../../components/Footer/Footer";
import SliderTest from "../../components/SliderTest/SliderTest";
import Footer2 from "../../components/Footer2/Footer2";
function Services() {
  return (
    <div>
      <OfflinePage />
      <OfflineSeo />
      <ServicesInclude />
      <Achieved />
      <ItWorks />
      <SliderTest />
      <Footer />
      <Footer2 />
    </div>
  );
}

export default Services;

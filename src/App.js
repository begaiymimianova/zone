import "./App.css";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import HomePage from "./Pages/HomePage/HomePage";
import CaseStudiesList from "./Pages/CaseStudiesList/CaseStudieslist";
import OurCaseStudies from "./Pages/OurCaseStudies/OurCaseStudies";
import Services from "./Pages/Services/Services";
import Team from "./components/Team/Team";
import TeamSlider from "./components/TeamSlider/TeamSlider";
import LatestPosts from "./components/LatestPost/LatestPost";
import MainSlider from "./components/MainSlider/MainSlider";
import MarketingMain from "./components/MarketingMain/MarketMain";
import MarketingBlog from "./Pages/MarketingBlog/MarketingBlog";
import ImgDetail from "./components/ImgDetali/ImgDetali";
import Courses from "./components/Courses/Courses";
import MarketingDetail from "./Pages/MarketingDetail/MarketingDetail";
function App() {
  return (
    <div className="App">
      {/* <CaseStudiesList/> */}
      {/* <OurCaseStudies/> */}
      {/* <Services/> */}
      {/* <AboutPage/> */}
      {/* <ContactPage/> */}
      {/* <HomePage /> */}
      {/* <TeamSlider /> */}
      {/* <LatestPosts /> */}
      <MarketingBlog />
      {/* <ImgDetail /> */}
      {/* <Courses /> */}
      {/* <MarketingDetail /> */}
    </div>
  );
}

export default App;

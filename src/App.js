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
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/casestudieslist" element={<CaseStudiesList/>}/>
        <Route path="/ourcasestudies" element={<OurCaseStudies/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="aboutpage" element={<AboutPage/>} />
        {/* < TeamSlider />
        <LatestPosts /> */}
        <Route path="/marketingblog" element={<MarketingBlog/>}/>
      </Routes>
    </div>
  );
}

export default App;

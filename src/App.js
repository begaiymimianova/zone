
import './App.css';
import AboutPage from './Pages/AboutPage/AboutPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import HomePage from './Pages/HomePage/HomePage';
import "./App.css";
import OfflinePage from "./components/OfflinePage/OfflinePage";
import Pagination from "./components/Pagination/Pagination";
import CaseStudiesList from "./Pages/CaseStudiesList/CaseStudieslist";
import Landing from "./Pages/Landing/Landing";
import OurCaseStudies from "./Pages/OurCaseStudies/OurCaseStudies";
import Services from "./Pages/Services/Services";
function App() {
  return (
    <div className="App">
      {/* <CaseStudiesList/> */}
      {/* <Landing/> */}
      {/* <OurCaseStudies/> */}
      {/* <Services/> */}
      {/* <Pagination /> */}
      <HomePage/>
      {/* <ContactPage/> */}
      {/* <AboutPage/> */}
      {/* <Services />
      <Landing />
      <OurCase />
      <StudiesList /> */}
    </div>
  );
}

export default App;

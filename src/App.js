import "./App.css";
import OfflinePage from "./components/OfflinePage/OfflinePage";
import Pagination from "./components/Pagination/Pagination";
import CaseStudiesList from "./pages/CaseStudiesList/CaseStudieslist";
import Landing from "./pages/Landing/Landing";
import OurCaseStudies from "./pages/OurCaseStudies/OurCaseStudies";
import Services from "./pages/Services/Services";
function App() {
  return (
    <div className="App">
      {/* <CaseStudiesList/> */}
      {/* <Landing/> */}
      <OurCaseStudies/>
      {/* <Services/> */}
      {/* <Pagination /> */}
    </div>
  );
}

export default App;

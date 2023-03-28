
import './App.css';
import AboutPage from './Pages/AboutPage/AboutPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import HomePage from './Pages/HomePage/HomePage';
import "./App.css";
import OurCase from "./components/pages/OurCaseStudies/OurCase";
import Landing from "./components/pages/Landing/Landing";
import Services from "./components/pages/Services/Services";
import StudiesList from "./components/pages/CaseStudiesList/Studieslist";

function App() {
  return (
    <div className="App">
      {/* <HomePage/> */}
      {/* <ContactPage/> */}
      <AboutPage/>
      {/* <Services />
      <Landing />
      <OurCase />
      <StudiesList /> */}
    </div>
  );
}

export default App;

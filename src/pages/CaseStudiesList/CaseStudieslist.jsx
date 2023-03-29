import Footer from "../../components/Footer/Footer";
import Work from "../../components/WhoLoveOurWorkSection/Work";
import StudiesList from "../../components/StudiesList/Studieslist";
import MightLike from "../../components/YouMightLike/MightLike";
import Header from "../../components/Header/Header";

function CaseStudiesList() {
  return (
    <div>
      <Header/>
      <StudiesList />
      <Work />
      <MightLike />
      <Footer />
    </div>
  );
}

export default CaseStudiesList;

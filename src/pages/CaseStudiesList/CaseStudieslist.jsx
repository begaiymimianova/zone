import Footer from "../../components/Footer/Footer";
import StudiesList from "../../components/StudiesList/Studieslist";
import MightLike from "../../components/YouMightLike/MightLike";
import Header from "../../components/Header/Header";
import SliderTest from "../../components/SliderTest/SliderTest";
import Footer2 from "../../components/Footer2/Footer2";
import LatestPosts from "../../components/LatestPost/LatestPost";

function CaseStudiesList() {
  return (
    <div>
      <Header />
      <StudiesList />
      <SliderTest />
      <MightLike />
      <LatestPosts />
      <Footer />
      <Footer2 />
    </div>
  );
}

export default CaseStudiesList;

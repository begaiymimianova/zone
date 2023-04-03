import Courses from "../../components/Courses/Courses";
import Footer from "../../components/Footer/Footer";
import Footer2 from "../../components/Footer2/Footer2";
import Header from "../../components/Header/Header";
import ImgDetail from "../../components/ImgDetali/ImgDetali";
import LatestPosts from "../../components/LatestPost/LatestPost";

function MarketingDetail() {
  return (
    <div>
      <Header />
      <ImgDetail />
      <Courses />
      <LatestPosts />
      <Footer />
      <Footer2 />
    </div>
  );
}
export default MarketingDetail;

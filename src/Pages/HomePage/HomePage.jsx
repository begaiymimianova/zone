import React from "react";
import Client from "../../components/Client/Client";
import Main from "../../components/Main/Main";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import WorkingProcess from "../../components/WorkingProcess/WorkingProcess";
import OurWork from "../../components/OurWork/OurWork";
import Check from "../../components/CheckOurPricingSection/Check";
import Questions from "../../components/FrequentlyQuestionsSection/Questions";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Footer2 from "../../components/Footer2/Footer2";
import SliderTest from "../../components/SliderTest/SliderTest";
import LatestPosts from "../../components/LatestPost/LatestPost";

function HomePage() {
  return (
    <div>
      <Header />
      <Main />
      <Client />
      <About />
      <Services />
      <WorkingProcess />
      <OurWork />
      <Check />
      <Questions />
      <SliderTest />
      <LatestPosts />
      <Footer />
      <Footer2 />
    </div>
  );
}

export default HomePage;

import React from "react";
import css from "./MainSlider.module.css";
import leftArr from "../../assets/MarcetingBlog/leftArr.svg";
import rightArr from "../../assets/MarcetingBlog/rightArr.svg";
import classNames from "classnames";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import imgSlider from "../../assets/MarcetingBlog/imgSlider.svg";
import profile from "../../assets/MarcetingBlog/profile.svg";

function MainSlider() {
  const prevButton = (
    <button className={classNames(css.customPrevButton, css.sliderButton)}>
      <span className="visually-hidden">
        <img className={css.sliderImg} src={leftArr} alt="" />
      </span>
    </button>
  );
  const nextButton = (
    <button className={classNames(css.customNextButton, css.sliderButton)}>
      <span className="visually-hidden">
        <img className={css.sliderImg} src={rightArr} alt="" />
      </span>
    </button>
  );

  return (
    <div className={css.wrapper}>
      <AliceCarousel
        className={css.AliceCarousel}
        buttonsDisabled={true} // Disable default buttons
        renderPrevButton={() => prevButton} // Render custom prev button
        renderNextButton={() => nextButton} // Render custom next button
      >
        <div className={css.wrapper}>
          <div className={css.slider}>
            <div className={css.leftSlider}>
              <img src={imgSlider} alt="" />
            </div>
            <div className={css.rightSlider}>
              <div className={css.rightTopSlider}>
                <p className={css.topText}>February 28, 2018 ∙ 8 min read</p>
                <h1 className={css.question}>
                  How to Maximize <br />
                  Your ROI Through <br />
                  Scientific SEM?
                </h1>
                <p className={css.info}>
                  Amet minim mollit non deserunt ullamco est <br />
                  sit aliqua dolor do amet sint.{" "}
                </p>
              </div>
              <div className={css.rightBottomSlider}>
                <img src={profile} alt="" />
                <p>Jane Cooper</p>
              </div>
            </div>
          </div>
        </div>
        <div className={css.wrapper}>
          <div className={css.slider}>
            <div className={css.leftSlider}>
              <img src={imgSlider} alt="" />
            </div>
            <div className={css.rightSlider}>
              <div className={css.rightTopSlider}>
                <p className={css.topText}>February 28, 2018 ∙ 8 min read</p>
                <h1 className={css.question}>
                  How to Maximize <br />
                  Your ROI Through <br />
                  Scientific SEM?
                </h1>
                <p className={css.info}>
                  Amet minim mollit non deserunt ullamco est <br />
                  sit aliqua dolor do amet sint.{" "}
                </p>
              </div>
              <div className={css.rightBottomSlider}>
                <img src={profile} alt="" />
                <p>Jane Cooper</p>
              </div>
            </div>
          </div>
        </div>
        <div className={css.wrapper}>
          <div className={css.slider}>
            <div className={css.leftSlider}>
              <img src={imgSlider} alt="" />
            </div>
            <div className={css.rightSlider}>
              <div className={css.rightTopSlider}>
                <p className={css.topText}>February 28, 2018 ∙ 8 min read</p>
                <h1 className={css.question}>
                  How to Maximize <br />
                  Your ROI Through <br />
                  Scientific SEM?
                </h1>
                <p className={css.info}>
                  Amet minim mollit non deserunt ullamco est <br />
                  sit aliqua dolor do amet sint.{" "}
                </p>
              </div>
              <div className={css.rightBottomSlider}>
                <img src={profile} alt="" />
                <p>Jane Cooper</p>
              </div>
            </div>
          </div>
        </div>
        <div className={css.wrapper}>
          <div className={css.slider}>
            <div className={css.leftSlider}>
              <img src={imgSlider} alt="" />
            </div>
            <div className={css.rightSlider}>
              <div className={css.rightTopSlider}>
                <p className={css.topText}>February 28, 2018 ∙ 8 min read</p>
                <h1 className={css.question}>
                  How to Maximize <br />
                  Your ROI Through <br />
                  Scientific SEM?
                </h1>
                <p className={css.info}>
                  Amet minim mollit non deserunt ullamco est <br />
                  sit aliqua dolor do amet sint.{" "}
                </p>
              </div>
              <div className={css.rightBottomSlider}>
                <img src={profile} alt="" />
                <p>Jane Cooper</p>
              </div>
            </div>
          </div>
        </div>
        {/* <img src alt="" className="sliderimg" />
        <img src alt="" className="sliderimg" />
        <img src alt="" className="sliderimg" /> */}
      </AliceCarousel>
    </div>
  );
}

export default MainSlider;

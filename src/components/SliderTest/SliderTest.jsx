import React, { Component } from "react";
import Slider from "react-slick";
import profile from "../../accsets/image/profile.png"
import css from './SliderTest.module.css'
import icon from '../../accsets/icon/slidericon.png'
import right from '../../accsets/icon/slideright.png'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "none" }}
      onClick={onClick}
    > <img className={css.arrow}  src={icon} alt="" /> </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "none" }}
      onClick={onClick}
    > <img className={css.arrow} src={right} alt="" /></div>
  );
}

export default class SliderTest extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
        <div className={css.wrapper + " container"}>
      <div>
        <h2 className={css.slideText}>
            <p>Testimonials</p>
            <h1>Who Love Our Work</h1>
        </h2>
        <Slider {...settings}>
          <div>
            <div className={css.slider}>
                <p className={css.txt1}>Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.</p>
                <div className={css.profile}>
                    <img src={profile} alt="profile" />
                    <h4 className={css.title}>Robert Fox</h4>
                    <p className={css.txt2}>Designer</p>
                </div>
            </div>
          </div>
          <div>
            <div className={css.slider}>
            <p className={css.txt1}>Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.</p>
                <div className={css.profile}>
                    <img src={profile} alt="profile" />
                    <h4 className={css.title}>Robert Fox</h4>
                    <p className={css.txt2}>Designer</p>
                </div>
            </div>
          </div>
          <div>
            <div className={css.slider}>
            <p className={css.txt1}>Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.</p>
                <div className={css.profile}>
                    <img src={profile} alt="profile" />
                    <h4 className={css.title}>Robert Fox</h4>
                    <p className={css.txt2}>Designer</p>
                </div>
            </div>
          </div>
          <div>
            <div className={css.slider}>
            <p className={css.txt1}>Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.</p>
                <div className={css.profile}>
                    <img src={profile} alt="profile" />
                    <h4 className={css.title}>Robert Fox</h4>
                    <p className={css.txt2}>Designer</p>
                </div>
            </div>
          </div>
          <div>
            <div className={css.slider}>
            <p className={css.txt1}>Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.</p>
                <div className={css.profile}>
                    <img src={profile} alt="profile" />
                    <h4 className={css.title}>Robert Fox</h4>
                    <p className={css.txt2}>Designer</p>
                </div>
            </div>
          </div>
          <div>
            <div className={css.slider}>
            <p className={css.txt1}>Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.</p>
                <div className={css.profile}>
                    <img src={profile} alt="profile" />
                    <h4 className={css.title}>Robert Fox</h4>
                    <p className={css.txt2}>Designer</p>
                </div>
            </div>
          </div>
        </Slider>
      </div>
      </div>
    );
  }
}
import React, { Component } from "react";
import Slider from "react-slick";
import profile from "../../accsets/image/profile.png"
import css from './SliderTest.module.css'


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    ></div>
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
        <div className="container">
      <div>
        <h2 className={css.slideText}>
            <p>Testimonials</p>
            <h1>Who Love Our Work</h1>
        </h2>
        <Slider {...settings}>
          <div>
            <h3>
                <p className={css.txt1}>Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.</p>
                <div className={css.profile}>
                    <img src={profile} alt="" />
                    <h4 className={css.title}>Robert Fox</h4>
                    <p className={css.txt2}>Designer</p>
                </div>
            </h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
      </div>
    );
  }
}
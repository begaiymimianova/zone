// import Header from "../Header/Header";
import styles from "./StudiesList.module.css";
// import React, { Component } from "react";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import left from "../../assets/OurCase_img/left.svg";
import ratio8 from "../../assets/OurCase_img/Ratio8.png";
import ratio3 from "../../assets/OurCase_img/Ratio3.png";
import ratio from "../../assets/OurCase_img/Ratio.png";
import left_vector from "../../assets/OurCase_img/leftVector.svg";
import right_vector from "../../assets/OurCase_img/rightVector.svg";
import facebook from "../../assets/OurCase_img/facebook.svg";
import insta from "../../assets/OurCase_img/inst.svg";
import in_icon from "../../assets/OurCase_img/in.svg";
import twitter from "../../assets/OurCase_img/twit.svg";

function StudiesList() {
  return (
    <div className={styles.studiesList}>
      <div className={styles.topContent}></div>
      <div className={styles.topContent2}>
        <p>Home</p>
        <img src={left} alt="left" />
        <p>Case Studies</p>
        <img src={left} alt="left" />
        <p className={styles.text}>Bank of America</p>
      </div>
      <div className={styles.middle_con}>
        <div className={styles.rightContent}>
          <div className={styles.leftTop}>
            <h3>summary</h3>
            <h1>Bank of America</h1>
            <p>
              Praesent vestibulum dapibus nibh. Vestibulum fringilla pede sit
              amet augue.{" "}
            </p>
          </div>
          <div className={styles.hr}></div>
          <div className={styles.leftMiddle}>
            <h3>Website</h3>
            <p>example.com</p>
            <h3>Category</h3>
            <p>SEO Optimization</p>
            <h3>Date</h3>
            <p>October 25, 2019</p>
          </div>
          <div className={styles.hr}></div>
          <div className={styles.leftBottom}>
            <h4>Share:</h4>
            <img src={facebook} alt="facebook" />
            <img src={insta} alt="insta" />
            <img src={in_icon} alt="in_icon" />
            <img src={twitter} alt="twitter" />
          </div>
        </div>
        <div className={styles.middleContent}>
          <div className={styles.midlleTop}>
            <h1>Project Brief</h1>
            <p>
              Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum
              libero. Pellentesque auctor neque nec urna. Sed fringilla mauris
              sit amet nibh. Phasellus viverra nulla ut metus varius laoreet.
            </p>
          </div>
          <div className={styles.middle}>
            <h1>How We Work</h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <ul className={styles.ul}>
              <li>Medical Assistant</li>
              <li>Web Designer</li>
              <li>Dog Trainer</li>
              <li>Nursing Assistant</li>
              <li>President of Sales</li>
            </ul>
          </div>
          <div className={styles.middle2}>
            <h1>Results</h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <ul className={styles.ul}>
              <li>Medical Assistant</li>
              <li>Web Designer</li>
              <li>Dog Trainer</li>
              <li>Nursing Assistant</li>
              <li>President of Sales</li>
            </ul>
          </div>
          <div className={styles.bottomContent}>
            <div className={styles.tbl}>
              <h1>Gallery</h1>
              <img src={right_vector} alt="right_vector" />
              <img src={left_vector} alt="left_vector" />
            </div>
            <div className={styles.cards}>
              <div className={styles.card}>
                <img src={ratio8} alt="ratio" />
              </div>
              <div className={styles.card2}>
                <img src={ratio3} alt="ratio" />
              </div>
              <div className={styles.card2}>
                <img src={ratio} alt="ratio" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.leftContent}>
          <div className={styles.leftTop}>
            <h3>summary</h3>
            <h1>Bank of America</h1>
            <p>
              Praesent vestibulum dapibus nibh. Vestibulum fringilla pede sit
              amet augue.{" "}
            </p>
          </div>
          <div className={styles.hr}></div>
          <div className={styles.leftMiddle}>
            <h3>Website</h3>
            <p>example.com</p>
            <h3>Category</h3>
            <p>SEO Optimization</p>
            <h3>Date</h3>
            <p>October 25, 2019</p>
          </div>
          <div className={styles.hr}></div>
          <div className={styles.leftBottom}>
            <h4>Share:</h4>
            <img src={facebook} alt="facebook" />
            <img src={insta} alt="insta" />
            <img src={in_icon} alt="in_icon" />
            <img src={twitter} alt="twitter" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudiesList;

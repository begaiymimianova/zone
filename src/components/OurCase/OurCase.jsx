import ratio1 from "../../assets/OurCase_img/Ratio.png";
import ratio2 from "../../assets/OurCase_img/Ratio2.png";
import ratio3 from "../../assets/OurCase_img/Ratio3.png";
import ratio4 from "../../assets/OurCase_img/Ratio4.png";
import ratio5 from "../../assets/OurCase_img/Ratio5.png";
import ratio6 from "../../assets/OurCase_img/Ratio6.png";
import ratio7 from "../../assets/OurCase_img/Ratio7.png";
import ratio8 from "../../assets/OurCase_img/Ratio8.png";
import ratio9 from "../../assets/OurCase_img/Ratio9.png";
import right from "../../assets/OurCase_img/rightVector.svg";
import left from "../../assets/OurCase_img/leftVector.svg";
// import Pagination from "../Pagination/Pagination";
import styles from "./OurCase.module.css";
import React, { useState} from "react";
import vectorOur from "../../assets/OurCase_img/left.svg";

function OurCase() {
  return (
    <div className={styles.ourCase}>
      <div className={styles.topContent}>
        <h1>Our Case Studies</h1>
        <p>
          Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum
          libero.
        </p>
        <div className={styles.span}>
          <span>All</span>
          <span>Branding</span>
          <span>Digital</span>
          <img className={styles.dt} src={vectorOur} alt="vector" />
          <span className={styles.dalate}>Marketing</span>
          <span className={styles.dalate}>SEO</span>
          <span className={styles.dalate}>All</span>
        </div>
        <div className={styles.hr}></div>
      </div>
      {/* {currentItems.length > 0 ? (
        <div className={styles.pagination}> */}
          {/* {currentItems.map(() => (
            <Pagination />
          ))} */}
      {/* <Pagination /> */}
      <div className={styles.middle}>
        <div className={styles.box}>
          <img src={ratio1} alt="ratio1" />
          <p>Branding</p>
          <h3>Event Doesn't Have To Be Hard. Read These 7 Tips</h3>
        </div>
        <div className={styles.box}>
          <img src={ratio2} alt="ratio2" />
          <p>Branding</p>
          <h3>Event Doesn't Have To Be Hard. Read These 7 Tips</h3>
        </div>
        <div className={styles.box}>
          <img src={ratio3} alt="ratio3" />
          <p>Branding</p>
          <h3>Event Doesn't Have To Be Hard. Read These 7 Tips</h3>
        </div>
      </div>
      <div className={styles.middle}>
        <div className={styles.box}>
          <img src={ratio4} alt="ratio4" />
          <p>Marketing</p>
          <h3>Believing These 7 Myths About Event Keeps You From Growing</h3>
        </div>
        <div className={styles.box}>
          <img src={ratio5} alt="ratio5" />
          <p>SEO</p>
          <h3>Don't Waste Time! 7 Facts Until You Reach Your Event</h3>
        </div>
        <div className={styles.box}>
          <img src={ratio6} alt="ratio6" />
          <p>SEO</p>
          <h3>7 Places To Get Deals On Event</h3>
        </div>
      </div>
      <div className={styles.middle}>
        <div className={styles.box}>
          <img src={ratio7} alt="ratio7" />
          <p>SEO</p>
          <h3>The 7 Most Successful Event Companies In Region</h3>
        </div>
        <div className={styles.box}>
          <img src={ratio8} alt="ratio8" />
          <p>Branding</p>
          <h3>Apply These 7 Secret Techniques To Improve Event</h3>
        </div>
        <div className={styles.box}>
          <img src={ratio9} alt="ratio9" />
          <p>Branding</p>
          <h3>The 7 Biggest Event Mistakes You Can Easily Avoid</h3>
        </div>
      </div>
      <div className={styles.num}>
        <img src={right} alt="right" />
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>...</span>
        <img src={left} alt="left" />
      </div>
    </div>
  );
}

export default OurCase;

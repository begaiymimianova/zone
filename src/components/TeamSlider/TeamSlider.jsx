import React from "react";
import css from "./TeamSlider.module.css";
import strelka from "../../assets/TeamSlider/iconstrl.png";
import strelka2 from "../../assets/TeamSlider/iconstrl2.png";
import person1 from "../../assets/TeamSlider/IMG2.svg";
import person2 from "../../assets/TeamSlider/IMG3.svg";
import person3 from "../../assets/TeamSlider/IMG1.svg";

function TeamSlider() {
  return (
    <div className={css.wrapper + " container"}>
      <div className={css.container}>
        <div className={css.left}>
          <div className={css.left_top}>
            <p className={css.txt}>TEAM</p>
            <h2 className={css.title}>Meet Our Team</h2>
            <p className={css.txt2}>
              Since wire-frame renderings are relatively simple and fast to
              calculate, they are often used in cases
            </p>
          </div>
          <div className={css.left_bottom}>
            <img src={strelka} alt="" />
            <img src={strelka2} alt="" />
          </div>
        </div>
        <div className={css.right}>
          <div className={css.teamcard1}>
            <img src={person1} alt="" />
            <h6 className={css.right__title}>Eleanor Pena</h6>
            <p className={css.right__txt}>UI Designer</p>
          </div>
          <div className={css.teamcard2}>
            <img src={person3} alt="" />
            <h6 className={css.right__title}>Ralph Edwards</h6>
            <p className={css.right__txt}>Project Manager</p>
          </div>
          <div className={css.teamcard3}>
            <img className={css.person2} src={person2} alt="" />
            <h6 className={css.right__title}>Marvin McKinney</h6>
            <p className={css.right__txt}>Full Stack Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamSlider;

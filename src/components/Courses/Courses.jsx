import React from "react";
import css from "./Courses.module.css";
import profile from "../../assets/Details/profilePic.svg";
import share from "../../assets/Details/share.svg";
import heart from "../../assets/Details/heart.svg";
import ballBack from "../../assets/Details/infoImg.svg";
import quotes from "../../assets/Details/quotes.svg";
import cubeBack from "../../assets/Details/cubeBack.svg";
import faceL from "../../assets/Details/faceL.svg";
import instaL from "../../assets/Details/instaL.svg";
import inL from "../../assets/Details/inL.svg";
import twitter from "../../assets/Details/twitter.svg";
import facebook from "../../assets/Details/facebook.svg";
import insta from "../../assets/Details/insta.svg";

function Courses() {
  return (
    <div className={css.wrapper}>
      <div className={css.main}>
        <p>8 minutes read</p>
        <h1 className={css.titleTop}>
          The Complete Digital Marketing <br />
          Course - 12 Courses in 1
        </h1>
        <p>
          Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac
          venenatis <br />
          condimentum, sem libero volutpat nibh, nec pellentesque velit pede
          quis nunc. <br />
          Phasellus viverra nulla ut metus varius laoreet. Praesent egestas
          tristique nibh.
        </p>
      </div>
      <hr />
      <div className={css.profile}>
        <div className={css.leftProfile}>
          <img src={profile} alt="" />
          <div className={css.username}>
            <p>Jane Copper</p>
            <p>February 28, 2018</p>
          </div>
        </div>
        <div className={css.rightProfile}>
          <img src={share} alt="" />
          <img src={heart} alt="" />
        </div>
      </div>
      <hr />
      <div className={css.info}>
        <div className={css.text}>
          <div className={css.topInfo}>
            <div className={css.firstText}>
              <div className={css.upperPart}>
                <p>
                  {" "}
                  <span className={css.P}>P</span>
                </p>
                <p>
                  {" "}
                  ellentesque posuere. Phasellus a est. Suspendisse pulvinar,
                  augue ac venenatis <br />
                  condimentum, sem libero volutpat nibh, nec pellentesque velit
                  pede quis nunc. <br />
                  Phasellus viverra nulla ut metus varius laoreet. Praesent
                  egestas tristique nibh.
                </p>
              </div>
              <p>Donec posuere vulputate arcu. Quisque rutrum.</p>
            </div>
            <div className={css.secondText}>
              Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum
              aliquam leo. Nam <br />
              commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.{" "}
              <br />
              <br />
              Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue
              ac venenatis <br />
              condimentum, sem libero volutpat nibh, nec pellentesque velit pede
              quis nunc. Phasellus <br />
              viverra nulla ut metus varius laoreet. Praesent egestas tristique
              nibh. <br />
              <br />
            </div>
            <img className={css.ballBack} src={ballBack} alt="" />
            <div className={css.thirdText}>
              <h1 className={css.paragraph}>
                Curabitur suscipit suscipit tellus
              </h1>
              <p className={css.sentence}>
                Donec posuere vulputate arcu. Quisque rutrum. Curabitur
                vestibulum aliquam leo. Nam <br />
                commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.
              </p>
            </div>
            <div className={css.fourthText}>
              <h1 className={css.paragraph}>Nullam accumsan lorem in</h1>
              <p className={css.sentence}>
                Donec posuere vulputate arcu. Quisque rutrum. Curabitur
                vestibulum aliquam leo. Nam <br />
                commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.
              </p>
            </div>
            <div className={css.statement}>
              <img className={css.quotes} src={quotes} alt="" />
              <h1 className={css.quoteText}>
                Donec posuere vulputate arcu. Quisque rutrum. Curabitur <br />
                vestibulum aliquam leo.
              </h1>
            </div>
            <img className={css.cubeBack} src={cubeBack} alt="" />
            <p className={css.mainText}>
              Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum
              aliquam leo. Nam <br />
              commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.{" "}
              <br />
              <br />
              Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue
              ac venenatis <br />
              condimentum, sem libero volutpat nibh, nec pellentesque velit pede
              quis nunc. Phasellus <br />
              viverra nulla ut metus varius laoreet. Praesent egestas tristique
              nibh. <br />
              <br />
              Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum
              aliquam leo. Nam <br />
              commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.
            </p>
          </div>
          <div className={css.tags}>
            <div className={css.tag}>
              <p className={css.tagW}>Tags:</p>
              <p className={css.marketing}>Marketing</p>
              <p className={css.development}>Development</p>
            </div>
            <div className={css.tag}>
              <p className={css.HR}>HR & Recruting</p>
              <p className={css.design}>Design</p>
              <p className={css.management}>Management</p>
            </div>
          </div>
          <div className={css.share}>
            <p>Share:</p>
            <div className={css.share2}>
              <div className={css.socialF}>
                <img src={faceL} alt="" />
                <p>Facebook</p>
              </div>
              <div className={css.socialI}>
                <img src={instaL} alt="" />
                <p>Instagram</p>
              </div>
            </div>
            <div className={css.share2}>
              <div className={css.socialIN}>
                <img src={inL} alt="" />
                <p>LinkedIn</p>
              </div>
              <div className={css.socialT}>
                <img src={twitter} alt="" />
                <p>Twitter</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className={css.bottomInfo}>
          <img className={css.bigProfile} src={profile} alt="" />
          <div className={css.profileInfo}>
            <div className={css.topProfileInfo}>
              <div className={css.userInfo}>
                <h1 className={css.name}>Courtney Henry</h1>
                <p className={css.path}>Curator of Marketing Course</p>
              </div>
              <div className={css.accessSocial}>
                <button className={css.btn}>
                  <img src={facebook} alt="" />
                </button>
                <button className={css.btn}>
                  <img src={insta} alt="" />
                </button>
                <button className={css.btn}>
                  <img src={inL} alt="" />
                </button>
                <button className={css.btn}>
                  <img src={twitter} alt="" />
                </button>
              </div>
            </div>
            <p className={css.textInfo}>
              Integer tincidunt. Nullam dictum felis eu pede mollis pretium.
              Maecenas ullamcorper, dui <br />
              et placerat feugiat, eros pede varius nisi, condimentum viverra
              felis nunc et lorem..
            </p>
            <p className={css.memberTime}>Member since Mar 15, 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;

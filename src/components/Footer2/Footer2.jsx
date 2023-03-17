import styles from "./Footer2.module.css";
import logo from "../../assets/Header_img/Logo.svg";
import face from "../../assets/Footer_img/Facebook.svg";
import insta from "../../assets/Footer_img/instagram.svg";
import inIcon from "../../assets/Footer_img/in.svg";
import twitter from "../../assets/Footer_img/twitter.svg";
import email from "../../assets/Footer_img/email.svg";
import location from "../../assets/Footer_img/location_icon.svg";
import btnImg from "../../assets/Footer_img/vector_white.svg";

function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footer_left}>
          <img src={logo} alt="logo" className={styles.logo} />
          <p className={styles.text}>
            The starting point for your next project based on easy-to-customize
            Material-UI © helps you build apps faster and better.
          </p>
          <div className={styles.icons}>
            <img src={face} alt="face" className={styles.icon} />
            <img src={insta} alt="insta" className={styles.icon} />
            <img src={inIcon} alt="inIcon" className={styles.icon} />
            <img src={twitter} alt="twitter" className={styles.icon} />
          </div>
        </div>
        <div className={styles.footer_middle}>
          <div className={styles.middleTop}>
            <img src={email} alt="email" className={styles.middle_image} />
            <p className={styles.middleText}>info@example.com</p>
          </div>
          <div className={styles.middleBottom}>
            <img src={location} alt="location" className={styles.middle_img} />
            <p className={styles.middleText}>655 Schaefer Dale</p>
          </div>
        </div>
        <div className={styles.footer_right}>
          <input
            type="text"
            placeholder="Email address"
            className={styles.input}
          />
          <button className={styles.footerBtn}>
            <img src={btnImg} alt="btnImg" />
          </button>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <p>©2021. All rights reserved</p>
        <div className={styles.bottom_right}>
          <a className={styles.textA}>Help Center</a>
          <a className={styles.textA}>Terms of Service</a>
        </div>
      </div>
    </>
  );
}

export default Footer;

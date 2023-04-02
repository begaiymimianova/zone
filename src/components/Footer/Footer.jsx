import styles from "./Footer.module.css";
import email from "../../assets/Footer/emailWhite.svg";
import location from "../../assets/Footer/locationWhite.svg";
import emailOpen from "../../assets/Footer/emailopen.svg";
import Footer2 from "../Footer2/Footer2";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_top}>
        <div className={styles.right_content}>
          <h1>Get Free SEO Analysis</h1>
          <div className={styles.block}>
            <img src={email} alt="email" />
            <p>Hello@agency.com</p>
          </div>
          <div className={styles.block2}>
            <img src={location} alt="location" />
            <p>508 Bridle Avenue Newnan, GA 30263</p>
          </div>
        </div>
        <div className={styles.left_content}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="text" placeholder="Email" className={styles.input} />
          <input type="text" placeholder="Phone" className={styles.input} />
          <input
            type="text"
            placeholder="Website URL"
            className={styles.input}
          />
          <button className={styles.btn}>Send Request</button>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <div className={styles.right}>
          <img src={emailOpen} alt="emailOpen" />
          <div className={styles.box}>
            <h2>Sign Up For Newsletter </h2>
            <p>Receive 50% discount on first project</p>
          </div>
        </div>
        <div className={styles.left}>
          <input type="text" placeholder="Enter your email" />
          <button className={styles.btn2}>Sign Up</button>
        </div>
      </div>
      {/* <Footer2 /> */}
    </div>
  );
}

export default Footer;

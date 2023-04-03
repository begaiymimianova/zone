import styles from "./OfflinePage.module.css";
import Header from "../HeaderSecond/HeaderSecond";
import email from "../../assets/Services_img/email2.svg";
import website_url from "../../assets/Services_img/website_url.svg";

function OfflinePage() {
  return (
    <>
      <div className={styles.offlinePageTop}>
        <div className={styles.offlinePage}>
          <Header />
          <h1>Offline SEO</h1>
          <p className={styles.text}>
            Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet
            sapien, quis venenatis ante odio sit amet eros.{" "}
          </p>
          <div className={styles.box}>
            <div className={styles.emailBox}>
              <img src={email} alt="email" />
              <p>Email</p>
            </div>
            <div className={styles.websiteBox}>
              <div className={styles.vl}></div>
              <img src={website_url} alt="website_url" />
              <p>Website URL</p>
            </div>
            <button className={styles.btn}>Analyse</button>
          </div>
          <div className={styles.box2}>
            <div className={styles.emailBox}>
              <img src={email} alt="email" />
              <p>Email</p>
            </div>
            <div className={styles.websiteBox}>
              <div className={styles.vl}></div>
              <img src={website_url} alt="website_url" />
              <p>Website URL</p>
            </div>
            <button className={styles.btn}>Analyse</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default OfflinePage;

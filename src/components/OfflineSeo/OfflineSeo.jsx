import styles from "./OfflineSeo.module.css";
import offlineImg from "../../assets/Services_img/Artboard 8.png";
import right from "../../assets/Services_img/right.svg";
function OfflineSeo() {
  return (
  
    <div className={styles.offlineSeo}>
      <div className={styles.right_content}>
        <img src={offlineImg} alt="offlineImg" />
      </div>
      <div className={styles.right_content}>
        <h1>Offline SEO</h1>
        <p>
          Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a,
          suscipit non, turpis. Nunc nonummy metus. Donec elit libero, sodales
          nec
        </p>
        <div className={styles.box}>
          <div className={styles.ul}></div>
          <p>First Class Flights</p>
        </div>
        <div className={styles.box}>
          <div className={styles.ul}></div>
          <p>5 Star Accommodations</p>
        </div>
        <div className={styles.box}>
          <div className={styles.ul}></div>
          <p>Inclusive Packages</p>
        </div>
        <div className={styles.box}>
          <div className={styles.ul}></div>
          <p>Latest Model Vehicles</p>
        </div>
        <button className={styles.btn}>
          Check Our Work
          <img src={right} alt="right" />
        </button>
      </div>
    </div>
  );
}

export default OfflineSeo;

import styles from "./MightLike.module.css";
import vector from "../../../../assets/OurCase_img/vector-orange.svg";
import ratio4 from "../../../../assets/OurCase_img/Ratio4.png";
import ratio5 from "../../../../assets/OurCase_img/Ratio5.png";
import ratio6 from "../../../../assets/OurCase_img/Ratio6.png";
function MightLike() {
  return (
    <div className={styles.mightLike}>
      <div className={styles.contentTop}>
        <h1>You Might Like</h1>
        <p>
          View All
          <img src={vector} alt="vector" />
        </p>
      </div>
      <div className={styles.contentBottom}>
        <div className={styles.box}>
          <img src={ratio4} alt="ratio" />
          <p>Marketing</p>
          <h3>Believing These 7 Myths About Event Keeps You From Growing</h3>
        </div>
        <div className={styles.box}>
          <img src={ratio5} alt="ratio" />
          <p>SEO</p>
          <h3>Don't Waste Time! 7 Facts Until You Reach Your Event</h3>
        </div>
        <div className={styles.box}>
          <img src={ratio6} alt="ratio" />
          <p>SEO</p>
          <h3>7 Places To Get Deals On Event</h3>
        </div>
      </div>
    </div>
  );
}

export default MightLike;

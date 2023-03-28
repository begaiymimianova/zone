import styles from "./Work.module.css";
import left from "../../assets/Services_img/left.svg";
import right from "../../assets/Services_img/right.svg";
import middle from "../../assets/Services_img/img.png";

function Work() {
  return (
    <div className={styles.work}>
      <p>Testimonials</p>
      <h1>Who Love Our Work</h1>
      <div className={styles.middle_content}>
        <img src={left} alt="left" />
        <p className={styles.textBlock}>
          Amazing experience i love it a lot. Thanks to the team that dreams
          come true, great! I appreciate there attitude and approach.
        </p>
        <div className={styles.imgBox}>
          <img src={middle} alt="middle" className={styles.image} />
          <h3>Robert Fox</h3>
          <p>Designer</p>
        </div>
        <img src={right} alt="right" />
      </div>
      <div className={styles.bottom}>
        <div className={styles.ul}></div>
        <div className={styles.ul2}></div>
        <div className={styles.ul}></div>
        <div className={styles.ul}></div>
      </div>
    </div>
  );
}

export default Work;

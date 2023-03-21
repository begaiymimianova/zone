import styles from "./Questions.module.css";
import plus from "../../../../assets/landing_img/plus.svg";
import jpg from "../../../../assets/landing_img/questionImg.svg";

function Questions() {
  return (
    <div className={styles.questions}>
      <div className={styles.content_right}>
        <div className={styles.content_top}>
          <p>FAQS</p>
          <h1>Frequently Asked Questions</h1>
        </div>
        <div className={styles.bottom}>
          <div className={styles.box}>
            <p>Sed augue ipsum, egestas nec, vestibulum et</p>
            <div className={styles.vl}></div>
          </div>
          <p className={styles.text}>
            Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere
            vulputate arcu. Donec mi odio, faucibus at, scelerisque quis,
            convallis in,
          </p>
          <div className={styles.vl2}></div>
          <div className={styles.box}>
            <p>
              Malesuada adipiscing, dui vestibulum suscipit nulla quis orci.
            </p>
            <img src={plus} alt="plus" />
          </div>
          <div className={styles.vl2}></div>
          <div className={styles.box}>
            <p>Ut varius tincidunt libero.</p>
            <img src={plus} alt="plus" />
          </div>
          <div className={styles.vl2}></div>
          <div className={styles.box}>
            <p>In ut quam vitae odio lacinia tincidunt.</p>
            <img src={plus} alt="plus" />
          </div>
          <div className={styles.vl2}></div>
          <div className={styles.box}>
            <p>Fusce vel dui Morbi nec metus.</p>
            <img src={plus} alt="plus" />
          </div>
          <div className={styles.vl2}></div>
        </div>
      </div>
      <img src={jpg} alt="jpg" className={styles.jpg}/>
    </div>
  );
}

export default Questions;

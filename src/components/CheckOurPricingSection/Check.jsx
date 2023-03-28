import styles from "./Check.module.css";
import switchIcon from "../../assets/landing_img/Switch.svg";
import airpl from "../../assets/landing_img/ic_plan_basic03.svg";
import vector from "../../assets/landing_img/Vector.svg";
import starte from "../../assets/landing_img/ic_plan_starte.svg";
import premium from "../../assets/landing_img/ic_plan_premium03.svg";
function Check() {
  return (
    <div className={styles.checkContainer}>
      <div className={styles.checkTop}>
        <div className={styles.topContent}>
          <p>Pricing</p>
          <h1>Check Our Pricing</h1>
          <p>Choose the perfect plan for your needs. </p>
          <p>Always flexible to grow</p>
        </div>
        <div className={styles.col}>
          <span>MONTHLY</span>
          <img src={switchIcon} alt="switch" />
          <span>YEARLY (save 10%)</span>
        </div>
      </div>
      <div className={styles.middleContent}>
        <div className={styles.middle_right}>
          <div className={styles.middle_top}>
            <div className={styles.right}>
              <h2>Basic</h2>
              <h1>
                $29 <span>/mo</span>
              </h1>
            </div>
            <div className={styles.middle_image}>
              <img src={airpl} alt="airpl" />
            </div>
          </div>
          <p>
            Proin viverra, ligula sit amet ultrices semper, ligula arcu
            tristique sapien
          </p>
          <div className={styles.block}>
            <img src={vector} alt="vector" />
            <h3>Auto update mode</h3>
          </div>
          <div className={styles.block}>
            <img src={vector} alt="vector" />
            <h3>Online operator 24/7</h3>
          </div>
          <div className={styles.block}>
            <img src={vector} alt="vector" />
            <h3>International posting</h3>
          </div>
          <button className={styles.btn}>Get Started</button>
        </div>
        <div className={styles.middle}>
          <div className={styles.middle_top}>
            <div className={styles.right}>
              <h2>Standard</h2>
              <h1>
                $59 <span>/mo</span>
              </h1>
            </div>
            <div className={styles.middle_image}>
              <img src={starte} alt="starte" />
            </div>
          </div>
          <p>Maecenas nec odio et ante tincidunt tempus.</p>
          <div className={styles.block}>
            <img src={vector} alt="vector" />
            <h3>Auto update mode</h3>
          </div>
          <div className={styles.block}>
            <img src={vector} alt="vector" />
            <h3>Online operator 24/7</h3>
          </div>
          <div className={styles.block}>
            <img src={vector} alt="vector" />
            <h3>International posting</h3>
          </div>
          <div className={styles.block}>
            <img src={vector} alt="vector" />
            <h3>Unique newsletters</h3>
          </div>
          <button className={styles.btn}>Get Started</button>
        </div>
        <div className={styles.middle_left}>
          <div className={styles.middle_top}>
            <div className={styles.right}>
              <h2>Premium</h2>
              <h1>
                $99 <span>/mo</span>
              </h1>
            </div>
            <div className={styles.middle_image}>
              <img src={premium} alt="premium" />
            </div>
          </div>
          <p>Sed lectus. Sed consequat, leo eget bibendum sodales</p>
          <div className={styles.block}>
            <img src={vector} alt="vector" />
            <h3>Auto update mode</h3>
          </div>
          <div className={styles.block}>
            <img src={vector} alt="vector" />
            <h3>Online operator 24/7</h3>
          </div>
          <div className={styles.block}>
            <img src={vector} alt="vector" />
            <h3>International posting</h3>
          </div>
          <div className={styles.block}>
            <img src={vector} alt="vector" />
            <h3>Unique newsletters</h3>
          </div>
          <div className={styles.block}>
            <img src={vector} alt="vector" />
            <h3>20 Design templates</h3>
          </div>
          <button className={styles.btn}>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Check;

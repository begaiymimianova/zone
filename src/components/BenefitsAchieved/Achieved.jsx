import styles from "./Achieved.module.css";
import services from "../../assets/Services_img/services.png";

function Achieved() {
  return (
    <div className={styles.achieved}>
      <div className={styles.top_content}>
        <h1>Benefits Achieved</h1>
        <p>
          Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a,
          suscipit non, turpis.
        </p>
      </div>
      <div className={styles.bottom_content}>
        <div className={styles.right_content}>
          <div className={styles.top}>
            <div>
              <h1>Online Media Management</h1>
              <p>
                Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec,
                nisi.{" "}
              </p>
            </div>
            <div className={styles.ul}></div>
          </div>
          <div className={styles.middle}>
            <div>
              <h1>Online Media Management</h1>
              <p>Suspendisse enim turpis</p>
            </div>
            <div className={styles.ul2}></div>
          </div>
          <div className={styles.bottom}>
            <div>
              <h1>Online Media Management</h1>
              <p>
                Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec,
                nisi.{" "}
              </p>
            </div>
            <div className={styles.ul3}></div>
          </div>
        </div>
        <div className={styles.middle_content}>
          <img src={services} alt="services" />
        </div>{" "}
        <div className={styles.left_content}>
          <div className={styles.top2}>
            <div className={styles.ul3}></div>
            <div>
              <h1>Online Media Management</h1>
              <p>
                Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec,
                nisi.{" "}
              </p>
            </div>
          </div>
          <div className={styles.middle2}>
            <div className={styles.ul4}></div>
            <div>
              <h1>Online Media Management</h1>
              <p>Suspendisse enim turpis</p>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.ul}></div>
            <div>
              <h1>Online Media Management</h1>
              <p>
                Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec,
                nisi.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achieved;

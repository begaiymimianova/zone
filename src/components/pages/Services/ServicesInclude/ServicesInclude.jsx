import styles from "./ServicesInclude.module.css";
import boxImg from "../../../../assets/Services_img/Vector1.svg";
import boxImg2 from "../../../../assets/Services_img/vector2.svg";
import boxImg3 from "../../../../assets/Services_img/Vector3.svg";
import boxImg4 from "../../../../assets/Services_img/Vector4.svg";
import boxImg5 from "../../../../assets/Services_img/Vector5.svg";
import boxImg6 from "../../../../assets/Services_img/Vector6.svg";

function ServicesInclude() {
  return (
    <div className={styles.servicesInclude}>
      <div className={styles.top_content}>
        <h1>Services Include</h1>
        <p>
          Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a,
          suscipit non, turpis.
        </p>
      </div>
      <div className={styles.tbl}>
        <div className={styles.box}>
          <img src={boxImg} alt="boxImg" />
          <h3>Search Engine Optimization</h3>
          <p>
            Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec,
            nisi.{" "}
          </p>
        </div>
        <div className={styles.box}>
          <img src={boxImg2} alt="boxImg2" />
          <h3>Search Engine Optimization</h3>
          <p>
            Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec,
            nisi.{" "}
          </p>
        </div>
        <div className={styles.box}>
          <img src={boxImg3} alt="boxImg3" />
          <h3>Search Engine Optimization</h3>
          <p>
            Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec,
            nisi.{" "}
          </p>
        </div>
      </div>
      <div className={styles.tbl}>
        <div className={styles.box}>
          <img src={boxImg4} alt="boxImg4" />
          <h3>Online Media Management</h3>
          <p>
            Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec,
            nisi.
          </p>
        </div>
        <div className={styles.box}>
          <img src={boxImg5} alt="boxImg5" />
          <h3>Reporting & Analysis</h3>
          <p>
            Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec,
            nisi.
          </p>
        </div>
        <div className={styles.box}>
          <img src={boxImg6} alt="boxImg6" />
          <h3>Penalty Recovery</h3>
          <p>
            Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec,
            nisi.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServicesInclude;

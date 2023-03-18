import styles from "./HeaderSecond.module.css";
import logoWhite from "../../assets/HeaderSecond_img/LogoWhite.svg";
import search from "../../assets/HeaderSecond_img/searchWhite.svg";
import iconButton from "../../assets/HeaderSecond_img/OverWhite.svg";
import vector_down from "../../assets/HeaderSecond_img/vectorWhite_down.svg";
import ellipse from "../../assets/HeaderSecond_img/Ellipse.svg";
import Container from "../Container/Container";

function HeaderSecond() {
  return (
    <div className={styles.header}>
      <Container />
      <div className={styles.header_left}>
        <img className={styles.logo} src={logoWhite} alt="logo" />
        <a>Home</a>
        <a>Components</a>
        <a>
          <img src={ellipse} alt="ellipse" className={styles.ellipse} />
          Pages
          <img src={vector_down} alt="vector_down" className={styles.image} />
        </a>
        <a>Documentation</a>
      </div>
      <div className={styles.header_right}>
        <img src={search} alt="search" className={styles.image} />
        <img src={iconButton} alt="icon" className={styles.image} />
        <div className={styles.vl}></div>
        <a>Login</a>
        <button>Join Us</button>
      </div>
    </div>
  );
}

export default HeaderSecond;

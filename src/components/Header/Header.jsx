import styles from "./Header.module.css";
import logo from "../../assets/Header_img/Logo.svg";
import search from "../../assets/Header_img/OVERLAY COLOR.svg";
import iconButton from "../../assets/Header_img/iconButton.svg";
import vector_down from "../../assets/Header_img/Vector_down.svg";
import burger from "../../assets/Header_img/burger.svg"

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header_right}>
        <img className={styles.logo} src={logo} alt="logo" />
        <img className={styles.burger} src={burger} alt="burger" />
        <a href="">Home</a>
        <a href="">Components</a>
        <a href="" className={styles.a}>
          Pages
          <img src={vector_down} alt="vector_down" />
        </a>
        <a href="">Documentation</a>
      </div>
      <div className={styles.header_left}>
        <img src={search} alt="search" />
        <img src={iconButton} alt="icon" className={styles.icon} />
        <div className={styles.vl}></div>
        <a href="">Login</a>
        <button>Join Us</button>
      </div>
    </div>
  );
}

export default Header;

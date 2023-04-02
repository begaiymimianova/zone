import styles from "./Header.module.css";
import logo from "../../assets/Header_img/Logo.svg";
import search from "../../assets/Header_img/OVERLAY COLOR.svg";
import iconButton from "../../assets/Header_img/iconButton.svg";
import vector_down from "../../assets/Header_img/Vector_down.svg";

function Header() {
  return (
    <div className="container">
    <div className={styles.header}>
      <div className={styles.header_right}>
        <img className={styles.logo} src={logo} alt="logo" />
        <a>Home</a>
        <a>Components</a>
        <a className={styles.a_hover}>
          Pages
        </a>
        <a>Documentation</a>
      </div>
      <div className={styles.header_left}>
        <img src={search} alt="search" />
        <img src={iconButton} alt="icon" className={styles.icon} />
        <div className={styles.vl}></div>
        <a>Login</a>
        <button>Join Us</button>
      </div>
    </div>
    </div>
  );
}

export default Header;

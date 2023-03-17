import styles from "./Header.module.css";
import logo from "../../assets/Header_img/Logo.svg";
import search from "../../assets/Header_img/OVERLAY COLOR.svg";
import iconButton from "../../assets/Header_img/iconButton.svg";
import vector_down from "../../assets/Header_img/Vector.svg";
import Container from "../Container/Container";

function Header() {
  return (
    <div className={styles.header}>
      <Container />
      <div className={styles.header_left}>
        <img className={styles.logo} src={logo} alt="logo" />
        <a>Home</a>
        <a>Components</a>
        <a>
          Pages
          <img src={vector_down} alt="vector_down" />
        </a>
        <a>Documentation</a>
      </div>
      <div className={styles.header_right}>
        <img src={search} alt="search" />
        <img src={iconButton} alt="icon" className={styles.icon} />
        <div className={styles.vl}></div>
        <a>Login</a>
        <button>Join Us</button>
      </div>
    </div>
  );
}

export default Header;

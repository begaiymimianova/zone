import styles from "./Header.module.css";
import logo from "../../assets/Header_img/Logo.svg";
import search from "../../assets/Header_img/OVERLAY COLOR.svg";
import iconButton from "../../assets/Header_img/iconButton.svg";
import vector_down from "../../assets/Header_img/Vector_down.svg";
import burger from "../../assets/Header_img/burger.svg"
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container">
      <header>
        <div className={styles.left}>
          <img src={logo} alt="" />
          <Link className={styles.home} to="/" >Home</Link>
          <a className={styles.components} href="">Components</a>
          <div className={styles.dropdown}>
            <button className={styles.dropbtn}>Pages</button>
            <div className={styles.pages}>
              <Link to="/">Landing</Link>
              <Link to="/services">Services</Link>
              <Link to="/casestudieslist">Case Studies-List</Link>
              <Link to="/ourcasestudies">Case Studies-Details</Link>
              <Link to="/marketingblog">Blog</Link>
              <a href="">Blog Details</a>
              <Link to="/aboutpage">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
          <a className={styles.documentation} href="">Documentation</a>
        </div>
        <div className={styles.right}>
          <img className={styles.burger} src={burger} alt="" />
          <img className={styles.search} src={search} alt="" />
          <img className={styles.icon} src={iconButton} alt="" />
          <div className={styles.liniya}>
          </div>
          <a className={styles.login} href="">Login</a>
          <button className={styles.join}>Join Us</button>
        </div>
      </header>
      </div>
  );
}

export default Header;

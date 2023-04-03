import styles from "./HeaderSecond.module.css";
import logoWhite from "../../assets/Header_img/LogoWhite.svg";
import search from "../../assets/Header_img/searchWhite.svg";
import iconButton from "../../assets/Header_img/OverWhite.svg";
import vector_down from "../../assets/Header_img/vectorWhite_down.svg";
import ellipse from "../../assets/Header_img/Ellipse.svg";
import burger from "../../assets/Header_img/burger_white.svg";
import { Link } from "react-router-dom";

function HeaderSecond() {
  return (
    <div className="container">
      <div className={styles.header}>
        <div className={styles.left}>
          <img src={logoWhite} alt="" />
          <Link className={styles.home} to="/">
            Home
          </Link>
          <a className={styles.components} href="">
            Components
          </a>
          <div className={styles.dropdown}>
            <button className={styles.dropbtn}>Pages</button>
            <div className={styles.pages}>
              <Link to="/">Landing</Link>
              <Link to="/services">Services</Link>
              <Link to="/casestudieslist">Case Studies-List</Link>
              <Link to="/ourcasestudies">Case Studies-Details</Link>
              <Link to="/marketingblog">Blog</Link>
              <a href="/marketingdetail">Blog Details</a>
              <Link to="/aboutpage">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
          <a className={styles.documentation} href="">
            Documentation
          </a>
        </div>
        <div className={styles.right}>
          <img src={search} alt="search" className={styles.image} />
          <img src={iconButton} alt="icon" className={styles.image} />
          <div className={styles.liniya}></div>
          <a className={styles.login} href="">
            Login
          </a>
          <button className={styles.join}>Join Us</button>
        </div>
      </div>
    </div>
  );
}

export default HeaderSecond;

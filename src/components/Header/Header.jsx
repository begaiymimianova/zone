import styles from "./Header.module.css";
import logo from "../../assets/Header_img/Logo.svg";
import search from "../../assets/Header_img/OVERLAY COLOR.svg";
import iconButton from "../../assets/Header_img/iconButton.svg";
import vector_down from "../../assets/Header_img/Vector_down.svg";

function Header() {
  return (
    <div className="container">
      <header>
        <div className={styles.left}>
          <img src={logo} alt="" />
          <a className={styles.home} href="">Home</a>
          <a className={styles.components} href="">Components</a>
          <div className={styles.dropdown}>
            <button className={styles.dropbtn}>Pages</button>
            <div className={styles.pages}>
              <a href="">Landing</a>
              <a href="">Services</a>
              <a href="">Case Studies-List</a>
              <a href="">Case Studies-Details</a>
              <a href="">Blog</a>
              <a href="">Blog Details</a>
              <a href="">About</a>
              <a href="">Contact</a>
            </div>
          </div>
          <a className={styles.documentation} href="">Documentation</a>
        </div>
        <div className={styles.right}>
          <img className={styles.search} src={search} alt="" />
          <img src={iconButton} alt="" />
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

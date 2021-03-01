import { Link } from "react-scroll";
import { useState } from "react";
import { FaInfinity } from "react-icons/fa";
import styles from "./Navbar.module.scss";

export const Navbar = ({ isDark }) => {
  const [menuOpenState, setMenuOpenState] = useState(false);

  const clickHandler = () => {
    setMenuOpenState(!menuOpenState);
  };

  return (
    <nav className={`${styles.navbar} ${isDark ? styles["navbar--dark"] : ""}`}>
      <div className={styles.burger}>
        <button className={styles.burger__btn} onClick={clickHandler}>
          {" "}
          <FaInfinity className={styles.burger__icon} />
          MENU
        </button>
      </div>
      <div
        className={`${styles.links} ${
          menuOpenState ? styles["links--open"] : ""
        }`}
      >
        <Link
          className={`${styles.link} ${isDark ? styles["link--dark"] : ""}`}
          to="home"
          smooth={true}
        >
          HOME
        </Link>
        <Link
          className={`${styles.link} ${isDark ? styles["link--dark"] : ""}`}
          to="about"
          smooth={true}
        >
          ABOUT ME
        </Link>
        <Link
          className={`${styles.link} ${isDark ? styles["link--dark"] : ""}`}
          to="portfolio"
          smooth={true}
        >
          PORTFOLIO
        </Link>
        <Link
          className={`${styles.link} ${isDark ? styles["link--dark"] : ""}`}
          to="contact"
          smooth={true}
        >
          CONTACT
        </Link>
      </div>
    </nav>
  );
};

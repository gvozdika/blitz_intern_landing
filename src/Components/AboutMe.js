import { Navbar } from "./Navbar";
import { ScrollDown } from "./ScrollDown.js";
import styles from "./AboutMe.module.scss";

export const AboutMe = () => {
  return (

    <div className={styles.aboutMe} id="about">
      
      <Navbar isDark={true} />

      <div className={styles.aboutMe__wrapper}>
        <div className={styles.aboutMe__photo} ></div>
        <div className={styles.aboutMe__inner}>
          <h1 className={styles.aboutMe__title}>ABOUT ME</h1>
          <p className={styles.aboutMe__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <p className={styles.aboutMe__text}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <span className={styles.aboutMe__name}>Jason Wood</span>
        </div>
      </div>

      <ScrollDown
        isDark={true}
        text="KEEP SCROLLING, THERE IS STILL MORE TO COME."
      />
    </div>
  );
};

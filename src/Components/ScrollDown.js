import styles from "./ScrollDown.module.scss";
import { IoIosArrowDown } from "react-icons/io";

export const ScrollDown = ({isDark, text }) => {
  return (
    <div className={`${ styles.wrapper} ${isDark ? styles['wrapper--dark']: ''}`} >
      <p>{text}</p>
      <IoIosArrowDown className={styles.arrow}/>
      <IoIosArrowDown className={styles.arrow}/>
    </div>
  );
};



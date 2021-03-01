import styles from "./Intro.module.scss";
import {Navbar} from "./Navbar"
import {ScrollDown} from "./ScrollDown"

export const Intro = () => {
    return (
    <div className={styles.intro} id="home">
        <Navbar/>
        <ScrollDown text="SCROLL DOWN TO SEE MORE"/>
    </div>);
};
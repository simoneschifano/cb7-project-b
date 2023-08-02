import Link from "next/link";

import styles from "./Menu.module.scss";

const Menu = () => {
  return (
    <>
      <label className={styles.BurgerWrapper}>
        <input type="checkbox" name="Burger" className={styles.Burger} />

        <span className={styles.menu}>
          <span className={styles.hamburger}></span>
        </span>

        <ul className={styles.BurgerUl}>
          <li className={styles.BurgerLi}>
            <Link href="/wiki">Wiki</Link>
          </li>

          <li className={styles.BurgerLi}>
            <Link href={"/about"}>About Us</Link>
          </li>

          <li className={styles.BurgerLi}>
            <Link href={"/astroquiz"}>AstroQuiz</Link>
          </li>

          <li className={styles.BurgerLi}>
            <Link href={"/preview"}>Back to Settings</Link>
          </li>
        </ul>
      </label>
    </>
  );
};

export default Menu;

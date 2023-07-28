import Image from "next/image";

import { useContext } from "react";

import { MainContext } from "@/state";

import AvatarSvg from "@/components/AvatarSvg";

import styles from "./Navbar.module.scss";

import Link from "next/link";

const Navbar = () => {
  const { state, dispatch } = useContext(MainContext);

  return (
    <>
      <div className={styles.top_navbar}>
        <div className={styles.top_nav_ul}>
          <h2>Welcome, {state.username}!</h2>
          <li>
            <Link href="/wiki">Wiki</Link>
          </li>
          <Link href={"/about"}>
            <li>About Us</li>
          </Link>
          <Link href={"/minigame"}>
            <li>Mini-Game</li>
          </Link>
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.wrapper_png}>
          <Image className={styles.navPng} src="/navbar.svg" width={700} height={200} alt="prova" />
          <div className={styles.NavbarDetails}>
            <div className={styles.AvatarHome}>
              <div className={styles.Avatar__Wrapper}>
                <AvatarSvg skinColor={state.skinColor} suitColor={state.suitColor} />
              </div>
            </div>
            <img className={styles.SpacecraftHome} src={`/spacecraft/${state.spacecraft}.png`}></img>
            <div className={styles.wrappertxt}>
              <h5>Distanza Percorsa: </h5>
              <h5>Pianeti trovati:</h5>
            </div>
            <label className={styles.BurgerWrapper}>
              <input type="checkbox" name="Burgher" className={styles.Burger} />
              <span className={styles.menu}>
                <span className={styles.hamburger}></span>
              </span>
              <ul className={styles.BurgerUl}>
                <li className={styles.BurgerLi}>
                  <Link href="/wiki">Wiki</Link>
                </li>{" "}
                <li className={styles.BurgerLi}>
                  <Link href={"/about"}>About Us</Link>
                </li>
                <li className={styles.BurgerLi}>
                  <Link href={"/minigame"}>Mini-Game</Link>
                </li>
                <li className={styles.BurgerLi}>
                  <Link href={"/preview"}>Back to Summary</Link>
                </li>
              </ul>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import Image from "next/image";
import Link from "next/link";

import { useContext } from "react";

import { MainContext } from "@/state";

import AvatarSvg from "@/components/AvatarSvg";

import styles from "./Navbar.module.scss";

const Navbar = ({ distanceValue }) => {
  const { state, dispatch } = useContext(MainContext);

  return (
    <>
      <div className={styles.Navbar}>
        <Image
          className={styles.Navbar__Image}
          src="/navbar.svg"
          width={700}
          height={200}
          alt="navbar"
        />

        <div className={styles.Navbar__Details}>
          <div className={styles.AvatarHome}>
            <div className={styles.Avatar__Wrapper}>
              <AvatarSvg
                skinColor={state.skinColor}
                suitColor={state.suitColor}
              />
            </div>
          </div>

          <Image
            className={styles.SpacecraftHome}
            src={`/spacecraft/${state.spacecraft}.png`}
            alt="Selected spacecraft image"
            width={80}
            height={80}
          />

          <div className={styles.wrappertxt}>
            <h5 className={styles.navbar__currentDistance}>
              Distanza Percorsa: <br /> {distanceValue.toFixed(2) } au{" "}
            </h5>
          </div>

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
                <Link href={"/minigame"}>Mini-Game</Link>
              </li>

              <li className={styles.BurgerLi}>
                <Link href={"/preview"}>Back to Settings</Link>
              </li>
            </ul>
          </label>
        </div>
      </div>
    </>
  );
};

export default Navbar;

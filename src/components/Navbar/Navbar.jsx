import Image from "next/image";

import { useContext } from "react";

import { MainContext } from "@/state";

import AvatarSvg from "@/components/AvatarSvg";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  const { state, dispatch } = useContext(MainContext);

  console.log(state);
  return (
    <>
      <h2>Welcome, {state.username}!</h2>

      <div className={styles.wrapper}>
        {/* Immagine di sfondo */}
        <Image
          className={styles.navPng}
          src="/navbar.png"
          width={700}
          height={200}
          alt="prova"
        />

        <div className={styles.NavbarDetails}>
          <div className={styles.AvatarHome}>
            <AvatarSvg
              skinColor={state.skinColor}
              suitColor={state.suitColor}
            />
          </div>

          <img
            className={styles.SpacecraftHome}
            src={`/spacecraft/${state.spacecraft}.png`}></img>
        </div>
      </div>
    </>
  );
};

export default Navbar;

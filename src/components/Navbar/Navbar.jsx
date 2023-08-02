import Image from "next/image";

import { useContext } from "react";

import { MainContext } from "@/state";

import AvatarSvg from "@/components/AvatarSvg";

import styles from "./Navbar.module.scss";

const Navbar = ({ distanceValue }) => {
  const { state, dispatch } = useContext(MainContext);

  return (
    <>
      <div className={styles.Navbar}>
        <div className={styles.Navbar__BackEffect}>
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
                Travelled distance: <br /> {distanceValue.toFixed(2)} au
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

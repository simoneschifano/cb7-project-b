import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

import { useContext, useEffect, useState } from "react";

import { MainContext } from "@/state";

import AvatarSvg from "@/components/AvatarSvg";

import styles from "@/styles/Preview.module.scss";

const Preview = () => {
  const router = useRouter();

  const { state, dispatch } = useContext(MainContext);
  const [openPopup, setOpenPopup] = useState(false);
  const [confirmBack, setConfirmBack] = useState(false)

  useEffect(() => {
    const usernameFromLocalStorage = localStorage.getItem("username");
    const skinColorFromLocalStorage = localStorage.getItem("skinColor");
    const suitColorFromLocalStorage = localStorage.getItem("suitColor");
    const spacecraftFromLocalStorage = localStorage.getItem("spacecraft");

    if (usernameFromLocalStorage) {
      dispatch({ type: "SET_USERNAME", payload: usernameFromLocalStorage });
    }
    if (skinColorFromLocalStorage) {
      dispatch({ type: "SET_SKIN_COLOR", payload: skinColorFromLocalStorage });
    }

    if (suitColorFromLocalStorage) {
      dispatch({ type: "SET_SUIT_COLOR", payload: suitColorFromLocalStorage });
    }

    if (spacecraftFromLocalStorage) {
      dispatch({ type: "SET_SPACECRAFT", payload: spacecraftFromLocalStorage });
    }
  }, [dispatch]);

  const onHandleNext = (e) => {
    e.preventDefault();

    router.push("/");
  };

  //Cancella i dati nel local storage se si torna indietro
  const onHandleBack = (e) => {
    e.preventDefault();
    // Mostra un alert con conferma
    setOpenPopup(true);
  };

  const onHandlePopupChoiceYes = () => {
    // Resetta i dati nel localStorage
    localStorage.removeItem("username");
    localStorage.removeItem("skinColor");
    localStorage.removeItem("suitColor");
    localStorage.removeItem("spacecraft");
    localStorage.removeItem("hasSeenInstructions");
    router.push(`/login`);
  }

  const onHandlePopupChoiceNo = () => {
    setOpenPopup(false);
  }

  return (
    <>
      <Head>
        <title>Spacemony - Preview </title>
        <meta name="description" content="Cb-7 Final Project gruppo-B" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://img.freepik.com/free-vector/astronaut-holding-flag-space-cartoon-icon-illustration-technology-space-icon-isolated-flat-cartoon-style_138676-3099.jpg?w=2000"
        />
      </Head>

      <main className={styles.Preview__Main}>
        <form onSubmit={onHandleNext} className={styles.Preview}>
          {state.username && (
            <h1 className={styles.Preview__Header}>
              Welcome, {state.username}!
            </h1>
          )}

          {/* usa lo stato dal contesto */}
          <div className={styles.Preview__Container}>
            <p>Selected avatar:</p>
            <div className={styles.Preview__Container__Svg}>
              <AvatarSvg
                skinColor={state.skinColor}
                suitColor={state.suitColor}
              />
            </div>
            {/* usa lo stato dal contesto */}
          </div>

          <span className={styles.Preview__Divider}></span>

          {state.spacecraft && (
            <div className={styles.Preview__Container}>
              <p>Selected spaceship:</p>
              <div className={styles.Preview__Container__Img}>
                <Image
                  className={styles.SpaceCraftImgPreview}
                  src={`/spacecraft/${state.spacecraft}.png`}
                  alt="Selected spacecraft"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          )}

          <p className={styles.Preview__Container__Question}>
            Are you sure to continue with these settings?
          </p>

          <div className={styles.Preview__Buttons}>
            <button
              className={`${styles.Preview__Btn} ${styles.Preview__Btn__Back}`}
              onClick={onHandleBack}>
              <span>Go back</span>
            </button>

            <button
              className={`${styles.Preview__Btn} ${styles.Preview__Btn__Forward}`}
              onClick={onHandleNext}>
              <span>Go on!</span>
            </button>
          </div>
        </form>
        <div className={openPopup ? styles.Container__Popup : styles.Container__Popup__Closed}>
          <div className={openPopup ? styles.Back__Popup : styles.Back__Popup__Closed}>
            <h3>Are you sure?</h3>
            <div className={styles.Container__Choices}>
              <button onClick={onHandlePopupChoiceYes}> <span>Yes</span></button>
              <button onClick={onHandlePopupChoiceNo}> <span>No</span></button>
            </div>
          </div>
        </div>


      </main>
    </>
  );
};

export default Preview;

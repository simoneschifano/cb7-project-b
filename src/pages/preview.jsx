import { useRouter } from "next/router";
import Head from "next/head";

import { useContext ,useEffect } from "react";

import { MainContext } from "@/state";

import AvatarSvg from "@/components/AvatarSvg";

import styles from "@/styles/Preview.module.scss";

const Preview = () => {
  const router = useRouter();
  

  const { state, dispatch } = useContext(MainContext);

  useEffect(() => {
    const usernameFromLocalStorage = localStorage.getItem("username");
    if (usernameFromLocalStorage) {
      dispatch({ type: "SET_USERNAME", payload: usernameFromLocalStorage });
    }
  }, []);

  const onHandleNext = (e) => {
    e.preventDefault();
    router.push("/");
  };

  //Cancella i dati nel local storage se si torna indietro
  const onHandleBack = (e) => {
    e.preventDefault();
    // Resetta i dati nel localStorage
    localStorage.removeItem("username");
    localStorage.removeItem("skinColor");
    localStorage.removeItem("suitColor");
    localStorage.removeItem("spacecraft");
    router.push(`/login`);
  };

  return (
    <>
      <Head>
        <title>Cb-7 Final Project gruppo-B</title>
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
                <img
                  className={styles.SpaceCraftImgPreview}
                  src={`/spacecraft/${state.spacecraft}.png`}
                  alt="Selected spacecraft"
                />
              </div>
            </div>
          )}

          <h3>Are you sure to continue with these settings?</h3>

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
      </main>
    </>
  );
};

export default Preview;

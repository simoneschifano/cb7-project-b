import { useRouter } from "next/router";
import Head from "next/head";

//TODO Da eliminare?
// import { useEffect, useState } from "react";
import { useContext } from "react";

import { MainContext } from "@/state";

import AvatarSvg from "@/components/AvatarSvg";

import styles from "@/styles/Preview.module.scss";

const Preview = () => {
  const router = useRouter();

  const { state, dispatch } = useContext(MainContext);

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

      <main className={styles.Preview}>
        <form onSubmit={onHandleNext} className={styles.PreviewComp}>
          {state.username && <h1 className={styles.Title}>Welcome, {state.username}!</h1>}
          {/* usa lo stato dal contesto */}
          <div className={styles.Preview__Wrapper}>
            <div className={styles.AvatarPreview}>
              <span className={styles.Paragraph}>Selected Avatar</span>
              <AvatarSvg skinColor={state.skinColor} suitColor={state.suitColor} /> {/* usa lo stato dal contesto */}
            </div>
            {state.spacecraft && (
              <div className={styles.SpaceCraftPreview}>
                <span className={styles.SpaceParagraph}>Selected Spaceship:</span>
                <img className={styles.SpaceCraftImgPreview} src={`/spacecraft/${state.spacecraft}.png`} alt="Selected spacecraft" />
              </div>
            )}
          </div>
          <h3>Are you sure to continue with these settings?</h3>
          <div className={styles.NextorBack}>
            <button className={styles.PreviewBtn} onClick={onHandleBack}>
              Torna indietro
            </button>
            <button className={styles.PreviewBtn} onClick={onHandleNext}>
              Continua
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default Preview;

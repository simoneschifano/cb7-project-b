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

  const onHandleBack = (e) => {
    e.preventDefault();
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
          {state.username && <h1>Welcome, {state.username}!</h1>}{" "}
          {/* usa lo stato dal contesto */}
          <div className={styles.AvatarPreview}>
            Avatar selezionato
            <AvatarSvg
              skinColor={state.skinColor}
              suitColor={state.suitColor}
            />{" "}
            {/* usa lo stato dal contesto */}
          </div>
          {state.spacecraft && (
            <div className={styles.SpaceCraftPreview}>
              <span>Navicella selezionata:</span>
              <img
                className={styles.SpaceCraftImgPreview}
                src={`/spacecraft/${state.spacecraft}.png`}
                alt="Selected spacecraft"
              />
            </div>
          )}
          <h3>Sicuro di cominciare con queste impostazioni?</h3>
          <div className={styles.NextorBack}>
            <button onClick={onHandleBack}>Torna indietro</button>
            <button onClick={onHandleNext}>Continua</button>
          </div>
        </form>
      </main>
    </>
  );
};

export default Preview;

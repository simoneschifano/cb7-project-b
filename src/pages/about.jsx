import Image from "next/image";
import Router from "next/router";
import Head from "next/head";

import styles from "../styles/about.module.scss";

export default function About() {
  const returnHome = () => {
    Router.push("/");
  };

  return (
    <>
      <Head>
        <title>Spacemony - About</title>
        <meta name="description" content="Cb-7 Final Project gruppo-B" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://img.freepik.com/free-vector/astronaut-holding-flag-space-cartoon-icon-illustration-technology-space-icon-isolated-flat-cartoon-style_138676-3099.jpg?w=2000"
        />
      </Head>
      <main>
        <div className={styles.Wrapper}>
          <div className={styles.Wrapper__Text}>
            <h1>About Us</h1>
            <h3>Developed with ❤️ by:</h3>
          </div>

          <div className={styles.Wrapper__Devs}>
            <div className={styles.Container__Dev__1}>
              <Image src={"/imgs/skinny.jpeg"} width={250} height={250} alt="Giovanni Geraci" />
              <h3>Giovanni Geraci</h3>
              <p>Front-End Developer</p>
              <div className={styles.Wrapper__Buttons}>
                <button>
                  <a href="https://github.com/skinnyphoenix">Github</a>
                </button>
                <button>
                  <a href="https://www.linkedin.com/in/giovannigeraci00/"> LinkedIn</a>
                </button>
              </div>
            </div>
            <div className={styles.Container__Dev__2}>
              <Image src={"/imgs/salvo.jpeg"} width={250} height={250} alt="Salvo Falcone" />
              <h3>Salvo Falcone</h3>
              <p>Front-End Developer</p>
              <div className={styles.Wrapper__Buttons}>
                <button>
                  <a href="https://github.com/salvofalcone">Github</a>{" "}
                </button>
                <button>
                  <a href="https://www.linkedin.com/in/salvofalcone/"> LinkedIn</a>
                </button>
              </div>
            </div>
            <div className={styles.Container__Dev__3}>
              <Image src={"/imgs/claudio.jpeg"} width={250} height={250} alt="Claudio Ventimiglia" />
              <h3>Claudio Ventimiglia</h3>
              <p>Front-End Developer</p>
              <div className={styles.Wrapper__Buttons}>
                <button>
                  <a href="https://github.com/Miles0908">Github</a>{" "}
                </button>
                <button>
                  <a href="https://www.linkedin.com/in/claudio-ventimiglia-402305273/"> LinkedIn</a>
                </button>
              </div>
            </div>
            <div className={styles.Container__Dev__4}>
              <Image src={"/imgs/gabri.jpeg"} width={250} height={250} alt="Gabriele Salemi" />
              <h3>Gabriele Salemi</h3>
              <p>Front-End Developer</p>
              <div className={styles.Wrapper__Buttons}>
                <button>
                  <a href="https://github.com/GabSalemi">Github</a>
                </button>
                <button>
                  <a href="https://www.linkedin.com/in/gabriele-salemi-450869207/"> LinkedIn</a>
                </button>
              </div>
            </div>
            <div className={styles.Container__Dev__5}>
              <Image src={"/imgs/abdel.jpeg"} width={250} height={250} alt="Abdel Ibnorida" />
              <h3>Abdel Ibnorida</h3>
              <p>Front-End Developer</p>
              <div className={styles.Wrapper__Buttons}>
                <button>
                  <a href="https://github.com/abdel-ibnorida">Github</a>
                </button>
                <button>
                  <a href="https://www.linkedin.com/in/abdel-ibnorida/"> LinkedIn</a>
                </button>
              </div>
            </div>
            <h3>
             { `Questo progetto punta ad avvicinare gli utenti allo spazio, argomento sempre più centrale nella società odierna. Grazie all’utilizzo di
              modelli 3D l’utente avrà la possibilità di creare il proprio avatar e scegliere un’astronave per affrontare un viaggio alla scoperta dei
              pianeti del sistema solare. Ogni pianeta avrà una card con le informazioni relative, così da unire la parte ludica del viaggio con
              quella informativa. La sezione Wiki sarà dedicata alla ricerca di corpi celesti anche esterni al Sistema Solare…l’unico limite è quello
              posto da noi stessi! 🚀 `}
            </h3>

            <p>Designed and Coded with ❤️. Final Project x Edgemony 💎</p>
          </div>
        </div>
      </main>
    </>
  );
}

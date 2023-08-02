import styles from "../styles/about.module.scss";
import Image from "next/image";
import Router from "next/router";

export default function About() {
  const returnHome = () => {
    Router.push("/");
  };

  return (
    <>
      <div className={styles.Close__Button} onClick={returnHome}>
        <Image
          className={styles.Back__Button__Image}
          src={"https://www.svgrepo.com/show/18507/back-button.svg"}
          width={40}
          height={40}
          alt="back_button_image"
        />
      </div>
      <div className={styles.Wrapper}>
        <div className={styles.Wrapper__Text}>
          <h1>About Us</h1>
          <h3>Developed with ❤️ by:</h3>
        </div>
        <div className={styles.Wrapper__Devs}>
          <div className={styles.Container__Dev__1}>
            <Image
              src="https://avatars.githubusercontent.com/u/122461896?v=4"
              width={250}
              height={250}
              alt="Giovanni Geraci"
            />
            <h3>Giovanni Geraci</h3>
            <p>Front-End Developer</p>
            <div className={styles.Wrapper__Buttons}>
              <button>
                <a href="https://github.com/skinnyphoenix">Github</a>{" "}
              </button>
              <button>
                <a href="https://www.linkedin.com/in/giovannigeraci00/">
                  LinkedIn
                </a>
              </button>
            </div>
          </div>

          <div className={styles.Container__Dev__2}>
            <Image
              src="https://avatars.githubusercontent.com/u/70477447?v=4"
              width={250}
              height={250}
              alt="Salvo Falcone"
            />
            <h3>Salvo Falcone</h3>
            <p>Front-End Developer</p>
            <div className={styles.Wrapper__Buttons}>
              <button>
                <a href="https://github.com/salvofalcone">Github</a>{" "}
              </button>
              <button>
                <a href="https://www.linkedin.com/in/salvofalcone/">LinkedIn</a>
              </button>
            </div>
          </div>

          <div className={styles.Container__Dev__3}>
            <Image
              src="https://avatars.githubusercontent.com/u/96233085?v=4"
              width={250}
              height={250}
              alt="Claudio Ventimiglia"
            />
            <h3>Claudio Ventimiglia</h3>
            <p>Front-End Developer</p>
            <div className={styles.Wrapper__Buttons}>
              <button>
                <a href="https://github.com/Miles0908">Github</a>{" "}
              </button>
              <button>
                <a href="https://www.linkedin.com/in/claudio-ventimiglia-402305273/">
                  LinkedIn
                </a>
              </button>
            </div>
          </div>

          <div className={styles.Container__Dev__4}>
            <Image
              src="https://media.licdn.com/dms/image/C4E35AQH-uSi-DAefhw/profile-framedphoto-shrink_800_800/0/1618839058346?e=1691229600&v=beta&t=A1-xQCk3QmU_hwdooKSc6RTIVHr8iXE2I52r_MDndfk"
              width={250}
              height={250}
              alt="Gabriele Salemi"
            />
            <h3>Gabriele Salemi</h3>
            <p>Front-End Developer</p>
            <div className={styles.Wrapper__Buttons}>
              <button>
                <a href="https://github.com/GabSalemi">Github</a>{" "}
              </button>
              <button>
                <a href="https://www.linkedin.com/in/gabriele-salemi-450869207/">
                  LinkedIn
                </a>
              </button>
            </div>
          </div>

          <div className={styles.Container__Dev__5}>
            <Image
              src="https://media.licdn.com/dms/image/D4D03AQES8Ysrhi1shg/profile-displayphoto-shrink_800_800/0/1689799572864?e=1695859200&v=beta&t=bMSpe_VSEQPrLKviIw2muBnrSiMK0YlGpVUf2w5l5dA"
              width={250}
              height={250}
              alt="Abdel Ibnorida"
            />
            <h3>Abdel Ibnorida</h3>
            <p>Front-End Developer</p>
            <div className={styles.Wrapper__Buttons}>
              <button>
                <a href="https://github.com/abdel-ibnorida">Github</a>{" "}
              </button>
              <button>
                <a href="https://www.linkedin.com/in/abdel-ibnorida/">
                  LinkedIn
                </a>
              </button>
            </div>
          </div>

          <h3 className={styles.paragraph}>
            Questo progetto punta ad avvicinare gli utenti allo spazio,
            argomento sempre più centrale nella società odierna. Grazie
            all’utilizzo di modelli 3D l’utente avrà la possibilità di creare il
            proprio avatar e scegliere un’astronave per affrontare un viaggio
            alla scoperta dei pianeti del sistema solare. Ogni pianeta avrà una
            card con le informazioni relative, così da unire la parte ludica del
            viaggio con quella informativa. La sezione Wiki sarà dedicata alla
            ricerca di corpi celesti anche esterni al Sistema Solare…l’unico
            limite è quello posto da noi stessi! 🚀
          </h3>

          <p className={styles.paragraph}>
            Designed and Coded with ❤️. Final Project x Edgemony 💎
          </p>
        </div>
      </div>
    </>
  );
}

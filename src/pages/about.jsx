import styles from "../styles/about.module.scss";

export default function About() {
  return (
    <>
      <div className={styles.wrapperText}>
        <h1>About Us</h1>
        <h3>Developed with ❤️ by:</h3>
      </div>
      <div className={styles.wrapper_devs}>
        <div className={styles.container_dev_1}>
          <img src="https://picsum.photos/200/300" alt="Giovanni Geraci" />
          <h3>Giovanni Geraci</h3>
          <p>Front-End Developer</p>
          <button>
            {" "}
            <a href="https://github.com/skinnyphoenix">Github</a>{" "}
          </button>
          <button>
            {" "}
            <a href="https://www.linkedin.com/in/giovannigeraci00/"> LinkedIn</a>
          </button>
        </div>
        <div className={styles.container_dev_2}>
          <img src="https://picsum.photos/200/300" alt="Salvo Falcone" />
          <h3>Salvo Falcone</h3>
          <p>Front-End Developer</p>
          <button>
            {" "}
            <a href="https://github.com/salvofalcone">Github</a>{" "}
          </button>
          <button>
            {" "}
            <a href="https://www.linkedin.com/in/salvofalcone/"> LinkedIn</a>
          </button>
        </div>
        <div className={styles.container_dev_3}>
          <img src="https://picsum.photos/200/300" alt="Claudio Ventimiglia" />
          <h3>Claudio Ventimiglia</h3>
          <p>Front-End Developer</p>
          <button>
            {" "}
            <a href="https://github.com/Miles0908">Github</a>{" "}
          </button>
          <button>
            {" "}
            <a href="https://www.linkedin.com/in/claudio-ventimiglia-402305273/"> LinkedIn</a>
          </button>
        </div>
        <div className={styles.container_dev_4}>
          <img src="https://picsum.photos/200/300" alt="Gabriele Salemi" />
          <h3>Gabriele Salemi</h3>
          <p>Front-End Developer</p>
          <button>
            {" "}
            <a href="https://github.com/GabSalemi">Github</a>{" "}
          </button>
          <button>
            {" "}
            <a href="https://www.linkedin.com/in/gabriele-salemi-450869207/"> LinkedIn</a>
          </button>
        </div>
        <div className={styles.container_dev_5}>
          <img src="https://picsum.photos/200/300" alt="Abdel Ibnorida" />
          <h3>Abdel Ibnorida</h3>
          <p>Front-End Developer</p>
          <button>
            {" "}
            <a href="https://github.com/abdel-ibnorida">Github</a>{" "}
          </button>
          <button>
            {" "}
            <a href="https://www.linkedin.com/in/abdel-ibnorida/"> LinkedIn</a>
          </button>
        </div>
      </div>
    </>
  );
}

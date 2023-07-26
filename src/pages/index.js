import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
import AvatarSvg from "@/components/AvatarSvg";
import { MainContext } from "@/state";
import { useContext } from "react";

const useMousePosition = () => {
  //Tieni traccia del movimento del mouse
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const updateMousePosition = (ev) => {
    setMousePosition({ x: ev.clientX, y: ev.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

export default function Home() {
  


  const { state, dispatch } = useContext(MainContext);

  const { x, y } = useMousePosition();

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
      <main className={styles.main}>
        <h2>Welcome, {state.username}!</h2> 
        <div className={styles.NavbarDetails}>
          <div className={styles.AvatarHome}>
            <AvatarSvg
              skinColor={state.skinColor}
              suitColor={state.suitColor}
            />
        
          </div>

          <img
            className={styles.SpacecraftHome}
            src={`/spacecraft/${state.spacecraft}.png`}
          ></img>
        </div>
        <img
          className={styles.SpacecraftCursor}
          src={`/spacecraft/${state.spacecraft}.png`}
          style={{ position: "absolute", left: x, top: y }}
        ></img>
      </main>
    </>
  );
}

//Funzione per renderizzare sempre la rotta
export async function getServerSideProps({ req, res }) {
  const user = req.user || req.cookies.user;

  if (!user ) {
    res.writeHead(302, { Location: "/login" });


    res.end();
  }

  return {
    props: {},
  };
}

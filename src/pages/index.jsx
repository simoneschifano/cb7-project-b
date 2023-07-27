import Head from "next/head";

import { useEffect, useState, useContext } from "react";

import { MainContext } from "@/state";

import Navbar from "@/components/Navbar";

import Sun from "@/components/Planets/Sun";
import Mercury from "@/components/Planets/Mercury";
import Venus from "@/components/Planets/Venus";
import Earth from "@/components/Planets/Earth";
import Mars from "@/components/Planets/Mars";
import Jupiter from "@/components/Planets/Jupiter";
import Saturn from "@/components/Planets/Saturn";
import Uranus from "@/components/Planets/Uranus";
import Neptune from "@/components/Planets/Neptune";
import Pluto from "@/components/Planets/Pluto";

import styles from "@/styles/Home.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import {
  EffectCoverflow,
  Mousewheel,
  Pagination,
  Fade,
  Keyboard,
} from "swiper/modules";

//FUNCTIONS
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

  // State/function relative allo swiper
  const [pageValue, setPageValue] = useState();
  const [distanceValue, setDistanceValue] = useState(0);

  const distanceCounter = (reference) => {
    setPageValue(reference.realIndex);
    setDistanceValue(distanceValue + 1);
  };

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

      <main className={styles.Main}>
        <div className={styles.Background}></div>

        <Navbar />

        <img
          className={styles.SpacecraftCursor}
          src={`/spacecraft/${state.spacecraft}.png`}
          style={{ position: "absolute", left: x, top: y }}></img>

        {/* Test senza swiper con pianeti funzionanti */}

        <div className={styles.Planets}>
          <div className={styles.Planet}>
            <Sun />
          </div>

          <div className={styles.Planet}>
            <Mercury />
          </div>

          <div className={styles.Planet}>
            <Venus />
          </div>

          <div className={styles.Planet}>
            <Earth />
          </div>

          <div className={styles.Planet}>
            <Mars />
          </div>

          <div className={styles.Planet}>
            <Jupiter />
          </div>

          <div className={styles.Planet}>
            <Saturn />
          </div>

          <div className={styles.Planet}>
            <Uranus />
          </div>

          <div className={styles.Planet}>
            <Neptune />
          </div>

          <div className={styles.Planet}>
            <Pluto />
          </div>
        </div>

        {/* Test swiper non funzionante */}
        {/*    <div className={styles.swiperv}>
          <Swiper
            direction={"vertical"}
            className={`mySwiper ${styles.swiperv}`}
            spaceBetween={1000}
            parallax={true}
            slidesPerView={"1"}
            mousewheel={{ sensitivity: 0, releaseOnEdges: "true" }}
            speed={1500}
            effect="coverflow"
            coverflowEffect={{
              //Modifica animazione in ingresso
              rotate: 0,
              stretch: 0,
              scale: 200,
              depth: 500,
              modifier: 0.8,
              slideShadows: false,
            }}
            keyboard={{ enabled: true }}
            onSlideChange={(swiper) => distanceCounter(swiper)}
            modules={[EffectCoverflow, Mousewheel, Keyboard]}
            initialSlide={3}>
            <SwiperSlide className={styles.singleSlide}>
              <div className={styles.content}>
                SOLE
              </div>
            </SwiperSlide>

            <SwiperSlide className={styles.singleSlide}>
              <div className={styles.content}>
                MERCURIO
              </div>
            </SwiperSlide>

            <SwiperSlide className={styles.singleSlide}>
              <div className={styles.content}>
                VENERE
              </div>
            </SwiperSlide>

            <SwiperSlide className={styles.singleSlide}>
              <div className={styles.content}>
                TERRA
              </div>
            </SwiperSlide>

            <SwiperSlide className={styles.singleSlide}>
              <div className={styles.content}>
                MARTE
              </div>
            </SwiperSlide>

            <SwiperSlide className={styles.singleSlide}>
              <div className={styles.content}>
                GIOVE
              </div>
            </SwiperSlide>

            <SwiperSlide className={styles.singleSlide}>
              <div className={styles.content}>
                SATURNO
              </div>
            </SwiperSlide>

            <SwiperSlide className={styles.singleSlide}>
              <div className={styles.content}>
                URANO
              </div>
            </SwiperSlide>

            <SwiperSlide className={styles.singleSlide}>
              <div className={styles.content}>
                NETTUNO
              </div>
            </SwiperSlide>
          </Swiper>
        </div> 
        */}
      </main>
    </>
  );
}

//Funzione per renderizzare sempre la rotta
export async function getServerSideProps({ req, res }) {
  const user = req.user || req.cookies.user;

  if (!user) {
    res.writeHead(302, { Location: "/login" });

    res.end();
  }

  return {
    props: {},
  };
}

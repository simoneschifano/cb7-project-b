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
import Moon from "@/components/Planets/Moon";

import styles from "@/styles/Home.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import {
  EffectCreative,
  Keyboard,
  Mousewheel,
 /*  Pagination, */
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

        {/* <img
          className={styles.SpacecraftCursor}
          src={`/spacecraft/${state.spacecraft}.png`}
          style={{ position: "absolute", left: x, top: y }}></img> */}

        <div className={styles.Swiper__Container}>
          <Swiper
            className={`mySwiper ${styles.Swiper__Main}`}
            spaceBetween={100}
            parallax={true}
            slidesPerView={"1"}
            speed={1500}
            onSlideChange={(swiper) => distanceCounter(swiper)}
            initialSlide={3}
            effect={"creative"}
            grabCursor={true}
            keyboard={{
              enabled: true,
            }}
            mousewheel={true}
            /*     pagination={{
              clickable: true,
            }} */
            creativeEffect={{
              prev: {
                shadow: false,
                translate: ["-50%", 250, 0], // orizzontale | verticale | profondità |
              },
              next: {
                shadow: false,
                translate: ["50%", 250, 0],
              },
            }}
            modules={[EffectCreative, Keyboard, Mousewheel/* , Pagination */]}>
            <SwiperSlide className={styles.Swiper__Slide}>
              <div className={styles.Swiper__Slide__Content}>
                <Sun />
              </div>
            </SwiperSlide>

            <SwiperSlide className={styles.Swiper__Slide}>
              <div className={styles.Swiper__Slide__Content}>
                <Mercury />
              </div>
            </SwiperSlide>

            <SwiperSlide className={styles.Swiper__Slide}>
              <div className={styles.Swiper__Slide__Content}>
                <Venus />
              </div>
            </SwiperSlide>

            <SwiperSlide className={styles.Swiper__Slide}>
              <div className={styles.Swiper__Slide__Content}>
                <Moon />
                <Earth />
              </div>
            </SwiperSlide>

            <SwiperSlide className={styles.Swiper__Slide}>
              <div className={styles.Swiper__Slide__Content}>
                <Mars />
              </div>
            </SwiperSlide>

            <SwiperSlide className={styles.Swiper__Slide}>
              <div className={styles.Swiper__Slide__Content}>
                <Jupiter />
              </div>
            </SwiperSlide>

            <SwiperSlide className={styles.Swiper__Slide}>
              <div className={styles.Swiper__Slide__Content}>
                <Saturn />
              </div>
            </SwiperSlide>

            <SwiperSlide className={styles.Swiper__Slide}>
              <div className={styles.Swiper__Slide__Content}>
                <Uranus />
              </div>
            </SwiperSlide>

            <SwiperSlide className={styles.Swiper__Slide}>
              <div className={styles.Swiper__Slide__Content}>
                <Neptune />
              </div>
            </SwiperSlide>

            <SwiperSlide className={styles.Swiper__Slide}>
              <div className={styles.Swiper__Slide__Content}>
                <Pluto />
              </div>
            </SwiperSlide>

            <SwiperSlide className={styles.Swiper__Slide}>
              <div className={styles.Swiper__Slide__Content}>
                <Sun />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
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

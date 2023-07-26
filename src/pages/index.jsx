import Head from "next/head";

import { useEffect, useState, useContext } from "react";

import { MainContext } from "@/state";

import Navbar from "@/components/Navbar";

import styles from "@/styles/Home.module.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Mousewheel, Pagination, Fade, Keyboard } from 'swiper/modules'; 

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
  const [pageValue, setPageValue] = useState()
  const [distanceValue, setDistanceValue] = useState(0)

  const distanceCounter = (reference) => {
      setPageValue(reference.realIndex)
      setDistanceValue(distanceValue + 1)
  }

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
        <Navbar />

        <img
          className={styles.SpacecraftCursor}
          src={`/spacecraft/${state.spacecraft}.png`}
          style={{ position: "absolute", left: x, top: y }}></img>
        
        <Swiper
            direction={'vertical'}
            className={`mySwiper ${styles.swiperv}`}
            spaceBetween={1000}
            parallax={true}
            slidesPerView={'1'}
            mousewheel={{sensitivity: 0, releaseOnEdges: "true"}}
            speed={1500}
            effect='coverflow'
            coverflowEffect={{ //Modifica animazione in ingresso
              rotate: 0,
              stretch: 0,
              scale: 200,
              depth: 500,
              modifier: 0.8,
              slideShadows: false,
            }}
            keyboard={{enabled: true}}
            onSlideChange={(swiper) => distanceCounter(swiper)}
            modules={[EffectCoverflow, Mousewheel, Keyboard]}
            initialSlide={3}      
        >
            <SwiperSlide className={styles.singleSlide}>
              {/* <div position="relative">
                  <div position="absolute/fixed">3D Model</div>
              </div> */}
            </SwiperSlide>
            <SwiperSlide className={styles.singleSlide}></SwiperSlide>
            <SwiperSlide className={styles.singleSlide}></SwiperSlide>
            <SwiperSlide className={styles.singleSlide}></SwiperSlide>
            <SwiperSlide className={styles.singleSlide}></SwiperSlide>
            <SwiperSlide className={styles.singleSlide}></SwiperSlide>
            <SwiperSlide className={styles.singleSlide}></SwiperSlide>
            <SwiperSlide className={styles.singleSlide}></SwiperSlide>
            <SwiperSlide className={styles.singleSlide}></SwiperSlide>
        </Swiper>
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

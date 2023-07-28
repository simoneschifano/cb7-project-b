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

import { planetsData } from "@/mock/planetsData";

import styles from "@/styles/Home.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { EffectCreative } from "swiper/modules";

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

  //Crea gli stati della modale
  const [showModal, setShowModal] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  //Funzione che all'onClick scorre l'array e trova la corrispondenza con nome di planetsData
  const handlePlanetClick = (planetName) => {
    const selectedPlanet = planetsData.find(
      (planet) => planet.name === planetName
    );
    //stati della modale cambiati
    setSelectedPlanet(selectedPlanet);
    setShowModal(true);
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

      <main className={styles.Main}>
        <div className={styles.Background}></div>

        <Navbar />

        {/* <img
          className={styles.SpacecraftCursor}
          src={`/spacecraft/${state.spacecraft}.png`}
          style={{ position: "absolute", left: x, top: y }}></img> */}

        {/* Oggetto della modale che viene scatenato all'onClick su un pianeta e genera i valori passati */}
        {showModal && selectedPlanet && (
          <div className={styles.Modal}>
            <div className={styles.Modal__Content}>
              <p
                className={styles.Modal__Button}
                onClick={() => setShowModal(false)}
              >
                ❌
              </p>
              <h2>{selectedPlanet.name}</h2>

              <p>Mass: {selectedPlanet.mass}</p>
              <p>Type: {selectedPlanet.type}</p>
              <p>Radius: {selectedPlanet.radius}</p>
              <p>Composition: {selectedPlanet.composition}</p>
              <p>Description: {selectedPlanet.description}</p>
              <p>Distance from the Sun: {selectedPlanet.distance_from_sun}</p>
              {selectedPlanet.average_temperature && (
                <p>Average Temperature: {selectedPlanet.average_temperature}</p>
              )}
              {selectedPlanet.surface_temperature && (
                <p>Surface Temperature: {selectedPlanet.surface_temperature}</p>
              )}
            </div>
          </div>
        )}

        <div className={styles.Swiper__Container}>
          <Swiper
            direction={"vertical"}
            className={`mySwiper ${styles.Swiper__Main}`}
            spaceBetween={100}
            parallax={true}
            slidesPerView={"1"}
            speed={1500}
            onSlideChange={(swiper) => distanceCounter(swiper)}
            initialSlide={3}
            effect={"creative"}
            grabCursor={true}
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
            modules={[EffectCreative]}
          >
            <SwiperSlide className={styles.Swiper__Slide}>
              <div
                className={styles.Swiper__Slide__Content}
                onClick={() => handlePlanetClick("Sun")}
              >
                <Sun />
              </div>
            </SwiperSlide>

            <SwiperSlide className={styles.Swiper__Slide}>
              <div
                className={styles.Swiper__Slide__Content}
                onClick={() => handlePlanetClick("Mercury")}
              >
                <Mercury />
              </div>
            </SwiperSlide>

            <SwiperSlide className={styles.Swiper__Slide}>
              <div
                className={styles.Swiper__Slide__Content}
                onClick={() => handlePlanetClick("Venus")}
              >
                <Venus />
              </div>
            </SwiperSlide>

            <SwiperSlide className={styles.Swiper__Slide}>
              <div
                className={styles.Swiper__Slide__Content}
                onClick={() => handlePlanetClick("Earth")}
              >
                <Moon />
                <Earth />
              </div>
            </SwiperSlide>

            <SwiperSlide className={styles.Swiper__Slide}>
              <div
                className={styles.Swiper__Slide__Content}
                onClick={() => handlePlanetClick("Mars")}
              >
                <p>Mars</p>
                <Mars />
              </div>
            </SwiperSlide>

            <SwiperSlide className={styles.Swiper__Slide}>
              <div
                className={styles.Swiper__Slide__Content}
                onClick={() => handlePlanetClick("Jupiter")}
              >
                <Jupiter />
              </div>
            </SwiperSlide>

            <SwiperSlide className={styles.Swiper__Slide}>
              <div
                className={styles.Swiper__Slide__Content}
                onClick={() => handlePlanetClick("Saturn")}
              >
                <Saturn />
              </div>
            </SwiperSlide>

            <SwiperSlide className={styles.Swiper__Slide}>
              <div
                className={styles.Swiper__Slide__Content}
                onClick={() => handlePlanetClick("Uranus")}
              >
                <Uranus />
              </div>
            </SwiperSlide>

            <SwiperSlide className={styles.Swiper__Slide}>
              <div
                className={styles.Swiper__Slide__Content}
                onClick={() => handlePlanetClick("Neptune")}
              >
                <Neptune />
              </div>
            </SwiperSlide>

            <SwiperSlide className={styles.Swiper__Slide}>
              <div
                className={styles.Swiper__Slide__Content}
                onClick={() => handlePlanetClick("Pluto")}
              >
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
export async function getServerSideProps({ req, res}) {
  const user = req.user || req.cookies.user;



  if (!user) {
    res.writeHead(302, { Location: "/login" });

    res.end();
  }

  return {
    props: {},
  };
}

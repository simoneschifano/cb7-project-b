import Head from "next/head";

import { useEffect, useState, useContext } from "react";

import { MainContext } from "@/state";

import Navbar from "@/components/Navbar";
import Planet from "@/components/Planets/Planet/Planet";
// import Topbar from "@/components/Topbar";

import { planetsData } from "@/mock/planetsData";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import {
  EffectCreative,
  Keyboard,
  Mousewheel,
  Pagination,
} from "swiper/modules";

import styles from "@/styles/Home.module.css";

export default function Home() {
  const { state, dispatch } = useContext(MainContext);

  // State/function relative allo swiper
  const [pageValue, setPageValue] = useState();
  const [distanceValue, setDistanceValue] = useState(0);

  const distanceCounter = (reference) => {
    setPageValue(reference.realIndex);
    setDistanceValue(distanceValue + 1);
  };

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

  const solarSistem = [
    {
      id: 1,
      name: "Sun",
      link: "/Textures/Sun.jpg",
      speed: -0.01,
      // dimension: 3,
    },

    {
      id: 2,
      name: "Mercury",
      link: "/Textures/Mercury.jpg",
      speed: -0.0008,
      // dimension: 3,
    },

    {
      id: 3,
      name: "Venus",
      link: "/Textures/Venus_Surph.jpg",
      speed: -0.0009,
      // dimension: 5,
    },

    {
      id: 4,
      name: "Earth",
      link: "/Textures/Earth.jpg",
      speed: -0.003,
      // dimension: 4,
    },

    {
      id: 5,
      name: "Mars",
      link: "/Textures/Mars.jpg",
      speed: -0.0026,
      // dimension: 3,
    },

    {
      id: 6,
      name: "Jupiter",
      link: "/Textures/Jupiter.jpg",
      speed: -0.009,
      // dimension: 5,
    },

    {
      id: 7,
      name: "Saturn",
      link: "/Textures/Saturn.jpg",
      speed: +0.003,
      // dimension: 3,
    },

    {
      id: 8,
      name: "Uranus",
      link: "/Textures/Uranus.jpg",
      speed: -0.003,
      // dimension: 2,
    },

    {
      id: 9,
      name: "Neptune",
      link: "/Textures/Neptune.jpg",
      speed: +0.0055,
      // dimension: 2,
    },

    {
      id: 10,
      name: "Pluto",
      link: "/Textures/Pluto.jpg",
      speed: -0.0009,
      // dimension: 3,
    },
  ];

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
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
        {/* <Topbar /> */}

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
            pagination={pagination}
            creativeEffect={{
              prev: {
                shadow: false,
                translate: ["-50%", 250, 0],
              },
              next: {
                shadow: false,
                translate: ["50%", 250, 0],
              },
            }}
            modules={[EffectCreative, Keyboard, Mousewheel, Pagination]}>
            {solarSistem.map((planet) => (
              <SwiperSlide className={styles.Swiper__Slide}>
                <div
                  className={styles.Swiper__Slide__Content}
                  onClick={() => handlePlanetClick(planet.name)}>
                  <Planet
                    link={planet.link}
                    speed={planet.speed}
                    /* dimension={planet.dimension} */
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Oggetto della modale che viene scatenato all'onClick su un pianeta e genera i valori passati */}
        {/* TODO: necessario aggiornamento allo swipe del pianeta */}
        {showModal && selectedPlanet && (
          <div className={styles.Modal}>
            <div className={styles.Modal__Content}>
              {/* <p
                className={styles.Modal__Button}
                onClick={() => setShowModal(false)}>
                ❌
              </p> */}

              <h2>{selectedPlanet.name}</h2>

              <p>
                <span className={styles.Modal__Important}> Mass: </span>
                {selectedPlanet.mass}
              </p>

              <p>
                <span className={styles.Modal__Important}>Type: </span>
                {selectedPlanet.type}
              </p>

              <p>
                <span className={styles.Modal__Important}>Radius: </span>
                {selectedPlanet.radius}
              </p>

              <p>
                <span className={styles.Modal__Important}>Composition:</span>{" "}
                {selectedPlanet.composition}
              </p>
              <p>
                <span className={styles.Modal__Important}>Description:</span>{" "}
                {selectedPlanet.description}
              </p>
              <p>
                <span className={styles.Modal__Important}>
                  Distance from the Sun:
                </span>
                {selectedPlanet.distance_from_sun}
              </p>

              {selectedPlanet.average_temperature && (
                <p>
                  <span className={styles.Modal__Important}>
                    Average Temperature:
                  </span>
                  {selectedPlanet.average_temperature}
                </p>
              )}

              {selectedPlanet.surface_temperature && (
                <p>
                  <span className={styles.Modal__Important}>
                    Surface Temperature:
                  </span>
                  {selectedPlanet.surface_temperature}
                </p>
              )}
            </div>
          </div>
        )}

        <Navbar />
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

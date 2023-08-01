import Head from "next/head";

import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";

import { MainContext } from "@/state";

import Navbar from "@/components/Navbar";
import Planet from "@/components/Planets/Planet/Planet";
import Menu from "@/components/Menu";

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
import Topbar from "@/components/Topbar";

export default function Home() {
  const { state, dispatch } = useContext(MainContext);
  const router = useRouter();
  //Rendering della pagina, esegue un controllo sui dati se non esistono va in /login altrimenti

  useEffect(() => {
    if (
      !state.username ||
      !state.skinColor ||
      !state.suitColor ||
      !state.spacecraft
    ) {
      router.push("/login");
    }
  }, [router, state]);

  // State/function relative allo swiper
  const [distanceValue, setDistanceValue] = useState(0);

  const distanceCalc = (reference) => {
    const activeIndex = reference.activeIndex;
    const previousIndex = reference.previousIndex;
    const currentPlanet = solarSystem[activeIndex];
    handlePlanetClick(currentPlanet.name);

    const firstPlanetDistance = solarSystem.find(
      (planet) => planet.id === activeIndex + 1
    );
    const secondPlanetDistance = solarSystem.find(
      (planet) => planet.id === previousIndex + 1
    );
    const shift = Math.abs(
      firstPlanetDistance.distance - secondPlanetDistance.distance
    );
    setDistanceValue(distanceValue + shift);
  };

  //Modale delle istruzioni
  const [modalInstructions, setModalInstructions] = useState(true);
  const [showButton, setShowButton] = useState(false);
  
  useEffect(() => {
    const hasSeenInstructions = localStorage.getItem("hasSeenInstructions");
    if (hasSeenInstructions) {
      setModalInstructions(false);
    }
  }, []);

  useEffect(() => {
    // Chiude automaticamente la modale dopo 5 secondi
    if (modalInstructions) {
      const timeoutId = setTimeout(() => {
        setModalInstructions(false);
        localStorage.setItem("hasSeenInstructions", "true");
      }, 7000);

      // Pulizia del timeout quando il componente viene smontato
      return () => clearTimeout(timeoutId);
    }
  }, []);

  useEffect(() => {
    // Imposta lo stato showButton su true dopo 3 secondi
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 2500);

    // Assicurati di cancellare il timer quando il componente si smonta
    return () => clearTimeout(timer);
  }, []);

  const onHandleClickModalClose = () => {
    setModalInstructions(false);
  };
  //Fine modale delle istruzioni

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
  };

  const solarSystem = [
    {
      id: 1,
      name: "Sun",
      link: "/Textures/Sun.jpg",
      speed: -0.01,
      distance: 0,
      dimension: 3,
      ring: false,
      satellites: false,
    },

    {
      id: 2,
      name: "Mercury",
      link: "/Textures/Mercury.jpg",
      speed: -0.0008,
      distance: 0.387,
      dimension: 1.5,
      ring: false,
      satellites: false,
    },

    {
      id: 3,
      name: "Venus",
      link: "/Textures/Venus_Surph.jpg",
      speed: -0.0009,
      distance: 0.723,
      dimension: 1.75,
      ring: false,
      satellites: false,
    },

    {
      id: 4,
      name: "Earth",
      link: "/Textures/Earth.jpg",
      speed: -0.003,
      distance: 0.94,
      dimension: 1.85,
      ring: false,
      satellites: true,
    },

    {
      id: 5,
      name: "Mars",
      link: "/Textures/Mars.jpg",
      speed: -0.0026,
      distance: 1.524,
      dimension: 1.65,
      ring: false,
      satellites: false,
    },

    {
      id: 6,
      name: "Jupiter",
      link: "/Textures/Jupiter.jpg",
      speed: -0.009,
      distance: 5.209,
      dimension: 2.8,
      ring: false,
      satellites: false,
    },

    {
      id: 7,
      name: "Saturn",
      link: "/Textures/Saturn.jpg",
      speed: +0.003,
      distance: 9.539,
      dimension: 2.65,
      ring: false,
      satellites: false,
    },

    {
      id: 8,
      name: "Uranus",
      link: "/Textures/Uranus.jpg",
      speed: -0.003,
      distance: 19.18,
      dimension: 2.3,
      ring: false,
      satellites: false,
    },

    {
      id: 9,
      name: "Neptune",
      link: "/Textures/Neptune.jpg",
      speed: +0.0055,
      distance: 30.06,
      dimension: 2.1,
      ring: false,
      satellites: false,
    },

    {
      id: 10,
      name: "Pluto",
      link: "/Textures/Pluto.jpg",
      speed: -0.0009,
      distance: 39.44,
      dimension: 1,
      ring: false,
      satellites: false,
    },
  ];

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      const currentPlanet = solarSystem.find(
        (planet) => planet.id === index + 1
      );

      if (currentPlanet) {
        return (
          '<span class="' + className + '">' + currentPlanet.name + "</span>"
        );
      } else {
        return '<span class="' + className + '">' + "ERRORE " + "</span>";
      }
    },
  };

  return (
    <>
      <Head>
        <title>Spacemony</title>
        <meta name="description" content="Cb-7 Final Project gruppo-B" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://img.freepik.com/free-vector/astronaut-holding-flag-space-cartoon-icon-illustration-technology-space-icon-isolated-flat-cartoon-style_138676-3099.jpg?w=2000"
        />
      </Head>

      <main className={styles.Main}>
        {/* Modale Delle istruzioni */}
        {modalInstructions && (
          <div className={styles.Modal__Instructions}>
            <h2 className={styles.Modal__Instructions__Header}>
              Loading your journey...
            </h2>
            <div className={styles.Modal__Content__Instructions}>
              <h2 className={styles.Modal__Instructions__Header2}>
                Here the instructions for movement within the journey
              </h2>

              <p className={styles.Modal__Content__Instructions__para}>
                Use the Keyboard arrow for move within planets
              </p>
              <div className={styles.Modal__Content__Instructions__keyboard}>
                <div className={styles.Modal__Content__Instructions__left}>
                  ⬅️
                </div>
                <div className={styles.Modal__Content__Instruction__right}>
                  ➡️
                </div>
              </div>
              <p className={styles.Ondrag__para}>
                Drag the mouse (swipe) on a planet to move to the subsequent or
                previous.
              </p>
              <p className={styles.Ondrag__para__mobile}>
                Swipe on a planet to move to the subsequent or previous.
              </p>
              <div className={styles.Ondrag}>
                <div className={styles.Instruction__scroll}>
                  <div className={styles.Dot}></div>
                  <div className={styles.Instruction__mousey}>
                    <div className={styles.Instruction__scroller2}></div>
                  </div>
                </div>
              </div>
              <p className={styles.Instruction__scroll__para}>
                You can also use the mouse wheel as a scroll
              </p>
              <div className={styles.Instruction__scroll}>
                <div className={styles.Instruction__mousey}>
                  <div className={styles.Instruction__scroller}></div>
                </div>
              </div>
              {showButton && (
                <button
                  onClick={onHandleClickModalClose}
                  className={styles.Modal__BtnContinue}>
                  <span>Continue to the journey</span>
                </button>
              )}
            </div>
          </div>
        )}

        <Topbar />

        <div className={styles.Swiper__Container}>
          <Swiper
            className={`mySwiper ${styles.Swiper__Main}`}
            spaceBetween={100}
            parallax={true}
            slidesPerView={"1"}
            speed={1500}
            onSlideChange={(swiper) => distanceCalc(swiper)}
            initialSlide={3}
            effect={"creative"}
            // grabCursor={true}
            keyboard={{
              enabled: true,
            }}
            /* lazy={true} */
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
            {solarSystem.map((planet) => (
              <SwiperSlide className={styles.Swiper__Slide} key={planet.id}>
                <div
                  className={styles.Swiper__Slide__Content}
                  onClick={() => handlePlanetClick(planet.name)}>
                  <Planet
                    link={planet.link}
                    speed={planet.speed}
                    scale={planet.dimension}
                    ring={planet?.ring}
                    satellites={planet?.satellites}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {showModal && selectedPlanet && (
          <div className={styles.Modal}>
            <p
              className={styles.Modal__Button}
              onClick={() => setShowModal(false)}>
              ❌
            </p>

            <h2 className={styles.Modal__Title}>{selectedPlanet.name}</h2>

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
              <span className={styles.Modal__Important}>Composition: </span>
              {selectedPlanet.composition}
            </p>
            <p>
              <span className={styles.Modal__Important}>Description: </span>
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
        )}

        <Navbar distanceValue={distanceValue} />
        <Menu />
      </main>
    </>
  );
}

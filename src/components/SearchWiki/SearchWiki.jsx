import { useState } from "react";
import { GET } from "@/utils/http";
import PlanetCard from "../PlanetCard";
import StarCard from "../StarCard";
import Router from "next/router";
import Image from "next/image";

import styles from "./SearchWiki.module.scss";

const SearchWiki = () => {
  const urlStars = "https://api.api-ninjas.com/v1/stars?name=";
  const urlPlanets = "https://api.api-ninjas.com/v1/planets?name=";
  
  const listRandomPlanets = [
    {
      name: "HAT-P-7b",
      mass: 1.84,
      radius: 1.51,
      period: 2.20474,
      semi_major_axis: 0.03676,
      temperature: 2733,
      distance_light_year: 1124,
      host_star_mass: 1.56,
      host_star_temperature: 6389,
    },
    {
      name: "Earth",
      mass: 0.00315,
      radius: 0.0892,
      period: 365.2,
      semi_major_axis: 1,
      temperature: 288,
      distance_light_year: 0,
      host_star_mass: 1,
      host_star_temperature: 6000,
    },
    {
      name: "Kepler-4b",
      mass: 0.077,
      radius: 0.357,
      period: 3.21346,
      semi_major_axis: 0.0456,
      temperature: 1650,
      distance_light_year: 1794,
      host_star_mass: 1.22,
      host_star_temperature: 5857,
    },
  ];
  const listRandomStars = [
    {
      name: "Sun",
      apparent_magnitude: "-26.74",
      absolute_magnitude: "4.83",
      distance_light_year: "0.00001581",
      spectral_class: "G2V",
    },
    {
      name: "54 Cet",
      constellation: "Aries",
      right_ascension: "01h 50m 52.01s",
      declination: "+11° 02′ 36.4″",
      apparent_magnitude: "5.93",
      absolute_magnitude: "2.77",
      distance_light_year: "139",
      spectral_class: "F2Vw",
    },
    {
      name: "ET And",
      constellation: "Andromeda",
      right_ascension: "23h 17m 55.99s",
      declination: "+45° 29′ 20.2″",
      apparent_magnitude: "6.48",
      absolute_magnitude: "0.36",
      distance_light_year: "545",
      spectral_class: "B9Vp(Si)",
    },
  ];

  const [resultPlanet, setResultPlanet] = useState(false);
  const [inputPlanetValue, setPlanetInputValue] = useState(false);
  const [resultStar, setResultStar] = useState(false);
  const [inputStarValue, setStarInputValue] = useState(false);
  const [previewResultStar, setPreviewResultStar] = useState(false);
  const [previewResultPlanet, setPreviewResultPlanet] = useState(false);
 

  const onHandlePlanetSearch = (e) => {
    e.preventDefault();
    GET(urlPlanets, inputPlanetValue).then((data) => setResultPlanet(data));
  };
  const onHandlePlanetInput = (e) => {
    if (e.target.value.length > 2) {
      setPlanetInputValue(e.target.value);
    
      GET(urlPlanets, e.target.value).then((data) => setPreviewResultPlanet(data));
      setResultPlanet(false);
    } else {
      setPlanetInputValue(false);
      setPreviewResultPlanet(false);
      setResultPlanet(false);
    }
  };
  const onHandlePlanetPreviewClick = (planetName) => {
    GET(urlPlanets, planetName).then((data) => setResultPlanet(data));
  };

  const onHandleStarSearch = (e) => {
    e.preventDefault();
    GET(urlStars, inputStarValue).then((data) => setResultStar(data));
  };
  const onHandleStarInput = (e) => {
    if (e.target.value.length > 2) {
      setStarInputValue(e.target.value);
      GET(urlStars, e.target.value).then((data) => setPreviewResultStar(data));
      setResultStar(false);
    } else {
      setStarInputValue(false);
      setPreviewResultStar(false);
      setResultStar(false);
    }
  };
  const onHandleStarPreviewClick = (planetName) => {
    GET(urlStars, planetName).then((data) => setResultStar(data));
  };

  const returnHome = () => {
    Router.push("/");
  };

  return (
    <>
      <div className={styles.Wrapper__Wiki}>
        <div className={styles.Close__Button} onClick={returnHome} >
          <Image className={styles.Back__Button__Image} src={'https://www.svgrepo.com/show/18507/back-button.svg'} width={40} height={40} alt="back_button_image" />
        </div>
        <h1>Welcome to the Wiki 🌎</h1>

        {/* Sezione ricerca dei pianeti */}
        <div className={styles.Search__Form__Container}>
          <form className={styles.SearchForm} onSubmit={onHandlePlanetSearch}>
            <input className={styles.SearchInput} type="text" name="searchText" placeholder="Insert your planet here!" onChange={onHandlePlanetInput} />
            <button onClick={onHandlePlanetSearch}>
              <svg className={styles.svgIcon} viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
              </svg>
              Search
            </button>
          </form>
          {previewResultPlanet.length > 0  && !resultPlanet  &&(
            <div className={styles.Dropdown__Preview}>
              {previewResultPlanet.slice(0, 5).map((planet, index) => (
                <p className={styles.Dropdown__Item} onClick={() => onHandlePlanetPreviewClick(planet.name)} key={index}>{planet.name}</p>
              ))}
            </div>
          )}
        </div>
        {resultPlanet ? (
          <div className={styles.List_Elements} draggable>
            {resultPlanet.length > 0 ? resultPlanet.map((planet, index) => <PlanetCard data={planet} key={index} />) : <div>not found</div>}
          </div>
        ) : (
          <div className={styles.List_Elements} draggable>
            {!inputPlanetValue && listRandomPlanets.map((planet, index) => (
              <PlanetCard data={planet} key={index} />
            ))}
          </div>
        )}

        {/* Sezione ricerca delle stelle */}
        <div className={styles.Search__Form__Container}>
        <form className={styles.SearchForm} onSubmit={onHandleStarSearch}>
          <input className={styles.SearchInput} type="text" name="saerchText" placeholder="Insert your star here!" onChange={onHandleStarInput} />
          <button onClick={onHandleStarSearch}>
            <svg className={styles.svgIcon} viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
            </svg>
            Search
          </button>
        </form>
        {previewResultStar.length > 0 && !resultStar && (
          <div className={styles.Dropdown__Preview}>
            {previewResultStar.slice(0, 5).map((star, index) => (
              <p className={styles.Dropdown__Item} onClick={() => onHandleStarPreviewClick(star.name)} key={index}>{star.name}</p>
            ))}
          </div>
        )}
        </div>
        {resultStar ? (
          <div className={styles.List_Elements}>
            {resultStar.length > 0 ? resultStar.map((star, index) => <StarCard data={star} key={index} />) : <div>not found</div>}
          </div>
        ) : (
          <div className={styles.List_Elements}>
            {!inputStarValue && listRandomStars.map((star, index) => (
              <StarCard data={star} key={index} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchWiki;

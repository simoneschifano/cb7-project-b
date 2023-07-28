import { useState } from "react";

import { GET } from "@/utils/http";

import PlanetCard from "../PlanetCard";
import StarCard from "../StarCard";

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
      GET(urlPlanets, e.target.value).then((data) =>
        setPreviewResultPlanet(data)
      );
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
      GET(urlPlanets, e.target.value).then((data) =>
        setPreviewResultStar(data)
      );
    } else {
      setStarInputValue(false);
      setPreviewResultStar(false);
      setResultStar(false);
    }
  };
  const onHandleStarPreviewClick = (planetName) => {
    GET(urlPlanets, planetName).then((data) => setResultStar(data));
  };

  return (
    <>
      <form className={styles.SearchForm} onSubmit={onHandlePlanetSearch}>
        <input
          className={styles.SearchInput}
          type="text"
          name="saerchText"
          placeholder="inserisci il pianeta da ricercare"
          onChange={onHandlePlanetInput}
        />
        <button onClick={onHandlePlanetSearch}>Search</button>
      </form>
      {previewResultPlanet.length > 0 && (
        <div>
          {" "}
          {previewResultPlanet.slice(0, 5).map((planet) => (
            <p onClick={() => onHandlePlanetPreviewClick(planet.name)}>
              {planet.name}
            </p>
          ))}
        </div>
      )}
      {resultPlanet ? (
        <div className={styles.listPlanets}>
          {resultPlanet.length > 0 ? (
            resultPlanet.map((planet) => <PlanetCard data={planet} />)
          ) : (
            <div>not found</div>
          )}
        </div>
      ) : (
        <div className={styles.listPlanets}>
          {listRandomPlanets.map((planet) => (
            <PlanetCard data={planet} />
          ))}
        </div>
      )}

      <form className={styles.SearchForm} onSubmit={onHandleStarSearch}>
        <input
          className={styles.SearchInput}
          type="text"
          name="saerchText"
          placeholder="inserisci la stella da ricercare"
          onChange={onHandleStarInput}
        />
        <button onClick={onHandleStarSearch}>Search</button>
      </form>
      {previewResultStar.length > 0 && (
        <div>
          {" "}
          {previewResultStar.slice(0, 5).map((star) => (
            <p onClick={() => onHandleStarPreviewClick(star.name)}>
              {star.name}
            </p>
          ))}
        </div>
      )}
      {resultStar ? (
        <div className={styles.listStars}>
          {resultStar.length > 0 ? (
            resultStar.map((planet) => <StarCard data={planet} />)
          ) : (
            <div>not found</div>
          )}
        </div>
      ) : (
        <div className={styles.listStars}>
          {listRandomStars.map((star) => (
            <StarCard data={star} />
          ))}
        </div>
      )}
    </>
  );
};

export default SearchWiki;

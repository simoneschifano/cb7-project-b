import { useState } from 'react';
import styles from './SearchWiki.module.scss'
import { GET } from '@/utils/http';
import PlanetCard from '../PlanetCard';

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
            host_star_temperature: 6389
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
            host_star_temperature: 6000
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
            host_star_temperature: 5857
          }
    ]
    const listRandomStars = [
        {
            name: "Sun",
            apparent_magnitude: "-26.74",
            absolute_magnitude: "4.83",
            distance_light_year: "0.00001581",
            spectral_class: "G2V"
        },
        {
            name: "54 Cet",
            constellation: "Aries",
            right_ascension: "01h 50m 52.01s",
            declination: "+11° 02′ 36.4″",
            apparent_magnitude: "5.93",
            absolute_magnitude: "2.77",
            distance_light_year: "139",
            spectral_class: "F2Vw"
        },
        {
            name: "ET And",
            constellation: "Andromeda",
            right_ascension: "23h 17m 55.99s",
            declination: "+45° 29′ 20.2″",
            apparent_magnitude: "6.48",
            absolute_magnitude: "0.36",
            distance_light_year: "545",
            spectral_class: "B9Vp(Si)"
          }
    ]

    const [resultPlanet, setResultPlanet] = useState(false);
    const [inputPlanetValue, setPlanetInputValue] = useState(false);

    const onHandlePlanetSearch = (e) => {
        e.preventDefault();
        GET(urlPlanets,inputPlanetValue).then(data => setResultPlanet(data));
    }
    const onHandlePlanetInput = (e) => {
        setPlanetInputValue(e.target.value);
    }

    const [resultStar, setResultStar] = useState(false);
    const [inputStarValue, setStarInputValue] = useState(false);

    const onHandleStarSearch = (e) => {
        e.preventDefault();
        GET(urlStars, inputStarValue).then(data => setResultStar(data));
    }
    const onHandleStarInput = (e) => {
        setStarInputValue(e.target.value);
    }

    return (
        <>
            <form className={styles.SearchForm} onSubmit={onHandlePlanetSearch}>
                <input className={styles.SearchInput} type="text" name="saerchText" placeholder="inserisci il pianeta da ricercare" onChange={onHandlePlanetInput} />
            </form>

            {
                resultPlanet ?
                    <div>{resultPlanet.length > 0 ? resultPlanet.map(planet => <PlanetCard data={planet}/>):<div>not found</div>}</div>
                    :
                    <div className={styles.listRandomPlanets}>
                        {listRandomPlanets.map(planet => <PlanetCard data={planet}/>)}
                    </div>
            }

            <form className={styles.SearchForm} onSubmit={onHandleStarSearch}>
                <input className={styles.SearchInput} type="text" name="saerchText" placeholder="inserisci la stella da ricercare" onChange={onHandleStarInput} />
            </form>

            {
                resultStar ?
                <div>{resultStar.length > 0 ? resultStar.map(planet => <PlanetCard data={planet}/>):<div>not found</div>}</div>
                :
                <div className={styles.listRandomStars}>
                    {listRandomStars.map(star => <PlanetCard data={star}/>)}
                </div>
            }

        </>
    )
}

export default SearchWiki;
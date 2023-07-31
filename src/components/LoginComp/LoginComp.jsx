import Image from "next/image";
import { useRouter } from "next/router";

import { useState, useEffect } from "react";
import { useContext } from "react";

import { MainContext } from "@/state";

import AvatarSvg from "../AvatarSvg";

import styles from "./LoginComp.module.scss";

const spacecraftOptions = [
  { value: "spaceship1", label: "Spaceship 1" },
  { value: "spaceship2", label: "Spaceship 2" },
  { value: "spaceship3", label: "Spaceship 3" },
];

const LoginComp = () => {
  const router = useRouter();

  //Intercetta i dati localStorage
  const saveUserDataToLocalStorage = () => {
    localStorage.setItem("username", state.username);
    localStorage.setItem("skinColor", state.skinColor);
    localStorage.setItem("suitColor", state.suitColor);
    localStorage.setItem("spacecraft", state.spacecraft);
  };

  //Controllo dell'input se è maggiore di 4 , in caso push
  const onHandleSubmit = (e) => {
    e.preventDefault();
    const minLength = 4;
    if (state.username.length >= minLength) {
      saveUserDataToLocalStorage();
      router.push("/preview");
    } else {
      alert(`Username must be at least ${minLength} characters long.`);
    }
  };

  //se i dati sono già stati caricati precendentemente fa un controllo in caso
  useEffect(() => {
    const checkLocalStorage = () => {
      const username = localStorage.getItem("username");
      const skinColor = localStorage.getItem("skinColor");
      const suitColor = localStorage.getItem("suitColor");
      const spacecraft = localStorage.getItem("spacecraft");

      if (username && skinColor && suitColor && spacecraft) {
        // Setta gli dati dell'user come stato
        dispatch({ type: "SET_USERNAME", payload: username });
        dispatch({ type: "SET_SKIN_COLOR", payload: skinColor });
        dispatch({ type: "SET_SUIT_COLOR", payload: suitColor });
        dispatch({ type: "SET_SPACECRAFT", payload: spacecraft });
        // Va alla home direttamente se esistono i dati
        router.push("/");
      }
    };

    checkLocalStorage();
  }, []);

  const { state, dispatch } = useContext(MainContext); // usa il contesto

  const [selectedSpacecraft, setSelectedSpacecraft] = useState("spaceship1");

  const handleSpacecraftChange = (e) => {
    setSelectedSpacecraft(e.target.value);
    dispatch({ type: "SET_SPACECRAFT", payload: e.target.value }); // invia l'azione al reducer
  };

  return (
    <div className={styles.Login}>
      <div className={styles.Login__Info}>
        <h1 className={styles.Login__Info__Title}>Welcome to Spacemony</h1>
        <h3>Choose you're avatar </h3>
        <h3>& spaceship </h3>
      </div>

      <form className={styles.Login__Form} onSubmit={onHandleSubmit}>
        <div className={styles.Login__Settings}>
          <div className={styles.Login__Settings__Avatar}>
            <AvatarSvg
              skinColor={state.skinColor}
              suitColor={state.suitColor}
              className={styles.Avatar__Svg}
            />

            <input
              className={styles.Avatar__Name}
              type="text"
              placeholder="Username ..."
              value={state.username} // usa lo stato dal contesto
              onChange={
                (e) =>
                  dispatch({ type: "SET_USERNAME", payload: e.target.value }) // invia l'azione al reducer
              }
            />

            <div className={styles.Avatar__Color}>
              <div className={styles.Avatar__Color__Skin}>
                <span>Choose you're skin color : </span>
                <input
                  type="color"
                  value={state.skinColor} // usa lo stato dal contesto
                  onChange={
                    (e) =>
                      dispatch({
                        type: "SET_SKIN_COLOR",
                        payload: e.target.value,
                      }) // invia l'azione al reducer
                  }
                />
              </div>

              <div className={styles.Avatar__Color__Suit}>
                <span>Choose you're skin color suit : </span>
                <input
                  type="color"
                  value={state.suitColor} // usa lo stato dal contesto
                  onChange={
                    (e) =>
                      dispatch({
                        type: "SET_SUIT_COLOR",
                        payload: e.target.value,
                      }) // invia l'azione al reducer
                  }
                />
              </div>
            </div>
          </div>

          <div className={styles.Login__Settings__Spacecraft}>
            <Image
              className={styles.SpaceShipImg}
              src={`/spacecraft/${selectedSpacecraft}.png`}
              alt="Selected spacecraft"
              width={200}
              height={200}
            />
            <select
              value={selectedSpacecraft}
              onChange={handleSpacecraftChange}>
              {spacecraftOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.Login__Submit}>
          <input
            className={styles.Login__Submit__Input}
            type="submit"
            value="Login"
          />
          <span className={styles.Login__Submit__Span}></span>
        </div>
      </form>
    </div>
  );
};

export default LoginComp;

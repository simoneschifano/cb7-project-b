import styles from "./LoginComp.module.scss";
import { useRouter } from "next/router";
import { useState } from "react";
import AvatarSvg from "../AvatarSvg";
import { MainContext } from "@/state";
import { useContext } from "react";

const spacecraftOptions = [
  { value: "spaceship1", label: "Navicella 1" },
  { value: "spaceship2", label: "Navicella 2" },
  { value: "spaceship3", label: "Navicella 3" },
];

const LoginComp = () => {
  const router = useRouter();

  //Controllo dell'input se è maggiore di 4 , in caso push
  const onHandleSubmit = (e) => {
    e.preventDefault();
    const minLength = 4;
    if (state.username.length >= minLength) {
      router.push("/preview");
    } else {
      alert(`Username must be at least ${minLength} characters long.`);
    }
  };


  const { state, dispatch } = useContext(MainContext); // usa il contesto

  const [selectedSpacecraft, setSelectedSpacecraft] = useState("spaceship1");

  const handleSpacecraftChange = (e) => {
    setSelectedSpacecraft(e.target.value);
    dispatch({ type: "SET_SPACECRAFT", payload: e.target.value }); // invia l'azione al reducer
  };

  
  return (
    <div className={styles.LoginBody}>
      <h1>Login</h1>
      <form className={styles.login}  onSubmit={onHandleSubmit}>
        <div className={styles.Avatar}>
          Scegli il tuo avatar
          <AvatarSvg skinColor={state.skinColor} suitColor={state.suitColor} /> 
          <input
            type="text"
            placeholder="Username ..."
            value={state.username} // usa lo stato dal contesto
            onChange={(e) =>
              dispatch({ type: "SET_USERNAME", payload: e.target.value }) // invia l'azione al reducer
            }
            />
          <div>
            <span>Seleziona il colore della pelle: </span>
            <input
              type="color"
              value={state.skinColor} // usa lo stato dal contesto
              onChange={(e) =>
                dispatch({ type: "SET_SKIN_COLOR", payload: e.target.value }) // invia l'azione al reducer
              }
              />
            <hr />
            <span>Seleziona il colore della tuta:  </span>
            <input
              type="color"
              value={state.suitColor} // usa lo stato dal contesto
              onChange={(e) =>
                dispatch({ type: "SET_SUIT_COLOR", payload: e.target.value }) // invia l'azione al reducer
              }
            />
          </div>
        </div>
        <div className={styles.SpaceCraft}>
          Scegli la tua Navicella
          <select value={selectedSpacecraft} onChange={handleSpacecraftChange}>
            {spacecraftOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <img
            className={styles.SpaceShipImg}
            src={`/spacecraft/${selectedSpacecraft}.png`}
            alt="Selected spacecraft"
            />
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};


export default LoginComp;
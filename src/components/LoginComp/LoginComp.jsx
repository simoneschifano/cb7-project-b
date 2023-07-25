import styles from "./LoginComp.module.scss";
import { useRouter } from "next/router";
import { useState } from "react";
import AvatarSvg from "../AvatarSvg";

const spacecraftOptions = [
  { value: "spaceship1", label: "Navicella 1" },
  { value: "spaceship2", label: "Navicella 2" },
  { value: "spaceship3", label: "Navicella 3" },
];

const LoginComp = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [skinColor, setSkinColor] = useState("#ffcc66");
  const [spacecraft, setSpacecraft] = useState("spaceship1");

  const [suitColor, setSuitColor] = useState("white");
  const [selectedSpacecraft, setSelectedSpacecraft] = useState("spaceship1");

  const handleSpacecraftChange = (e) => {
    setSelectedSpacecraft(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.length > 0 && username.length < 20) {
      // Pass the selected avatar data to the preview page
      const query = `username=${encodeURIComponent(
        username
      )}&skinColor=${encodeURIComponent(
        skinColor
      )}&spacecraft=${encodeURIComponent(spacecraft)}`;
      router.push(`/preview?${query}`, "/Preview", { shallow: true });
    } else {
      alert("Username must be between 1 and 20 characters");
    }
  };

  return (
    <div className={styles.Login}>
      <h1>Login</h1>
      <form className={styles.login} onSubmit={handleSubmit}>
        <div className={styles.Avatar}>
          Scegli il tuo avatar
          <AvatarSvg
            skinColor={skinColor}
           
            suitColor={suitColor}
          />
          <input
            type="text"
            placeholder="Username ..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div>
            <span>Seleziona il colore della pelle:</span>
            <input
              type="color"
              value={skinColor}
              onChange={(e) => setSkinColor(e.target.value)}
            />
            <hr />
             <span>Seleziona il colore della tuta:</span>
            <input
              type="color"
              value={suitColor}
              onChange={(e) => setSuitColor(e.target.value)}
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
            src={`/path/to/spacecraft/${selectedSpacecraft}.png`}
            alt="Selected spacecraft"
          />
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default LoginComp;

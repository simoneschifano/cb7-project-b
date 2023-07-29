import React from "react";

import styles from "./Topbar.module.scss";

const Topbar = () => {
  /* TODO: aggiungere stati e funzioni */
  return (
    <div className={styles.top_navbar}>
      <h2>Welcome, {state.username}!</h2>

      <ul className={styles.top_nav_ul}>
        <li>
          <Link href="/wiki">Wiki</Link>
        </li>

        <li>
          <Link href={"/about"}>About Us</Link>
        </li>

        <li>
          <Link href={"/minigame"}>Mini-Game</Link>
        </li>
      </ul>
    </div>
  );
};

export default Topbar;

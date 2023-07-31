import React, { useContext, useEffect } from "react";

import { MainContext } from "@/state";

import Link from "next/link";

import styles from "./Topbar.module.scss";

const Topbar = () => {
  const { state, dispatch } = useContext(MainContext);
  useEffect(() => {
    const usernameFromLocalStorage = localStorage.getItem("username");

    if (usernameFromLocalStorage) {
      dispatch({ type: "SET_USERNAME", payload: usernameFromLocalStorage });
    }
  }, []);



  /* TODO: aggiungere stati e funzioni */
  return (
    <div className={styles.top_navbar}>
      <ul className={styles.top_nav_ul}>
        <li>
          {state.username && (
            <h1 className={styles.topNavbar__Header}>
              Welcome, {state.username}!
            </h1>
          )}
        </li>
        <li>
          <Link href="/wiki">Wiki</Link>
        </li>

        <li>
          <Link href={"/about"}>About Us</Link>
        </li>

        <li>
          <Link href={"/astroquiz"}>Mini-Game</Link>
        </li>
        <li>
          <Link href={"/preview"}>Back to settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default Topbar;

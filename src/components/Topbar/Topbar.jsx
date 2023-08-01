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
  }, [dispatch]);

  return (
    <div className={styles.Navbar}>
         {state.username && (
            <h1 className={styles.Navbar__Title}>
              Welcome, {state.username}!
            </h1>
          )}
      <ul className={styles.Navbar__List}>
        <li>
          <Link href="/wiki">Wiki</Link>
        </li>

        <li>
          <Link href={"/astroquiz"}>AstroQuiz</Link>
        </li>

        <li>
          <Link href={"/about"}>About Us</Link>
        </li>

        <li>
          <Link href={"/preview"}>Back to settings</Link>
        </li>
      </ul>
      {/* <p className={styles.Navbar__Hover}>Hover me</p> */}
    </div>
  );
};

export default Topbar;

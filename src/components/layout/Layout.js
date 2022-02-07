import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./layout.module.scss";

const setActive = ({ isActive }) =>
  isActive ? `${styles.nav} ${styles.active_link}` : `${styles.nav}`;

export default function Layout() {
  return (
    <>
      <header className={styles.header}>
        <NavLink to="/" className={setActive}>
          Home
        </NavLink>
        <NavLink to="/competitions" className={setActive}>
          Competitions
        </NavLink>
        <NavLink to="/teams" className={setActive}>
          Teams
        </NavLink>
        <NavLink to="/matches" className={setActive}>
          Matches
        </NavLink>
      </header>
      <Outlet />
    </>
  );
}

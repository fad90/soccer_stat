import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import styles from "./header.module.scss"

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.nav}>Home</Link>
      <Link to="/competitions" className={styles.nav}>Competitions</Link>
      <Link to="/teams" className={styles.nav}>Teams</Link>
      <Link to="/matches" className={styles.nav}>Matches</Link>
    </header>
  );
}

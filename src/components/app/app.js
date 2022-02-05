import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import styles from "./app.module.scss";

import Header from "../header";
import Home from "../home";
import Competitions from "../competitions";
import Teams from "../teams";
import Matches from "../matches";

import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className={styles.app}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/competitions" element={<Competitions />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/matches" element={<Matches />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

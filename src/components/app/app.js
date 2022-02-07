import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./app.module.scss";

import Home from "../home";
import Competitions from "../competitions";
import Teams from "../teams";
import Matches from "../matches";
import SingleTeam from "../single-team";
import Layout from "../layout";
import TeamMatches from "../team-matches"
import NotFound from "../not-found";

import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="competitions" element={<Competitions />} />
            <Route path="teams" element={<Teams />} />
            <Route path="teams/:id" element={<SingleTeam />} />
            <Route path="teams/:id/matches" element={<TeamMatches />} />
            <Route path="matches" element={<Matches />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

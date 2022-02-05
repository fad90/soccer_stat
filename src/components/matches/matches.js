import React from "react";
import { useState, useEffect } from "react";
import styles from "./matches.module.scss";
import EachMatch from "../each-match";

export default function Matches() {
  const [matches, setMatches] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    getMatches("https://api.football-data.org/v2/matches");
  }, []);

  const getMatches = async (url) => {
    const response = await fetch(url, {
      headers: { "X-Auth-Token": "1d1dfaa89dd54c15bcef0e7fae063627" },
      dataType: "json",
      type: "GET",
    });
    const data = await response.json();
    setMatches(data.matches);
  };

  return (
    <div className={styles.matches}>
      <div className={styles.filter}>
        <div className={styles.field}>
          <input type="text" className={styles.filter} />
        </div>
      </div>
      <div className={styles.list}>
        {matches.map((match) => (
          <EachMatch
            key={match.id}
            homeTeam={match.homeTeam.name}
            awayTeam={match.awayTeam.name}
            competition={match.competition.name}
            date={match.utcDate}
            status={match.status}
            scoreHomeTeam={match.score.fullTime.homeTeam}
            scoreAwayTeam={match.score.fullTime.awayTeam}
          />
        ))}
      </div>
    </div>
  );
}

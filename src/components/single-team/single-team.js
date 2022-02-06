import React from "react";
import styles from "./single-team.module.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TeamMatches from "../team-matches";

export default function SingleTeam() {
  const { id } = useParams();
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const url = `https://api.football-data.org/v2/teams/${id}/matches/`;
    fetch(url, {
      headers: { "X-Auth-Token": `${process.env.REACT_APP_API_TOKEN}` },
      dataType: "json",
      type: "GET",
    })
      .then((res) => res.json())
      .then((data) => setMatches(data.matches));
  }, []);

  return (
    <div className={styles.team}>
      <h2>Matches</h2>
      <div>
        {" "}
        {matches.map((match) => (
          <TeamMatches
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

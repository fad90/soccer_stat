import React from "react";
import styles from "./team-matches.module.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EachMatch from "../each-match";

export default function TeamMatches({}) {
  const { id } = useParams();
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    const url = `https://api.football-data.org/v2/teams/${id}/matches`;
    fetch(url, {
      headers: { "X-Auth-Token": `${process.env.REACT_APP_API_TOKEN}` },
      dataType: "json",
      type: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setMatches(data.matches);
        console.log(data.matches);
      });
  }, []);
  const dateOptions = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  function getDate(str) {
    var date = new Date(str);
    return date.toLocaleString("ru", dateOptions);
  }

  return (
    <div className={styles.match}>
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
  );
}

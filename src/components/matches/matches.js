import React from "react";
import { useState, useEffect } from "react";
import styles from "./matches.module.scss";
import EachMatch from "../each-match";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as getFunctions from "../../fetch";

export default function Matches() {
  const [matches, setMatches] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    getFunctions
      .getAllMatches()
      .then((data) => {
        setMatches(data.matches);
      })
      .catch((err) => {
        console.error("Could not fetch", err);
      });
  }, []);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const dateOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  const arrayStartDate = new Date(startDate)
    .toLocaleString("ru", dateOptions)
    .split(".");
  const newStartDate = `${arrayStartDate[2]}-${arrayStartDate[1]}-${arrayStartDate[0]}`;

  const arrayEndDate = new Date(endDate)
    .toLocaleString("ru", dateOptions)
    .split(".");
  const newEndDate = `${arrayEndDate[2]}-${arrayEndDate[1]}-${arrayEndDate[0]}`;

  const getFilteredMatches = async () => {
    const url = `https://api.football-data.org/v2/matches?dateFrom=${newStartDate}&dateTo=${newEndDate}`;
    const filteredResponse = await fetch(url, {
      headers: { "X-Auth-Token": `${process.env.REACT_APP_API_TOKEN}` },
      dataType: "json",
      type: "GET",
    });
    const data = await filteredResponse.json();
    setMatches(data.matches);
  };

  return (
    <div className={styles.matches}>
      <div className={styles.filter}>
        <p className={styles.filter_title}>Filter</p>
        <div className={styles.field}>
          <DatePicker
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
          />
        </div>
        <button className={styles.filter_button} onClick={getFilteredMatches}>
          Search
        </button>
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

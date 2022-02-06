import React from "react";
import { useState, useEffect } from "react";
import styles from "./matches.module.scss";
import EachMatch from "../each-match";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Matches() {
  const [matches, setMatches] = useState([]);
  const [value, setValue] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

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

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const dateOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }
  
  const arrayStartDate = new Date(startDate).toLocaleString("ru", dateOptions).split('.');
  const newStartDate = `${arrayStartDate[2]}-${arrayStartDate[1]}-${arrayStartDate[0]}`

  const arrayEndDate = new Date(endDate).toLocaleString("ru", dateOptions).split('.');
  const newEndDate = `${arrayEndDate[2]}-${arrayEndDate[1]}-${arrayEndDate[0]}`

  const getFilteredMatches = async () => {
    
    const url = `https://api.football-data.org/v2/matches?dateFrom=${newStartDate}&dateTo=${newEndDate}`;
    const filteredResponse = await fetch(url, {
      headers: { "X-Auth-Token": "1d1dfaa89dd54c15bcef0e7fae063627" },
      dataType: "json",
      type: "GET",
    });
    const data = await filteredResponse.json();
    setMatches(data.matches)
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

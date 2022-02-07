import React from "react";
import styles from "./team-matches.module.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EachMatch from "../each-match";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function TeamMatches({}) {
  const { id } = useParams();
  const [matches, setMatches] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

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

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  const arrayStartDate = new Date(startDate)
    .toLocaleString("ru", options)
    .split(".");
  const newStartDate = `${arrayStartDate[2]}-${arrayStartDate[1]}-${arrayStartDate[0]}`;

  const arrayEndDate = new Date(endDate)
    .toLocaleString("ru", options)
    .split(".");
  const newEndDate = `${arrayEndDate[2]}-${arrayEndDate[1]}-${arrayEndDate[0]}`;

  const getFilteredMatches = async () => {
    const url = `https://api.football-data.org/v2/teams/${id}/matches?dateFrom=${newStartDate}&dateTo=${newEndDate}`;
    const filteredResponse = await fetch(url, {
      headers: { "X-Auth-Token": `${process.env.REACT_APP_API_TOKEN}` },
      dataType: "json",
      type: "GET",
    });
    const data = await filteredResponse.json();
    setMatches(data.matches);
  };

  return (
    <div className={styles.container}>
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
    </div>
  );
}

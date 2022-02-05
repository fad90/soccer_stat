import React from "react";
import { useState, useEffect } from "react";
import styles from "./competitions.module.scss";
import EachCompetition from "../each-competition";

export default function Competitions() {
  const [competitions, setCompetitions] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    getCompetitions("https://api.football-data.org/v2/competitions");
  }, []);

  const getCompetitions = async (url) => {
    const response = await fetch(url, {
      headers: { "X-Auth-Token": "1d1dfaa89dd54c15bcef0e7fae063627" },
      dataType: "json",
      type: "GET",
    });
    const data = await response.json();
    setCompetitions(data.competitions);
  };

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const search = (e) => {
    e.preventDefault();
    const newArray = competitions.filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase());
    });
    setCompetitions(newArray);
  };

  return (
    <>
      <form className={styles.search_form} onSubmit={search}>
        <input
          className={styles.search_bar}
          type="text"
          value={value}
          onChange={changeHandler}
        />
        <button className={styles.search_button}>Search</button>
      </form>
      <div className={styles.competitions}>
        {competitions.map((competition) => (
          <EachCompetition
            key={competition.id}
            name={competition.name}
            area={competition.area.name}
          />
        ))}
      </div>
    </>
  );
}

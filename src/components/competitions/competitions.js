import React from "react";
import { useState, useEffect } from "react";
import styles from "./competitions.module.scss";
import EachCompetition from "../each-competition";
import * as getFunctions from "../../fetch";

export default function Competitions() {
  const [competitions, setCompetitions] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    getFunctions
      .getAllCompetitions()
      .then((data) => {
        setCompetitions(data.competitions);
      })
      .catch((err) => {
        console.error("Could not fetch", err);
      });
  }, []);

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

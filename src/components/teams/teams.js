import React from "react";
import { useState, useEffect } from "react";
import styles from "./teams.module.scss";
import EachTeam from "../each-team";
import * as getFunctions from "../../fetch";

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    getFunctions.getAllTeams().then((data) => {
      setTeams(data.teams);
    });
  }, []);

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const search = (e) => {
    e.preventDefault();
    const newArray = teams.filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase());
    });
    setTeams(newArray);
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
      <div className={styles.teams}>
        {teams.map((team) => (
          <EachTeam
            key={team.id}
            name={team.name}
            logo={team.crestUrl}
            tla={team.tla}
            founded={team.founded}
            clubColors={team.clubColors}
            venue={team.venue}
            address={team.address}
            website={team.website}
            email={team.email}
            phone={team.phone}
          />
        ))}
      </div>
    </>
  );
}

import React from "react";
import styles from "./each-competition.module.scss";

export default function EachCompetition({ name, area }) {
  return (
    <div className={styles.competition}>
      <h4 className={styles.name}>{name}</h4>
      <p className={styles.area}>Country: {area}</p>
    </div>
  );
}

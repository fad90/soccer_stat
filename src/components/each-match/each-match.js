import React from "react";
import styles from "./each-match.module.scss";

export default function EachMatch({
  homeTeam,
  awayTeam,
  competition,
  date,
  status,
  scoreHomeTeam,
  scoreAwayTeam
}) {
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
      <div className={styles.clubs}>
        <p className={styles.club}>{homeTeam}</p>
        <p className={styles.score}>{scoreHomeTeam}</p>
        <span>━</span>
        <p className={styles.score}>{scoreAwayTeam}</p>
        <p className={styles.club}>{awayTeam}</p>
      </div>
      <div className={styles.info}>
        <p className={styles.text}>
          <span className={styles.title}>Competiton:</span> {competition}
        </p>
        <p className={styles.text}>
          <span className={styles.title}>Date:</span> {getDate(date)}
        </p>
        <p className={styles.text}>
          <span className={styles.title}>Status:</span> {status}
        </p>
      </div>
    </div>
  );
}

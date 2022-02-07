import React from "react";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.wrapper}>
        <p className={styles.text}>
          Данный сайт предоставляет информацию о статистике ведущих европейских
          турниров по футболу
        </p>
        <p className={styles.text}>
          Статистика собрана с помощью стороннего API:{" "}
        </p>
        <a href="https://www.football-data.org/">
          https://www.football-data.org/
        </a>
        <p className={styles.text}>
          Текущий токен, полученный при регистрации на сайте{" "}
          <span>{process.env.REACT_APP_API_TOKEN}</span>
        </p>
        <p className={styles.text}>
          <span>Выполнил:</span> Фадеев Дмитрий
        </p>
        <p className={styles.text}>
          <span>Номер:</span> 8 (905) 183-05-43
        </p>
        <p className={styles.text}>
          <span>Email:</span> fadeev2990@gmail.com
        </p>
      </div>
    </div>
  );
}

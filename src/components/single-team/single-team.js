import React from "react";
import styles from "./single-team.module.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TeamMatches from "../team-matches";
import { Link } from "react-router-dom";

export default function SingleTeam() {
  const { id } = useParams();
  const [club, setClub] = useState(null);

  useEffect(() => {
    const url = `https://api.football-data.org/v2/teams/${id}`;
    fetch(url, {
      headers: { "X-Auth-Token": `${process.env.REACT_APP_API_TOKEN}` },
      dataType: "json",
      type: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setClub(data);
        console.log(data);
      });
  }, []);

  return (
    <div className={styles.team}>
      {club && (
        <div className={styles.club}>
          <div className={styles.logo}>
            <h2>{club.name}</h2>
            <img src={club.crestUrl} alt="logo" className={styles.logo_img} />
          </div>
          <div className={styles.info}>
            <p className={styles.text}>
              <span className={styles.title}>Tla:</span> {club.tla}
            </p>
            <p className={styles.text}>
              <span className={styles.title}>Founded:</span> {club.founded}
            </p>
            <p className={styles.text}>
              <span className={styles.title}>Club Colors:</span>{" "}
              {club.clubColors}
            </p>
            <p className={styles.text}>
              <span className={styles.title}>Venue:</span> {club.venue}
            </p>
            <p className={styles.text}>
              <span className={styles.title}>Address:</span> {club.address}
            </p>
            <p className={styles.text}>
              <span className={styles.title}>Website:</span> {club.website}
            </p>
            <p className={styles.text}>
              <span className={styles.title}>Email:</span> {club.email}
            </p>
            <p className={styles.text}>
              <span className={styles.title}>Phone:</span> {club.phone}
            </p>
          </div>
          <Link key={club.id} to={`/teams/${club.id}/matches`}>
            <p className={styles.matches}>{club.name} matches</p>
          </Link>
        </div>
      )}
    </div>
  );
}

import React from "react";
import styles from "./each-team.module.scss";

export default function EachTeam({
  name,
  logo,
  tla,
  founded,
  clubColors,
  venue,
  address,
  website,
  email,
  phone,
}) {
  return (
    <div className={styles.team}>
      <div className={styles.logo}>
        <h4 className={styles.name}>{name}</h4>
        <img src={logo} alt="logo" className={styles.logo_img} />
      </div>
      <div className={styles.info}>
        <p className={styles.text}>
          <span className={styles.title}>Tla:</span> {tla}
        </p>
        <p className={styles.text}>
          <span className={styles.title}>Founded:</span> {founded}
        </p>
        <p className={styles.text}>
          <span className={styles.title}>Club Colors:</span> {clubColors}
        </p>
        <p className={styles.text}>
          <span className={styles.title}>Venue:</span> {venue}
        </p>
        <p className={styles.text}>
          <span className={styles.title}>Address:</span> {address}
        </p>
        <p className={styles.text}>
          <span className={styles.title}>Website:</span>{" "}
          <a href={website} className={styles.website}>
            {website}
          </a>
        </p>
        <p className={styles.text}>
          <span className={styles.title}>Email:</span> {email}
        </p>
        <p className={styles.text}>
          <span className={styles.title}>Phone:</span> {phone}
        </p>
      </div>
    </div>
  );
}

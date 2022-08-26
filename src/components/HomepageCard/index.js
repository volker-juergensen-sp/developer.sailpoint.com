import React from "react";
import styles from "./styles.module.css";
import Link from '@docusaurus/Link';
export default function HomepageCard({link, title, image, product}) {
  const productStyles = product==='idn' ? styles.idn : styles.iiq

  return (
    <Link to={link}>
      <div className={styles.card}>
        <img className={styles.cardIcon} src={image}></img>
        <img className={styles.cardArrow} src="/homepage/arrow-right.png"></img>
        <div className={styles.cardText}>{title}</div>
        <div className={`${styles.product} ${productStyles}`}>{product}</div>
      </div>
    </Link>
  );
}

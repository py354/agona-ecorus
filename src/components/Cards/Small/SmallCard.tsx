import React from "react";

import { Link } from "react-router-dom";
import styles from "./SmallCard.module.sass";

import { Icon } from "../../Icon/Icon";

interface InfoProps {
  bigText: string;
  smallText: string;
  image: string;
  imageAlt: string;
  linkTo: string;
}

export function SmallCard({
  bigText,
  smallText,
  image,
  imageAlt,
  linkTo,
}: InfoProps) {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <div className={styles.bigText}>{bigText}</div>
        <div className={styles.smallText}>{smallText}</div>
        <Link className={styles.button} to={linkTo}>
          <Icon name="arrow" size={24} />
        </Link>
      </div>
      <div className={styles.picture}>
        <img src={image} alt={imageAlt} />
      </div>
    </div>
  );
}

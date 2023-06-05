import React from "react";
import styles from "./NotFound.module.sass";

export function NotFound() {
  return (
    <div className={styles.container}>
      Похоже, этой страницы еще не существует
    </div>
  );
}

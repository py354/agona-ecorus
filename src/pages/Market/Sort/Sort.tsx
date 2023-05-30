import React from "react"
import styles from "./Sort.module.sass"

export const Sort = () => {
    return (
        <div className={styles.block}>
            <button type="button" className={styles.white}>По популярности</button>
            <button type="button" className={styles.white}>По цене</button>
            <button type="button" className={styles.white}>По новизне</button>
        </div>
    )
}

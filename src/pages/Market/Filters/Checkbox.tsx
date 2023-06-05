import React from "react";
import styles from "./Checkbox.module.sass";

export interface Props {
    name: string;
}

export function Checkbox({ name }: Props) {
    return (
        <label className={styles.label}>
            <input type="checkbox" className={styles.label__checkBox} />
            <div className={styles.label__checkBox__icon} />
            <span className={styles.label__checkBox__text}>{name}</span>
        </label>
    );
}

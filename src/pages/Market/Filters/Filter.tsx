import React from "react";
import styles from "./Filters.module.sass";
import { Checkbox } from "./Checkbox";

interface CheckboxArrayProps {
    category: string;
    CheckboxNames: Array<string>;
}

export function CheckboxArray({ category, CheckboxNames }: CheckboxArrayProps) {
    return (
        <div className={styles.box}>
            <p className={styles.text}>{category}</p>
            <div className={styles.choose}>
                {CheckboxNames.map((checkbox: string) => (
                    <Checkbox key={checkbox} name={checkbox} />
                ))}
            </div>
        </div>
    );
}

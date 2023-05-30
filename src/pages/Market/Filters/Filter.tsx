import React from "react"
import styles from "./Filters.module.sass"
import {Checkbox} from "./Checkbox"

interface CheckboxArray {
    category: string
    CheckboxArray: Array<string>
}

export const CheckboxArray = ({category, CheckboxArray}: CheckboxArray) => {
    return (
        <div className={styles.box}>
            <p className={styles.text}>{category}</p>
            <div className={styles.choose}>
                {
                    CheckboxArray.map((checkbox: string, index: number) =>
                        <Checkbox key={index} name={checkbox}/>)
                }
            </div>
        </div>
    )
}

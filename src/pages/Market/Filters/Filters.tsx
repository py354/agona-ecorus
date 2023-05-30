import React from "react"
import {CheckboxArray} from "./Filter"
import styles from "./Filters.module.sass"

const filters1 = ["Мужской", "Женский"]
const filters2 = ["Выбрать все", "Одежда", "Обувь", "Аксессуары"]
const filters3 = ["Выбрать все", "P&B", "Adidas", "Nike", "Reebok"]

export const Filters = () => {
    return (
        <div className={styles.block}>
            <CheckboxArray category='Пол' CheckboxArray={filters1}/>
            <CheckboxArray category='Тип товара' CheckboxArray={filters2}/>
            <CheckboxArray category='Брэнд' CheckboxArray={filters3}/>
        </div>
    )
}
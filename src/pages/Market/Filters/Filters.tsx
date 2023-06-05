import React from "react";
import { CheckboxArray } from "./Filter";
import styles from "./Filters.module.sass";

const filters1 = ["Мужской", "Женский"];
const filters2 = ["Выбрать все", "Одежда", "Обувь", "Аксессуары"];
const filters3 = ["Выбрать все", "P&B", "Adidas", "Nike", "Reebok"];

export function Filters() {
  return (
    <div className={styles.block}>
      <CheckboxArray category="Пол" CheckboxNames={filters1} />
      <CheckboxArray category="Тип товара" CheckboxNames={filters2} />
      <CheckboxArray category="Брэнд" CheckboxNames={filters3} />
    </div>
  );
}

import React from "react";
import styles from "./Market.module.sass";
import { Sort } from "./Sort/Sort";
import { Filters } from "./Filters/Filters";
import { ProductList } from "./Products/ProductList";

export function Market() {
  return (
    <div className={styles.main}>
      <div className={styles.block}>
        <span className={styles.mainText}>ЭкоМаркет</span>
        <div>
          <Sort />
        </div>
      </div>
      <div className={styles.block}>
        <div>
          <Filters />
        </div>
        <ProductList />
      </div>
    </div>
  );
}

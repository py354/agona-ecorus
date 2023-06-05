import React from "react";
import styles from "./Products.module.sass";
import { Icon } from "../../../components/Icon/Icon";

export interface ProductsProps {
  img: string;
  brand: string;
  name: string;
  type: string;
  price: number;
}

export function Products({ img, brand, name, type, price }: ProductsProps) {
  return (
    <div className={styles.product}>
      <img className={styles.product__img} src={img} alt="product" />
      <div className={styles.product__brand}>{brand}</div>

      <div className={styles.product__text}>
        <span className={styles.product__text__name}>{name}</span>
        <span className={styles.product__text__type}>{type}</span>
      </div>

      <div className={styles.product__price}>
        <div>
          <Icon name="currency" />
        </div>
        <span className={styles.product__price__text}>{price}</span>
      </div>
    </div>
  );
}

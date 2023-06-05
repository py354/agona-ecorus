import React from "react";
import styles from "./Products.module.sass";
import { Products } from "./Products";
import { BalanceCard } from "./BalanceCard";

import Photo1 from "../../../assets/products/item1.png";
import Photo2 from "../../../assets/products/item2.png";
import Photo3 from "../../../assets/products/item3.png";
import Photo4 from "../../../assets/products/item4.png";
import Photo5 from "../../../assets/products/item5.png";

const productType = [
  {
    id: 1,
    img: Photo1,
    brand: "NIKE",
    name: "Nike Air Max 2021",
    type: "Мужская обувь",
    price: 1000,
  },
  {
    id: 2,
    img: Photo2,
    brand: "NIKE",
    name: "Nike Air Max 90 Premium",
    type: "Мужская обувь",
    price: 750,
  },
  {
    id: 3,
    img: Photo3,
    brand: "Adidas",
    name: "Adidas Alphabounce RC",
    type: "Мужская обувь",
    price: 1200,
  },
  {
    id: 4,
    img: Photo4,
    brand: "H&M",
    name: "Nike Air Max 2021",
    type: "Мужская обувь",
    price: 1000,
  },
  {
    id: 5,
    img: Photo5,
    brand: "NIKE",
    name: "Nike Air Force 1 Low",
    type: "Мужская обувь",
    price: 2100,
  },
];

export function ProductList() {
  return (
    <div className={styles.array}>
      <div className={styles.array}>
        <BalanceCard />
        {productType.map((product) => (
          <Products key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

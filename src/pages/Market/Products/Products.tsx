import React from "react"
import styles from "./Products.module.sass"
import {Icon} from "../../../components/Icon/Icon";

export interface ProductsProps {
    img: string
    brand: string
    name: string
    type: string
    price: number
}

export const Products = (props: ProductsProps) => {
    return (
        <div className={styles.product}>
            <img className={styles.product__img} src={props.img} alt={"product"}/>
            <div className={styles.product__brand}>
                {props.brand}
            </div>

            <div className={styles.product__text}>
                <span className={styles.product__text__name}>{props.name}</span>
                <span className={styles.product__text__type}>{props.type}</span>
            </div>

            <div className={styles.product__price}>
                <div>
                    <Icon name={"currency"}/>
                </div>
                <span className={styles.product__price__text}>{props.price}</span>
            </div>

        </div>
    )
}
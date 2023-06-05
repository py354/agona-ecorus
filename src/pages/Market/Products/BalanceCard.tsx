import React from "react";
import styles from "./BalanceCard.module.sass";
import { Icon } from "../../../components/Icon/Icon";

export function BalanceCard() {
  return (
    <div className={styles.balance}>
      <div className={styles.balance__text}>
        <div className={styles.balance__text__one}>
          <div className={styles.balance__text__one__price1}>
            На вашем балансе
          </div>
          <div className={styles.balance__text__one__img}>
            <Icon width={15} name="currency" />
          </div>
          <div className={styles.balance__text__one__price2}>200</div>
        </div>

        <div className={styles.balance__text__two}>
          Вы можете обменять их на скидку 200 руб.
        </div>
      </div>

      <div className={styles.balance__button}>
        <button type="button" className={styles.balance__button__but}>
          Получить промокод
        </button>
      </div>
    </div>
  );
}

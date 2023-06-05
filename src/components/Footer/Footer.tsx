import React from "react";

import styles from "./Footer.module.sass";

import { Icon } from "../Icon/Icon";

export function Footer() {
    return (
        <div className={styles.container}>
            <footer className={styles.footer}>
                <div className={styles.gmail}>
                    <div className={styles.emailImg}>
                        <Icon name="email" />
                    </div>
                    <a href="mailto:info@ecorus.ru" className={styles.text}>
                        info@ecorus.ru
                    </a>
                </div>
                <div className={styles.phone}>
                    <div className={styles.phoneImg}>
                        <Icon name="phone" />
                    </div>
                    <a href="tel:+78008808888" className={styles.text}>
                        +7 (800) 880-88-88
                    </a>
                </div>
            </footer>
        </div>
    );
}

import React from "react";

import styles from "./Arrow.module.sass";

import { Icon } from "../Icon/Icon";

export function Arrow({ type }: { type: string }) {
    return (
        <div className={styles.container}>
            <Icon name={type} width={8} height={14} />
        </div>
    );
}

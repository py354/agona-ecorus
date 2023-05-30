import React from 'react'

import styles from './BigCard.module.sass'
import {Link} from "react-router-dom";

export interface cardProps {
    bigText: string;
    smallText: string;
    image: string;
    imageAlt: string;
    textButton: string;
    color: string
    linkTo: string
}

export const BigCard = (props: cardProps) => {
    return (
        <div className={styles.banner} style={{backgroundColor: props.color}}>
            <div className={styles.container}>
                <div className={styles.bigText}>{props.bigText}</div>
                <div className={styles.smallText}>{props.smallText}</div>
                <Link to={props.linkTo}>
                    <button className={styles.info}>{props.textButton}</button>
                </Link>
            </div>
            <div className={styles.picture}><img src={props.image} alt={props.imageAlt}/></div>
        </div>
    )
}

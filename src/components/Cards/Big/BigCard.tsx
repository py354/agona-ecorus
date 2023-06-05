import React from "react";

import { Link } from "react-router-dom";
import styles from "./BigCard.module.sass";

export interface CardProps {
    bigText: string;
    smallText: string;
    image: string;
    imageAlt: string;
    textButton: string;
    color: string;
    linkTo: string;
}

export function BigCard({
	bigText,
	smallText,
	image,
	imageAlt,
    textButton,
	color,
    linkTo,
}: CardProps) {
	return (
		<div className={styles.banner} style={{ backgroundColor: color }}>
            <div className={styles.container}>
				<div className={styles.bigText}>{bigText}</div>
				<div className={styles.smallText}>{smallText}</div>
				<Link to={linkTo}>
					<button className={styles.info}>{textButton}</button>
                </Link>
			</div>
			<div className={styles.picture}>
				<img src={image} alt={imageAlt} />
            </div>
        </div>
	);
}

import React from 'react'

import styles from './Arrow.module.sass'

import { Icon } from '../Icon/Icon'

export const Arrow = (props: {type: string}) => {
    return (
        <div className={styles.container}>
        <Icon name={props.type} width={8} height={14}/>
    </div>
)
}

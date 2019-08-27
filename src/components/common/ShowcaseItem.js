import React from 'react';
import styles from "./showcase.css"

export const ShowcaseItem = (props) => {
    const {title, children} = props
    return (
        <div className={styles.row}>
            <div className={styles.column}>{title}</div>
            <div className={styles.column}>{children}</div>
        </div>
    )
}


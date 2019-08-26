import React from "react"
import styles from "./Button.css"
import classNames from "classnames"

export const TYPES = {
    PRIMARY: 'primary',
    WARNING: 'warning',
    DANGER: 'danger',
    SUCCESS: 'success',
    DISABLED: 'disabled',
    INFO: 'info'
}

export const Button = (props) => (
    <button
        type={props.type}
        disabled={props.disabled || false}
        onClick={props.onclick}
        className={classNames(styles.button, styles.buttonText, styles[props.buttonType || TYPES.PRIMARY])}>
        BUTTON
    </button>
)
export default Button

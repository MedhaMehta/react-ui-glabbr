import React from "react"
import styles from "./Button.css"
import classNames from "classnames"
import propTypes from "prop-types"

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
        disabled={props.disabled}
        onClick={props.onclick}
        className={classNames(styles.button, styles.buttonText, styles[props.buttonType])}>
        BUTTON
    </button>
)

Button.defaultProps = {
    disabled: false,
    className: [TYPES.PRIMARY]
}
Button.propTypes = {
    disabled: propTypes.bool
}
export default Button

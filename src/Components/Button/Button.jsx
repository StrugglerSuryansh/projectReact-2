import React from 'react'
import styles from "./Button.module.css";

const Button = ({ isOutline, text, icon, ...rest }) => {
    return (

        <button
            {...rest}
            className={isOutline ? styles.outline_button : styles.primary_button}>
            {icon}
            {text}
        </button>

    )
}

export default Button
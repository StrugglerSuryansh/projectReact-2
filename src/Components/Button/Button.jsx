import React from 'react'
import styles from "./Button.module.css";

const Button = (props) => {
    return (
        <button className={`${styles.primary_button}`}>
            {props.icon}
            {props.text}
        </button>
    )
}

export default Button
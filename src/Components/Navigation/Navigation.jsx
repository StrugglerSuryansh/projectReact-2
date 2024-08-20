import React from 'react'
import styles from './Navigation.module.css'
const Navigation = () => {
    return (
        <nav className='`${styles.nav}` container'>
            <div className='logo'>
                <img src="/images/logo.png" alt="" />
            </div>

            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact us</li>
            </ul>

        </nav>
    )
}

export default Navigation

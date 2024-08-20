import React from 'react'
import './Contact.module.css'
import Button from '../Button/Button'
import { MdMessage } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const ContactForm = () => {
    return (
        <div>
            <section className='`${styles.container}` container'>
                <div className='{styles.contactForm'>

                    <div className='{styles.top_button'>
                        <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize='24px' />} />
                        <Button text="Via Call" icon={<FaPhone fontSize='24px' />} />
                    </div>
                    <Button text="Via Email Form" icon={<FaPhone fontSize='24px' />} />

                </div>
                <div className='{styles.contactImage}'>

                </div>
            </section>
        </div>
    )
}

export default ContactForm

import Button from "../Button/Button";
import styles from "./Contact.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";


const ContactForm = () => {

    const [name, setname] = useState("name")
    const [email, setemail] = useState("email")
    const [text, settext] = useState("text")


    const onSubmit = (event) => {




        event.preventDefault();

        setname(event.target[0].value)
        setemail(event.target[1].value)
        settext(event.target[2].value)




    }


    return (
        <section className={styles.container}>
            <div className={styles.contactForm}>
                <div className={styles.top_button}>
                    <Button
                        text="VIA SUPPORT CHAT"
                        icon={<MdMessage fontSize="24px" />}
                    />
                    <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
                </div>
                <Button
                    isOutline={true}
                    text="VIA EMAIL FORM"
                    icon={<HiMail fontSize="24px" />}
                />

                <form onSubmit={onSubmit}>
                    <div className={styles.formControl}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" />
                    </div>
                    <div className={styles.formControl}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" />
                    </div>
                    <div className={styles.formControl}>
                        <label htmlFor="text">Text</label>
                        <textarea name="text" rows="8" />
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "end",
                    }}>
                        <Button text="Submit" />

                    </div>
                    <div>
                        {name + " " + email + " " + text}
                    </div>
                </form>
            </div>
            <div className={styles.contact_image}>
                <img src="/images/girl.svg" alt="contact image" />
            </div>
        </section>
    );
};

export default ContactForm;
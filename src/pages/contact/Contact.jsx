import React from 'react';
import styles from "./index.module.css";

const Contact = () => {
    return (
        <section className={styles.section} id="contact">
            <h2 className={styles.section__title}>Get in touch</h2>
            <span className="section__subtitle">Contact Fortunaé IT Solutions</span>

            <div className={styles.contact__container}>
                <div className={styles.contact__info}>
                    <div className={styles.contact__card}>
                        <i className={`bx bx-mail-send ${styles.contact__card_icon}`}></i>
                        <h3 className={styles.contact__card_title}>Email Address</h3>
                        <span className={styles.contact__card_data}>Fortunaefilms@gmail.com</span>
                        <a href="mailto:Fortunaefilms@gmail.com" className={styles.contact__button}>
                            Write Fortunaé IT Solutions
                            <i className={`bx bx-right-arrow-alt ${styles.contact__button_icon}`}></i>
                        </a>
                    </div>
                    <div className={styles.contact__card}>
                        <i className={`bx bxl-home ${styles.contact__card_icon}`}></i>
                        <h3 className={styles.contact__card_title}>Office Address</h3>
                        <span className={styles.contact__card_data}>Manchester, United Kingdom</span>
                        <a href="mailto:Fortunaefilms@gmail.com" className={styles.contact__button}>
                            Write Fortunaé IT Solutions
                            <i className={`bx bx-right-arrow-alt ${styles.contact__button_icon}`}></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

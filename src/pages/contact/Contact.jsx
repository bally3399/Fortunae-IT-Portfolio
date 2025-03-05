import React from "react";
import styles from "./index.module.css";

const ContactForm = () => {
    return (
        <div className={styles.contactContainer}>
            <div className={styles.contactLeft}>
                <h2>GET IN TOUCH</h2>
                <p>
                    Let's discuss! Get in touch with Fortune IT. Let's Build Something
                    Great Together.
                </p>
                <h3>COMMON FAQs</h3>
                <p>
                    Find quick answers to common questions about our process, services,
                    and consultations before booking your meeting.
                </p>
                <h4>See all</h4>
                <h3>Other ways to reach us</h3>
                <p>Send us an email</p>
                <a href="mailto:Fortuneitlines@gmail.com">Fortuneitlines@gmail.com</a>
                <p>Find us</p>
                <h4>Manchester, United Kingdom</h4>
                <br />
                <h4>Get directions</h4>
            </div>

            <div className={styles.contactRight}>
                <div className={styles.contactForm}>
                    <h3>Got A Message?</h3>
                    <p>Please fill out the input box below to get in touch with us!</p>
                    <form>
                        <div className={styles.inputGroup}>
                            <input type="text" placeholder="First name" />
                            <input type="text" placeholder="Last name" />
                        </div>
                        <input type="email" placeholder="Email address" className={styles.fullWidth} />
                        <input type="tel" placeholder="+234  Phone number" className={styles.fullWidth} />
                        <textarea placeholder="Type your message here"></textarea>
                        <button type="submit">Send message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;

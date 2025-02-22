import React from "react";
import styles from "./index.module.css";

const Info = () => {
    return (
        <div className={styles.about__info}>
            <div className={styles.about__box}>
                <i className={`bx bx-award ${styles.about__icon}`}></i>
                <h3 className={styles.about__title}>Our Expertise</h3>
                <p className={styles.about__description}>
                    At Fortunaé IT Solutions, we leverage the latest advancements in technology to
                    deliver world-class solutions. Our core competencies include:
                </p>
                <div className={styles.about__list}>
                    <li><strong>Custom Software Development</strong> – Web, mobile, and enterprise applications built
                        for performance and scalability.
                    </li>
                    <li><strong>Cloud Solutions & DevOps</strong> – AWS, Azure, and Google Cloud services for secure and
                        optimized cloud infrastructure.
                    </li>
                    <li><strong>Cybersecurity & Compliance</strong> – Protecting businesses with top-tier security
                        measures and industry compliance.
                    </li>
                    <li><strong>IT Consulting & Digital Transformation</strong> – Helping companies modernize their
                        operations with smart, data-driven strategies.
                    </li>
                </div>
            </div>


            <div className={styles.about__box}>
                <i className={`bx bx-code-alt ${styles.about__icon}`}></i>
                <h3 className={styles.about__title}>Why Choose Us</h3>
                <div className={styles.about__list}>
                    <li>
                        <strong>Innovative Approach</strong>– We utilize modern frameworks and agile methodologies to deliver solutions efficiently.
                    </li>
                    <li>
                        <strong>Scalability & Security</strong> – Our solutions are built to grow your business while ensuring top-level security.
                    </li>
                    <li>
                        <strong>Expert Team</strong> – A diverse group of skilled professionals specializing in software engineering, cloud computing, and IT strategy.
                    </li>
                    <li>
                        <strong>Client-Centric Solutions</strong> – We tailor our services to meet each client’s unique business needs, ensuring maximum value and impact.
                    </li>
                </div>
            </div>

            <div className={styles.about__box}>
                <i className={`bx bx-support ${styles.about__icon}`}></i>
                <h3 className={styles.about__title}>Company History</h3>
                <span className={styles.about__list}>
                   Fortunaé IT Solutions began as a small team of passionate developers and IT professionals committed to delivering high-quality digital solutions. Recognizing the growing demand for scalable software, cloud solutions, and IT consulting, we expanded our expertise to serve businesses across multiple industries.
                    Over the years, we have built a reputation for innovation, reliability, and excellence, helping companies optimize their technology infrastructure and embrace digital transformation. Today, Fortunaé IT Solutions continues to grow, providing cutting-edge solutions tailored to the evolving needs of businesses worldwide.
                </span>
            </div>
        </div>
    );
}

export default Info;

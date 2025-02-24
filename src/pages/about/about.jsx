import React from "react";
import styles from "./index.module.css";
import Info from "./info";


const About = () => {
    return (
        <section className={styles.section} id="about">
            <h2 className={styles.section__title}>About Fortunaé IT Solutions</h2>
            <span className="section__subtitle">Introduction</span>

            <div className={styles.about__container}>
                <div className={styles.about__data}>
                    <Info/>
                     <div className={styles.about__description}>
                            <h1>
                                Let’s Build the Future Together
                            </h1>
                            At Fortunaé IT Solutions, we don’t just create technology—we craft experiences that drive
                            businesses forward. Whether you need a custom application, a cloud-based infrastructure, or
                            expert IT consulting, we are here to help.
                        </div>
                        <div className={styles.__industry}>
                            <h1>
                                Industries We Serve
                            </h1>
                            <p>
                                We work across multiple industries, including:
                            </p>
                            <li>
                                Finance & FinTech
                            </li>
                            <li>
                                Healthcare & MedTech
                            </li>
                            <li>
                                E-commerce & Retail
                            </li>
                            <li>
                                Real Estate & Property Management
                            </li>
                            <li>
                                Education & E-learning
                            </li>
                        </div>
                    </div>

                </div>

        </section>
    )
}

export default About;

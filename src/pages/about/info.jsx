import React from "react";
import styles from "./index.module.css";
import Image from "../../assets/Frame 8.png";
import Image1 from "../../assets/Frame 8 (1).png";
import Image2 from "../../assets/Frame 8 (2).png";
import Image3 from "../../assets/itConsulting.webp";
import security from "../../assets/Vector (8).png";
import client from "../../assets/lets-icons_check-fill.png";
import innovative from"../../assets/hugeicons_bulb.png";
import Team from "../../assets/Vector (9).png"

const ExpertisePage = () => {
    return (
        <div className={styles.container}>
            <section className={styles.expertiseContainer}>
                <h1 className={styles.expertiseTitle}>OUR EXPERTISE</h1>
                <p className={styles.expertiseSubtitle}>
                    At Fortunae IT Solutions, we leverage the latest advancements in technology to deliver world-class
                    solutions. <span style={{display: 'block'}}>Our core competencies include</span>
                </p>
                <div className={styles.expertiseGrid}>
                    <div className={styles.expertiseCard}>
                        <img src={Image} alt="Custom Software" className={styles.expertiseImage}/>
                        <h3 className={styles.expertiseCardTitle}>Custom Software</h3>
                        <p className={styles.expertiseCardText}>
                            Web, mobile, and enterprise applications built for performance and scalability.
                        </p>
                    </div>
                    <div className={styles.expertiseCard}>
                        <img src={Image1} alt="Cloud Solutions" className={styles.expertiseImage}/>
                        <h3 className={styles.expertiseCardTitle}>Cloud Solutions & DevOps</h3>
                        <p className={styles.expertiseCardText}>
                            AWS, Azure, and Google Cloud services for secure and optimized cloud infrastructure.
                        </p>
                    </div>
                    <div className={styles.expertiseCard}>
                        <img src={Image2} alt="Cybersecurity" className={styles.expertiseImage}/>
                        <h3 className={styles.expertiseCardTitle}>Cybersecurity & Compliance</h3>
                        <p className={styles.expertiseCardText}>
                            Protecting businesses with top-tier security measures and industry compliance.
                        </p>
                    </div>
                    <div className={styles.expertiseCard}>
                        <img src={Image3} alt="IT Consulting" className={styles.expertiseImage}/>
                        <h3 className={styles.expertiseCardTitle}>IT Consulting & Digital Transformation</h3>
                        <p className={styles.expertiseCardText}>
                            Helping companies modernize their operations with smart, data-driven strategies.
                        </p>
                    </div>
                </div>
            </section>
            <section className={styles.industries}>
                <div className={styles.industriesHeader}>
                    <h2>INDUSTRIES WE SERVE</h2>
                    <p>We work across multiple industries, including</p>
                </div>
                <div className={styles.industriesGrid}>
                    <div className={styles.industryBox}>
                        <p>Finance & <span style={{display: 'block', paddingLeft: '2px'}}>FinTech</span></p>
                    </div>
                    <div className={styles.industryBox}>
                        <p>Healthcare & <span style={{display: 'block', paddingLeft: '2px'}}>MedTech</span></p>
                    </div>
                    <div className={styles.industryBox}>
                        <p>E-commerce & <span style={{display: 'block', paddingLeft: '2px'}}>Retail</span></p>
                    </div>
                    <div className={styles.industryBox}>
                        <p>Education & <span style={{display: 'block', paddingLeft: '2px'}}>E-learning</span></p>
                    </div>
                </div>
                <div className={styles.industryBox}>
                    <p>Real Estate & Property <span style={{display: 'block', paddingLeft: '2px'}}>Management</span></p>
                </div>
            </section>

            <section className={styles.whyChooseUs}>
                <h2>WHY CHOOSE US?</h2>
                <p>At Fortunaé IT Solutions, we don’t just create technology—we craft experiences that drive businesses
                    forward. Whether you need a custom application, a cloud-based infrastructure, or expert IT
                    consulting, we are here to help.</p>
                <div className={styles.features}>
                    <div className={styles.feature}>
                        <img src={security} alt="Scalability & Security"/>
                        <h3>Scalability & Security</h3>
                        <p>Our solutions are built to grow your business while ensuring top-level security.</p>
                    </div>
                    <div className={styles.feature}>
                        <img src={client} alt="Client-Centric Solutions"/>
                        <h3>Client-Centric Solutions</h3>
                        <p>Our solutions are built to grow your business while ensuring top-level security.</p>
                    </div>
                    <div className={styles.feature}>
                        <img src={innovative} alt="Innovative Approach"/>
                        <h3>Innovative Approach</h3>
                        <p>We utilize modern frameworks and agile methodologies to deliver solutions efficiently.</p>
                    </div>
                    <div className={styles.feature}>
                        <img src={Team} alt="Expert Team"/>
                        <h3>Expert Team</h3>
                        <p>A diverse group of skilled professionals specializing in software engineering, cloud
                            computing,
                            and IT strategy.</p>
                    </div>
                </div>
                <div>
                    <a href="#contact" className="button button__flex">
                        Reach Out to us
                        <svg
                            className="button__icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                                fill="var(--container-color)"
                            ></path>
                            <path
                                d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                                fill="var(--container-color)"
                            ></path>
                        </svg>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default ExpertisePage;
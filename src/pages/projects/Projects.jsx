import React, { useState } from 'react';
import styles from './index.module.css'

const ServiceModal = ({ toggleTab, toggleState, index, title, description, projects }) => {
    return (
        <div className={toggleState === index ? `${styles.services__modal} ${styles.active_modal}` : styles.services__modal}>
            <div className={styles.services__modal_content}>
                <i onClick={() => toggleTab(0)} className={`uil uil-times ${styles.services__modal_close}`}></i>
                <h3 className={styles.services__modal_title}>{title}</h3>
                <p className={styles.services__modal_description}>{description}</p>

                <h4>Projects</h4>
                <ul className={styles.services__modal_projects}>
                    {projects.map((project, i) => (
                        <li key={i} className={styles.services__modal_project}>
                            <i className={`uil uil-folder ${styles.services__modal_icon}`}></i>
                            <p className={styles.services__modal_info}>
                                {project.projectName} -{" "}
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                    View Project
                                </a>
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


const ServiceContent = ({ icon, title, toggleTab, index }) => {
    return (
        <div className={styles.services__content}>
            <div>
                <i className={`uil ${icon} ${styles.services__icon}`}></i>
                <h3 className={styles.services__title}>{title}</h3>
            </div>
            <span className={styles.services__button} onClick={() => toggleTab(index)}>
                View More
                <i className={`uil uil-arrow-right ${styles.services__button_icon}`}></i>
            </span>
        </div>
    );
};

const Projects = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const serviceData = [
        {
            title: "Live Fullstack Project (Deployed)",
            description: "The Fortunae Admin Dashboard for a SaaS Platform." +
                "This project showcases a full-stack Admin Dashboard designed " +
                "for a SaaS platform, featuring user authentication, " +
                "role-based access control, CRUD operations, real-time analytics, " +
                "and modern UI/UX design. Built with React.js, Java using Spring boot, " +
                "and MongoDB, the dashboard provides seamless user management and" +
                " data visualization. The frontend is deployed on Vercel/Netlify, " +
                "while the backend is hosted on AWS. This project highlights " +
                "efficient API integration, responsive design, and scalable cloud " +
                "deployment, demonstrating expertise in modern web development.",
            icon: "uil-layers",
            projects: [
                {
                    projectName: "Admin Dashboard",
                    githubLink: ""
                }
            ]
        },

        {
            "title": "Live Fullstack Project (Deployed)",
            "description": "Developed a modern hotel booking application " +
                "that provides a seamless and efficient booking experience" +
                " for travelers. The platform enables users to search for hotels," +
                " view details, make reservations," +
                " and manage bookings with ease. It integrates advanced " +
                "features to enhance user experience and streamline hotel management.",
            "icon": "uil-layers",
            "projects": [
                {
                    "projectName": "Hotel Booking App",
                    "githubLink": ""
                }
            ]
        },


        {
            title: "Live Fullstack Project (Deployed)",
            description: "The Fortunae Library Management System API is a backend" +
                " application built using .NET Core with Clean Architecture principles. It provides a RESTful API for managing books, users, " +
                "and borrowing activities in an online library system.",
            icon: "uil-layers",
            projects: [
                {
                    projectName: "Library Management System",
                    githubLink: ""
                }
            ]
        },


    ];

    return (
        <section className={styles.section} id="projects">
            <h2 className={styles.section__title}>Projects</h2>

            <div className={styles.services__container}>
                {serviceData.map((service, index) => (
                    <React.Fragment key={index}>
                        <ServiceContent
                            icon={service.icon}
                            title={service.title}
                            toggleTab={toggleTab}
                            index={index + 1}
                        />
                        <ServiceModal
                            toggleTab={toggleTab}
                            toggleState={toggleState}
                            index={index + 1}
                            title={service.title}
                            description={service.description}
                            projects={service.projects}
                        />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};
export default Projects

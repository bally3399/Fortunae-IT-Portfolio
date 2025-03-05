import React, { useState } from 'react';
import styles from './index.module.css';
import projectImage from '../../assets/Frame 8.png';
import {Link} from "react-router-dom";

const ServiceModal = ({ isOpen, toggleModal, title, description, projects }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.services__modal}>
            <div className={styles.services__modal_content}>
                <i onClick={toggleModal} className={`uil uil-times ${styles.services__modal_close}`}></i>
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


const ProjectsSection = () => {
    const [toggleState, setToggleState] = useState(false);

    const projectsData = [
        {
            title: "Live Fullstack Project (Deployed)",
            description: "Description for Project 1",
            projects: [{ projectName: "Project 1", githubLink: "" }]
        },
        {
            title: "Live Fullstack Project (Deployed)",
            description: "Description for Project 2",
            projects: [{ projectName: "Project 2", githubLink: "" }]
        },
        {
            title: "Live Fullstack Project (Deployed)",
            description: "Description for Project 3",
            projects: [{ projectName: "Project 3", githubLink: "" }]
        },
    ];

    const toggleModal = (index) => {
        setToggleState(index);
    };

    return (
        <section className={styles.projectsSection}>
            <h2>View Our Projects</h2>
            <p>Discover Our Diverse Portfolio of Innovative Designs and Transformative Projects</p>
            <div className={styles.projectsContainer}>
                {projectsData.map((project, index) => (
                    <div key={index} className={styles.projectCard}>
                        <img src={projectImage} alt="Project" className={styles.projectImage}/>
                        <h3>{project.title}</h3>
                        <Link to={""} className={styles.learnMore} onClick={() => toggleModal(index)}>Learn more &gt;</Link>
                    </div>
                ))}
            </div>

            <div className={styles.services__container}>
                {projectsData.map((service, index) => (
                    <React.Fragment key={index}>
                        <ServiceModal
                            toggleTab={toggleModal}
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

export default ProjectsSection;
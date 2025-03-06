import React, { useState } from 'react';
import styles from './index.module.css';
import Image from "../../assets/Frame 8.png";
const projectData = [
    {
        id: 1,
        title: 'Live Fullstack Project (Deployed)',
        name: 'Fortunae 3D Cloth Branding App',
        description: 'A 3D cloth branding website where you can ' +
            'choose the color and shade of your cloth.' +
            ' Built using Vite, React',
        link: 'https://ai-saas-website-6snp.vercel.app',
        image: Image
    },
    {
        id: 2,
        title: 'Live Fullstack Project (Deployed)',
        name: 'Fortunae Foundit',
        description: 'A streamlined job portal app built with a' +
            ' Node.js backend and Vite-React frontend, ' +
            'where employers can post jobs and jobseekers can easily apply.',
        link: 'https://job-portal-theta-inky.vercel.app',
        image: Image
    },
    {
        id: 3,
        title: 'Live Fullstack Project (Deployed)',
        name: 'Fortunae Library Management',
        description: 'A 3D cloth branding website where you can choose the color and shade of your cloth. Built using Vite, React',
        link: 'https://example.com/project-gamma',
        image: Image
    },
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <div className={styles.projectsContainer}>
            <h1 className={styles.projectsHeading}>View Our Projects</h1>
            <p className={styles.projectsSubheading}>
                Discover Our Diverse Portfolio of Innovative Designs and Transformative Projects
            </p>
            <div className={styles.projectsGrid}>
                {projectData.map((project) => (
                    <div key={project.id} className={styles.projectCard}>
                        <img src={project.image} alt={project.name} className={styles.projectImage} />
                        <h3 className={styles.projectTitle}>{project.title}</h3>
                        <button className={styles.learnMoreBtn} onClick={() => openModal(project)}>
                            Learn more →
                        </button>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
            <span className={styles.modalClose} onClick={closeModal}>
              &times;
            </span>
                        <h2>{selectedProject.title}</h2>
                        <h3>{selectedProject.name}</h3>
                        <p>{selectedProject.description}</p>
                        <a
                            href={selectedProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            View Project
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
import React, { useState } from 'react';
import styles from './index.module.css';
import Image from "../../assets/3DHeader.png";
import HotelImage from "../../assets/hotelHeader.png"
import AdminImage from "../../assets/adminHeader.png"
const projectData = [
    {
        id: 1,
        title: 'Fortunae 3D Cloth Branding App',
        name: 'Fortunae 3D Cloth Branding App',
        description: 'A 3D cloth branding website where you can ' +
            'choose the color and shade of your cloth.' +
            ' Built using Vite, React',
        link: 'https://ai-saas-website-6snp.vercel.app',
        image: Image
    },
    {
        id: 2,
        title: 'FortunaeIT Admin Dashboard',
        name: 'FortunaeIT Admin Dashboard',
        description: 'The SaaS Admin Dashboard is a full-stack web application' +
            ' developed to demonstrate a team’s expertise in building modern, ' +
            'scalable software solutions. Designed for a Software-as-a-Service platform,' +
            ' the project features a responsive frontend built with React.js and styled ' +
            'using Material UI and Tailwind CSS, alongside a robust backend built with java (Spring boot)' +
            ' and MongoDB. Key functionalities include JWT-based user authentication with' +
            ' role-based access control',
        link: 'https://www.fortunaeitadmindashboard.com',
        image: AdminImage
    },
    {
        id: 3,
        title: 'FortunaeIT Hotel Booking Management',
        name: 'FortunaeIT Hotel Booking Management',
        description: 'The Hotel Management System is a full-stack application' +
            ' built with Java Spring Boot for the backend and React for the ' +
            'frontend. It streamlines hotel operations by enabling room browsing,' +
            ' booking management, and guest tracking. Spring Boot powers RESTful APIs' +
            'and integrates with MySQL via Spring Data JPA, while React delivers a ' +
            'responsive UI with dynamic room listings and booking pages',
        link: 'https://www.fortunaeithotelapp.com',
        image: HotelImage
    },
    // {
    //     id: 4,
    //     title: 'FortunaeIT Library Management System',
    //     name: 'FortunaeIT Library Management System',
    //     description: 'The Library Management System is a full-stack' +
    //         ' application developed using Java Spring Boot for ' +
    //         'the backend and React for the frontend. It simplifies' +
    //         ' library operations by facilitating book cataloging, ' +
    //         'borrowing, and user management. Spring Boot drives RESTful' +
    //         ' APIs and connects to Postgres via railway, while React' +
    //         ' provides a responsive interface with dynamic book listings ' +
    //         'and borrowing pages, styled with separate CSS classes.',
    //     link: 'https://www.fortunaeitlibraryapp.com',
    //     image: Image
    // },

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
import React, { useRef } from "react";
import styles from "./index.module.css";
import Data from "./data";
import About from "../about/about";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import Navbar from "../../components/navbar";

const Home = () => {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    return (
        <div className={styles.home__container} id="home">
            <Navbar homeRef={homeRef} aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} />
            <div ref={homeRef}>
                <Data />
            </div>
            <div ref={aboutRef}>
                <About />
            </div>
            <div ref={projectsRef}>
                <Projects />
            </div>
            <div ref={contactRef}>
                <Contact />
            </div>
        </div>
    );
}

export default Home;
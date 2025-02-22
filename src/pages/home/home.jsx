import React from "react";
import styles from "./index.module.css";
import Data from "./data";
import About from "../about/about";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";

const Home = () => {
    return (
        <div className={styles.home__container} id="home">
            <Data />
            <About />
            <Projects/>
            <Contact/>
        </div>
    );
}

export default Home;

import styles from "./index.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../../assets/fortunaeLogo.png";

const Navbar = ({ aboutRef, projectsRef, contactRef, homeRef }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const scrollToRef = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    const navLinks = [
        { path: "/", label: "HOME", ref: homeRef },
        { path: "/about", label: "ABOUT US", ref: aboutRef },
        { path: "/projects", label: "PROJECTS", ref: projectsRef },
    ];

    return (
        <nav className={styles.navbar}>
            <div style={{display:'flex', gap: '7px'}}>
                <img src={Logo} alt='Logo'/>
                <h1 className={styles.brandName}>Fortunaé IT</h1>
            </div>

            <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FiX /> : <FiMenu />}
            </div>

            <div className={`${styles.navLinks} ${isOpen ? styles.showMenu : ""}`}>
                {navLinks.map(({ path, label, ref }) => (
                    <div
                        key={path}
                        className={styles.navItem}
                        onClick={() => {
                            if (ref) {
                                scrollToRef(ref);
                            } else {
                                navigate(path);
                            }
                        }}
                    >
                        {label}
                    </div>
                ))}
            </div>

            <div className={styles.desktopOnly} onClick={() => scrollToRef(contactRef)}>
                <button className={styles.getStarted}>Contact Us</button>
            </div>
        </nav>
    );
};

export default Navbar;
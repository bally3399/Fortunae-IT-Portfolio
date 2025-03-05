import React from 'react';
import styles from './index.module.css';
import FortunaeLogo from '../../assets/fortunaeLogo.png';
import {FaFacebook, FaInstagram} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__logo}>
                <img src={FortunaeLogo} alt="Fortunae logo" />
                <span>FortunaeIT</span>
            </div>
            <p className={styles.footer__text}>Fortunae IT Solutions. All rights reserved</p>
            <div className={styles.footer__social}>
                <FaFacebook/>
                <FaInstagram/>
                <FaXTwitter/>
            </div>
        </footer>
    );
};

export default Footer;
import React from 'react';
import styles from './index.module.css'
const Footer = () => {
    return (
       <footer className={styles.footer}>
           <div className={styles.footer__container}>
               <span className={styles.footer__copy}>&#169; Fortunaé IT Solutions. All rights reserved</span>
           </div>
       </footer>
    );
}

export default Footer;

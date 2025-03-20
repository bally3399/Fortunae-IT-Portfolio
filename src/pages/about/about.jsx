import React from 'react';
import styles from './index.module.css';
import Image1 from '../../assets/Frame 26.png';
import Image2 from '../../assets/Frame 27.png';
import Info from "./info";

const HistorySection = () => {
    return (
        <main>
            <Info/>
            <div className={styles.historyContainer}>
                <div className={styles.contentSection}>
                    <h1 className={styles.historyTitle}>OUR HISTORY</h1>
                    <p className={styles.historyText}>
                        Fortunae IT Solutions began as a small team of passionate developers and IT professionals committed to delivering high-quality digital solutions. Recognizing the growing demand for scalable software, cloud solutions, and IT consulting, we expanded our expertise to serve businesses across multiple industries. Over the years, we have built a reputation for innovation, reliability, and excellence, helping everyone embrace digital transformation. Today, Fortunae IT Solutions continues to grow, providing cutting-edge solutions tailored to the evolving needs of businesses worldwide.
                    </p>
                </div>
                <div className={styles.imageSection}>
                    <div className={styles.imageWrapper}>
                        <img src={Image1} alt="Team meeting" className={styles.historyImage} />
                    </div>
                    <div className={styles.imageWrapper}>
                        <img src={Image2} alt="Team discussion" className={styles.historyImage} />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HistorySection;
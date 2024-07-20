import React from 'react';
import styles from './Footer.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <h2 className={styles.footerTitle}>Spotum</h2>
        <p className={styles.footerDescription}>
          Spotum is a project by 2nd year Computer Engineering students as a requirement in CPE126-4
        </p>
        <p className={styles.footerDisclaimer}>
          This project is not intended to be used in medical field and as a substitute for professional diagnosis
        </p>
      </div>
    </footer>
  );
};

export default Footer;
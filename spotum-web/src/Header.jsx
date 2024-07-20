import React from 'react';
import styles from './Header.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.logo}>Spotum</h1>
        <nav className={styles.nav}>
          <a href="#" className={styles.navLink}>GitHub</a>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f62aea05180bdec6b05fc231ea7831a2ffb84e1b2039df7581abb586a00c24a?apiKey=f3d810e59048487dac6103fbc9e8f0d9&" alt="" className={styles.navIcon} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
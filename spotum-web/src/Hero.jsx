import React from 'react';
import styles from './Hero.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h2 className={styles.heroTitle}>
          REVOLUTIONIZE TUBERCULOSIS DETECTION WITH AI
        </h2>
        <p className={styles.heroDescription}>
          your AI-powered ally in detecting <br />
          tuberculosis from X-ray images <br />
          with an impressive 98% accuracy
        </p>
      </div>
      <button className={styles.ctaButton}>Get Started</button>
    </section>
  );
};

export default Hero;
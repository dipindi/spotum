import React from 'react';
import styles from './Result.css';

function MainContent() {
  return (
    <main className={styles.mainContent}>
      <div className={styles.contentWrapper}>
        <div className={styles.imageColumn}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c7fa50af267f2d5c17cfdfead7c611f46d158204aa939c86f36ed57d439d745?apiKey=f3d810e59048487dac6103fbc9e8f0d9&" alt="Spotum analysis result" className={styles.resultImage} />
        </div>
        <div className={styles.textColumn}>
          <div className={styles.resultContent}>
            <h2 className={styles.resultTitle}>
              <span className={styles.normalText}>NORMAL</span>
              <br />
              <span className={styles.confidenceText}>[87% Confidence]</span>
            </h2>
            <p className={styles.disclaimer}>
              *Not a substitute for professional medical diagnosis.
            </p>
            <button className={styles.startOverButton}>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e896aae97dca475ccb730bfa7dfde167e8c80889cfa241796ec0e45e2883ee2d?apiKey=f3d810e59048487dac6103fbc9e8f0d9&" alt="" className={styles.buttonIcon} />
              Start over
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
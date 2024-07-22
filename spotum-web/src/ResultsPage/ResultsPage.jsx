import React from 'react';
import Header from '../Header';
import MainContent from '../Result';
import Footer from '../Footer';
import styles from './ResultsPage.css';

function ResultsPage() {
  return (
    <div className={styles.ResultsPage}>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default ResultsPage;
import React from 'react';
import Header from '../Header';
import Body from './Body';
import Footer from '../Footer';
import styles from './AppPage.css';

const AppPage = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Body />
      </main>
      <Footer />
    </div>
  );
};

export default AppPage;
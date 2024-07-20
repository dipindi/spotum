import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Team from './Team';
import Footer from './Footer';
import styles from './App.css';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Hero />
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default App;
import React from 'react';
import styles from './Home.module.css';
import Announcements from './Announcements';
import logo from '../images/logo.png';

function Home() {
  return (
    
    <div className={styles.home}>
      <Announcements />
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Welcome to Prathama UP Gramin Bank Seva Nivratt Karamchari Kalyan Samiti</h1>
        <p className={styles.heroSubtitle}>Supporting retired staff of Prathama UP Gramin Bank</p>
        <img src={logo} className={styles.logo} alt="logo" />
      </section>

      <section className={styles.features}>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>🤝</div>
          <h3 className={styles.featureTitle}>Community Support</h3>
          <p>Connect with fellow retired bank employees and build lasting relationships.</p>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>📚</div>
          <h3 className={styles.featureTitle}>Resources</h3>
          <p>Access valuable information and resources tailored for retired bank staff.</p>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>🎉</div>
          <h3 className={styles.featureTitle}>Events</h3>
          <p>Participate in regular meetings, social gatherings, and special events.</p>
        </div>
      </section>

      <section className={styles.about}>
        <h2 className={styles.aboutTitle}>About Our Association</h2>
        <p>Prathama UP Gramin Bank Seva Nivratt Karamchari Kalyan Samiti is dedicated to the welfare and support of retired employees of Prathama UP Gramin Bank. Our association aims to foster a sense of community, provide valuable resources, and advocate for the interests of our members.</p>
      </section>
    </div>
  );
}

export default Home;
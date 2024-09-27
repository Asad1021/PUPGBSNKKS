import React from 'react';
import styles from './Home.module.css';
import Announcements from './Announcements';
import logo from '../images/logo.png';
import { motion } from 'framer-motion';
function Home({ setCurrentPage }) {
  return (
    <>
      <motion.div whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.7 }}
        className={styles.home}> <Announcements setCurrentPage={setCurrentPage} /> </motion.div>

      <motion.div whileInView={{ x: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.7 }}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>Welcome to Prathama UP Gramin Bank Seva Nivratt Karamchari Kalyan Samiti</h1>
          <p className={styles.heroSubtitle}>Supporting retired staff of Prathama UP Gramin Bank</p>
          <img src={logo} className={styles.logo} alt="logo" />
        </section>
      </motion.div>

      <section className={styles.features}>

        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7 }}
          className={styles.feature}>
          <div className={styles.featureIcon}>🤝</div>
          <h3 className={styles.featureTitle}>Community Support</h3>
          <p>Connect with fellow retired bank employees and build lasting relationships.</p>
        </motion.div>

        <motion.div
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7 }}
          className={styles.feature}>
          <div className={styles.featureIcon}>📚</div>
          <h3 className={styles.featureTitle}>Resources</h3>
          <p>Access valuable information and resources tailored for retired bank staff.</p>
        </motion.div>
        <motion.div
          whileInView={{ y: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7 }}
          className={styles.feature}>
          <div className={styles.featureIcon}>🎉</div>
          <h3 className={styles.featureTitle}>Events</h3>
          <p>Participate in regular meetings, social gatherings, and special events.</p>
        </motion.div>
      </section>
      <motion.div
        whileInView={{ x: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.7 }}
      >
        <section className={styles.about}>
          <h2 className={styles.aboutTitle}>About Our Association</h2>
          <p>Prathama UP Gramin Bank Seva Nivratt Karamchari Kalyan Samiti is dedicated to the welfare and support of retired employees of Prathama UP Gramin Bank. Our association aims to foster a sense of community, provide valuable resources, and advocate for the interests of our members.</p>
        </section>
      </motion.div>
    </>
  );
}

export default Home;
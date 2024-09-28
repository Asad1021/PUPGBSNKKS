import React from 'react';
import styles from './ContactUs.module.css';
import irfanAlamImage from '../images/Irfan Alam.png';
import akTomarImage from '../images/AK.png';
import { motion } from 'framer-motion'; 

function ContactUs() {
  return (
    <div className={styles.contactUs}>
      
      <div className={styles.contactInfo}>
        <h2 style={{fontSize:'2.5rem'}}>Contact Us</h2>
        <p>Get in touch with <strong>Prathama UP Gramin Bank Seva Nivratt Karamchari Kalyan Samiti</strong></p>
        <p>Email : prathamabanksewanivrat@gmail.com</p>
        <p>Address : MIG-56, Ram Ganga Vihar, Phase 2 Extension, Moradabad </p>

        <div className={styles.leaderInfo}>
     
          <motion.div
          whileInView={{ y: [100, 0],opacity:[0,1]}} 
          transition={{duration : 1}}
          className={styles.leader}>
            <img src={akTomarImage} alt="Mr. A.K. Tomar" className={styles.leaderImage} />
            <h3 className={styles.leaderName}>Mr. A.K. Tomar</h3>
            <p className={styles.leaderContact}>Phone: +91 8630485758</p>
            <p className={styles.leaderContact}>Email: aniltommbd@gmail.com</p>
          </motion.div>
          <motion.div
          whileInView={{ y: [100, 0],opacity:[0,1]}} 
          transition={{duration : 1}}
          className={styles.leader}>
            <img src={irfanAlamImage} alt="Mr. Irfan Alam" className={styles.leaderImage} />
            <h3 className={styles.leaderName}>Mr. Irfan Alam</h3>
            <p className={styles.leaderContact}>Phone: +91 9084884907</p>
            <p className={styles.leaderContact}>Email: irfanalam90848@gmail.com</p>
            </motion.div>
        </div>
      </div>

    </div>
  );
}

export default ContactUs;
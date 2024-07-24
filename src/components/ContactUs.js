import React from 'react';
import styles from './ContactUs.module.css';
import irfanAlamImage from '../images/Irfan Alam.png';
import akTomarImage from '../images/AK.png';

function ContactUs() {
  return (
    <div className={styles.contactUs}>
      <div className={styles.contactInfo}>
        <h2>Contact Us</h2>
        <p>Get in touch with Prathama UP Gramin Bank Seva Nivratt Karamchari Kalyan Samiti:</p>
        <p>Email: prathamabanksewanivrat@gmail.com</p>
        <p>Address: MIG-56, Ram Ganga Vihar, Phase 2 Extension, Moradabad </p>

        <div className={styles.leaderInfo}>
     
          <div className={styles.leader}>
            <img src={akTomarImage} alt="Mr. A.K. Tomar" className={styles.leaderImage} />
            <h3 className={styles.leaderName}>Mr. A.K. Tomar</h3>
            <p className={styles.leaderContact}>Phone: +91 8630485758</p>
            <p className={styles.leaderContact}>Email: aniltommbd@gmail.com</p>
          </div>
          <div className={styles.leader}>
            <img src={irfanAlamImage} alt="Mr. Irfan Alam" className={styles.leaderImage} />
            <h3 className={styles.leaderName}>Mr. Irfan Alam</h3>
            <p className={styles.leaderContact}>Phone: +91 9084884907</p>
            <p className={styles.leaderContact}>Email: irfanalam90848@gmail.com</p>
          </div>
        </div>
      </div>

      {/* <div className={styles.contactForm}>
        <h2>Send us a message</h2>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>Name:</label>
            <input type="text" id="name" name="name" required className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email:</label>
            <input type="email" id="email" name="email" required className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>Message:</label>
            <textarea id="message" name="message" required className={styles.textarea}></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
      </div> */}
    </div>
  );
}

export default ContactUs;
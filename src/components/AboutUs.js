import React from 'react';
import styles from './AboutUs.module.css';
import doc from '../documents/registration.pdf';
import { motion } from 'framer-motion'; 

function AboutUs() {
  return (
    <div className={styles.aboutUs}>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.7 }}
        >
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>About Prathama UP Gramin Bank Seva Nivratt Karamchari Kalyan Samiti (Regd.)</h2>
        <p className={styles.missionStatement}>
          "Supporting retirees of Prathama UP Gramin Bank leading fulfilling lives post-retirement."
        </p>
        <p>
          Prathama UP Gramin Bank Seva Nivratt Karamchari Kalyan Samiti, established in 2015, registered under the <a href={doc} target="_blank" rel="noopener noreferrer"> license</a>, is a dedicated organization committed to the welfare and support of retired employees of Prathama UP Gramin Bank. We strive to create a strong community, provide valuable resources, and advocate for the interests of our members.
        </p>
      </section>
      </motion.div>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Our History</h3>
        <div className={styles.timeline}>
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.7 }}
           className={styles.timelineItem}>
            <span className={styles.year}>2015</span>
            <p>Our organization was founded by a group of retired bank employees named <strong>Prathama Bank Seva Nivratt Karamchari Kalyan Samiti</strong> with a vision to support their colleagues. It is led by Mr. A.K. Tomar and Mr. Irfan Alam, along with 30 dedicated colleagues</p>
          </motion.div>
          <motion.div
            whileInView={{ x: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.7 }}
           className={styles.timelineItem}>
            <span className={styles.year}>2018</span>
            <p>On April 25, 2018, our organization achieved a significant victory in advocating for the pension rights of retirees. Under the esteemed judgement of Honorable Judge Mr. Joseph Kurian, we successfully secured the deserved benefits for retirees</p>
          </motion.div>
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.7 }}
           className={styles.timelineItem}>
            <span className={styles.year}>2019</span>
            <p>After the amalgamation of Sarva UP Gramin Bank and Prathama Bank into Prathama UP Gramin Bank on April 1, 2019, the bank withheld pension payments despite the Supreme Court's verdict. To address this, our organization, led by a national-level leader, organized a large-scale dharna at the bank's Head Office in Moradabad. About 400 retirees participated. From the next day, the chairman began implementation, making our bank the first rural bank in the country to grant pensions to its retirees</p>
          </motion.div>
          <motion.div
            whileInView={{ x: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.7 }}
           className={styles.timelineItem}>
            <span className={styles.year}>2020-2024</span>
            <p>Since the amalgamation on April 1, 2019, Prathama UP Gramin Bank expanded its reach from 4 districts—Moradabad, Amroha, Rampur, and Sambhal—to 21 districts, including Bulandshahar, Ghaziabad, Meerut, Gautam Budh Nagar, Hapur, Baghpat, Shamli, Saharanpur, Muzaffaranagar, Bijnor, Haridwar, Gonda, Balrampur, Budaun, Jhansi, Lalitpur, and more. We have since focused on increasing the membership of our organization in these new districts. Also we reregistered our organization as <strong>Prathama UP Gramin Bank Seva Nivratt Karamchari Kalyan Samiti</strong></p>
          </motion.div>

        </div>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Our Values</h3>
        <div className={styles.values}>
          <motion.div
            whileInView={{ y: [50, 0], opacity: [0, 1] }}
            transition={{ duration: 0.7 }}
           className={styles.value}>
            <div className={styles.valueIcon}>🤝</div>
            <h4>Community</h4>
            <p>Fostering a strong sense of belonging among our members</p>
          </motion.div>
          <motion.div
            whileInView={{ y: [-50, 0], opacity: [0, 1] }}
            transition={{ duration: 0.7 }}
           className={styles.value}>
            <div className={styles.valueIcon}>⚖️</div>
            <h4>Integrity</h4>
            <p>Upholding the highest standards of honesty and transparency</p>
          </motion.div>
          <motion.div
            whileInView={{ y: [50, 0], opacity: [0, 1] }}
            transition={{ duration: 0.7 }}
           className={styles.value}>
            <div className={styles.valueIcon}>🌟</div>
            <h4>Excellence</h4>
            <p>Striving for the best in all our endeavors</p>
          </motion.div>
        </div>
      </section>
    
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Our Achievements</h3>
        <div className={styles.achievements}>

          <motion.div 
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.7 }}
          className={styles.achievement}>
            <h4>Member Support</h4>
            <p>Assisted over 1200 retired employees and family pensioners in navigating post-retirement challenges</p>
          </motion.div>

          <motion.div 
            whileInView={{ x: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.7 }}
          className={styles.achievement}>
            <h4>Health Initiatives</h4>
            <p>Assisted the retiress in getting an health insurance</p>
          </motion.div>
          <motion.div 
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.7 }}
          className={styles.achievement}>
            <h4>Social Service</h4>
            <p>
              We distributed over 200 dustbins in government primary schools and inter colleges, installed joy rides for children in a park, and conducted a tree plantation drive. The park improvements were inaugurated by Honorable Chairman Mr. Rakesh Arora. We also motivated colleagues to plant more trees and encouraged them to sign up for posthumous eye donation</p>
          </motion.div>
          <motion.div
            whileInView={{ x: [100, 0], opacity: [0, 1] }}  
            transition={{ duration: 0.7 }}
          className={styles.achievement}>
            <h4>Regular Meetings</h4>
            <p>We established a regular schedule of quarterly and half-yearly meetings across all 21 districts, covering our entire operational area. These meetings provided a platform for retirees to voice concerns, receive updates on benefits, and foster community support.</p>
          </motion.div>
        </div>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Organization Structure</h3>
        <div className={styles.structureInfo}>
          <motion.div className={styles.structureItem}  whileInView={{ x: [-100, 0], opacity: [0, 1] }}  
            transition={{ duration: 0.7 }}>
            <h4>President</h4>
            <p>A.K. Tomar</p>
          </motion.div>
          <motion.div className={styles.structureItem}  whileInView={{ x: [100, 0], opacity: [0, 1] }}  
            transition={{ duration: 0.7 }}>
            <h4>Acting President</h4>
            <p>Sunil Kumar Baliyan</p>
          </motion.div>
          <motion.div className={styles.structureItem}  whileInView={{ x: [-100, 0], opacity: [0, 1] }}  
            transition={{ duration: 0.7 }}>
            <h4>Vice President</h4>
            <p>Mahendra Singh, Vinay Kumar Tyagi, Ajab Singh Tewatiya</p>
          </motion.div>
          <motion.div className={styles.structureItem}  whileInView={{ x: [100, 0], opacity: [0, 1] }}  
            transition={{ duration: 0.7 }}>
            <h4>General Secretary</h4>
            <p>Irfan Alam</p>
          </motion.div>
          <motion.div className={styles.structureItem}  whileInView={{ x: [-100, 0], opacity: [0, 1] }}  
            transition={{ duration: 0.7 }}>
            <h4>Acting General Secretary</h4>
            <p>Shiv Kumar Singh</p>
          </motion.div>
          <motion.div className={styles.structureItem}  whileInView={{ x: [100, 0], opacity: [0, 1] }}  
            transition={{ duration: 0.7 }}>
            <h4>Secretary</h4>
            <p>A.S. Gupta</p>
          </motion.div>
          <motion.div className={styles.structureItem}  whileInView={{ x: [-100, 0], opacity: [0, 1] }}  
            transition={{ duration: 0.7 }}>
            <h4>Publicity Secretary</h4>
            <p>Hari Prakash Sharma</p>
          </motion.div>
          <motion.div className={styles.structureItem}  whileInView={{ x: [100, 0], opacity: [0, 1] }}  
            transition={{ duration: 0.7 }}>
            <h4>Office Secretary</h4>
            <p>Dhan Singh</p>
          </motion.div>
          <motion.div className={styles.structureItem}  whileInView={{ x: [-100, 0], opacity: [0, 1] }}  
            transition={{ duration: 0.7 }}>
            <h4>Treasurer</h4>
            <p>H.P. Sharma</p>
          </motion.div>
          <motion.div className={styles.structureItem}  whileInView={{ x: [100, 0], opacity: [0, 1] }}  
            transition={{ duration: 0.7 }}>
            <h4>Regional Office Bearers</h4>
            <p>20+</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
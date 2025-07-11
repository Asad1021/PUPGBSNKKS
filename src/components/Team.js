import React from 'react';
import styles from './Team.module.css';
import {motion} from 'framer-motion';

// Import team member images
import irfanAlamImage from '../images/Irfan Alam.png';
import akTomarImage from '../images/AK.png';
import asGuptaImage from '../images/AS Gupta.png';
import hpSharmaImage from '../images/HP Sharma.png';
import dhanSinghImage from '../images/Dhan Singh.png';
import sunil from '../images/Sunil.png';
import mahendra from '../images/Mahendra.png';
import vinay from '../images/Vinay Tyagi.png';
import agab from '../images/Ajab.png';
import shiv from '../images/Shiv.png';
import hari from '../images/Hari.png';




const teamMembers = [
  {
    name: "Mr. A.K. Tomar",
    position: "President",
    photo: akTomarImage,
    mobileNumber: "+91 8630485758"
  },
  {
    name: "Mr. Sunil Kumar Baliyan",
    position: "Acting President",
    photo: sunil,
    mobileNumber: "+91 8630132424"
  },
  {
    name: "Mr. Mahendra Singh",
    position: "Vice President",
    photo: mahendra,
    mobileNumber: "+91 9690747000"
  },
  {
    name: "Mr. Vinay Kumar Tyagi",
    position: "Vice President",
    photo: vinay,
    mobileNumber: "+91 8477809889"
  },
  {
    name: "Mr. Ajab Singh Tewatiya",
    position: "Vice President",
    photo: agab,
    mobileNumber: "+91 7505332712"
  },

  {
    name: "Mr. Irfan Alam",
    position: "General Secretary",
    photo: irfanAlamImage,
    mobileNumber: "+91 9084884907"
  },
  {
    name: "Mr. Shiv Kumar Singh",
    position: "Acting General Secretary",
    photo: shiv,
    mobileNumber: "+91 9897037071"
  },
{
    name: "Mr. A.S. Gupta",
    position: "Secretary",
    photo: asGuptaImage,
    mobileNumber: "+91 9410050844"
  },
 
  {
    name: "Mr. Hari Prakash Sharma",
    position: "Publicity Secretary",
    photo: hari,
    mobileNumber: "+91 8218637306"
  },
  {
    name: "Mr. Dhan Singh",
    position: "Office Secretary",
    photo:  dhanSinghImage,
    mobileNumber: "+91 7500417530"
  },
  {
    name: "Mr. H.P. Sharma",
    position: "Treasurer",
    photo: hpSharmaImage,
    mobileNumber: "+91 9927700950"
  },
];

function Team() {
  return (
    <div className={styles.team}>
      <h1 className={styles.teamTitle}>Our Team</h1>
      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <motion.div 
          whileInView={{y:[100,0],opacity:[0,1]}}
          transition={{duration:1}}
          key={index} className={styles.teamMember}>
            <img src={member.photo} alt={member.name} className={styles.memberPhoto} />
            <div className={styles.memberInfo}>
              <h3 className={styles.memberName}>{member.name}</h3>
              <p className={styles.memberPosition}>{member.position}</p>
              <p className={styles.membermobileNumber}>{member.mobileNumber}</p>
            </div>
          </motion.div>
        ))}
        <motion.div 
        whileInView={{x:[100,0], opacity:[0,1]}}
        transition={{duration:1}}
        className={styles.structureItem}>
         <h4>Regional Office Bearers</h4>
         <p>20+</p>
        </motion.div>
      </div>
    </div>
  );
}

export default Team;
import React from 'react';
import styles from './Announcements.module.css';

function Announcements() {
  const announcements = [
    { id: 3, text: "Welcome to our new website!", isNew: false },
    { id: 2, text: "Check out our upcoming events in the Gallery section.", isNew: true },
    { id: 1, text: "New team members have joined. Visit the Team page to learn more.", isNew: true }
  ];
    // Reverse the order of announcements
    const reversedAnnouncements = [...announcements].reverse();

  return (
    <div className={styles.announcementsContainer}>
      <h2 className={styles.announcementsTitle}>Announcements</h2>
      <ul className={styles.announcementsList}>
        {reversedAnnouncements.map(announcement => (
          <li key={announcement.id} className={styles.announcementItem}>
            {announcement.text}
            {announcement.isNew && <span className={styles.newLabel}>NEW</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Announcements;
import React from 'react';
import styles from './Announcements.module.css';

function Announcements({ setCurrentPage }) {
  const announcements = [
    { 
      id: 3, 
      text: "Important meeting held on August 21, 2024. Click for photos.", 
      isNew: true,
      page: 'gallery'
    },
    { id: 2, text: "New team members have joined. Visit the Team page to learn more.", isNew: false, page: 'team' },
    { id: 1, text: "Welcome to our new website!", isNew: false },
  ];

  const reversedAnnouncements = [...announcements];

  const handleAnnouncementClick = (page) => {
    if (page) {
      setCurrentPage(page);
    }
  };

  return (
    <div className={styles.announcementsContainer}>
      <h2 className={styles.announcementsTitle}>Announcements</h2>
      <ul className={styles.announcementsList}>
        {reversedAnnouncements.map(announcement => (
          <li 
            key={announcement.id} 
            className={styles.announcementItem}
            onClick={() => handleAnnouncementClick(announcement.page)}
            style={{ cursor: announcement.page ? 'pointer' : 'default' }}
          >
            {announcement.text}
            {announcement.isNew && <span className={styles.newLabel}>NEW</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Announcements;
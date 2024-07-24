import React from 'react';
import styles from './Announcements.module.css';

function Announcements({ announcements }) {
  return (
    <div className={styles.announcements}>
      <h2>Announcements</h2>
      <ul>
        {announcements.map(announcement => (
          <li key={announcement.id}>{announcement.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default Announcements;
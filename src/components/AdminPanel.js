import React, { useState } from 'react';
import styles from './AdminPanel.module.css';

function AdminPanel({ announcements, fetchAnnouncements, onClose }) {
  const [newAnnouncement, setNewAnnouncement] = useState('');

  const handleAddAnnouncement = async () => {
    if (newAnnouncement.trim()) {
      try {
        const response = await fetch('http://localhost:3001/announcements', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text: newAnnouncement }),
        });
        if (!response.ok) {
          throw new Error('Failed to add announcement');
        }
        setNewAnnouncement('');
        fetchAnnouncements();
      } catch (error) {
        console.error('Error adding announcement:', error);
      }
    }
  };

  const handleRemoveAnnouncement = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/announcements/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to remove announcement');
      }
      fetchAnnouncements();
    } catch (error) {
      console.error('Error removing announcement:', error);
    }
  };

  return (
    <div className={styles.adminPanel}>
      <h2>Admin Panel</h2>
      <div className={styles.addAnnouncement}>
        <input
          type="text"
          value={newAnnouncement}
          onChange={(e) => setNewAnnouncement(e.target.value)}
          placeholder="New announcement"
        />
        <button onClick={handleAddAnnouncement}>Add</button>
      </div>
      <ul className={styles.announcementList}>
        {announcements.map((announcement) => (
          <li key={announcement.id}>
            {announcement.text}
            <button onClick={() => handleRemoveAnnouncement(announcement.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={onClose}>Close Admin Panel</button>
    </div>
  );
}

export default AdminPanel;
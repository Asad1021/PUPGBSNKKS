import React, { useState, useEffect } from 'react';
import styles from './Gallery.module.css';
import { motion } from 'framer-motion'

// Import all gallery images dynamically
const importAll = (r) => r.keys().map(r);
const galleryImages = importAll(require.context('../gallery', false, /\.(jpg|jpeg|png|gif)$/)).map((src, index) => ({
  id: index + 1,
  src,
  alt: `Gallery Image ${index + 1}`
}));

const importAllFeat = (r) => r.keys().map(r);
const featuredImages = importAllFeat(require.context('../featured', false, /\.(jpg|jpeg|png|gif)$/)).map((src, index) => ({
  id: index + 1,
  src,
  alt: `Featured Image ${index + 1}`
}));

// Import event images dynamically
const eventContext = require.context('../events', true, /\.(jpg|jpeg|png|gif)$/);
const eventImages = eventContext.keys().reduce((acc, path) => {
  const eventName = path.split('/')[1];
  if (!acc[eventName]) {
    acc[eventName] = [];
  }
  acc[eventName].push({
    id: acc[eventName].length + 1,
    src: eventContext(path),
    alt: `${eventName} Image ${acc[eventName].length + 1}`
  });
  return acc;
}, {});

const events = Object.keys(eventImages);

function Gallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % featuredImages.length
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.galleryContainer}>

      <h2 className={styles.galleryTitle}>Gallery</h2>
      <motion.div whileInView={{ x: [100, 0], opacity:[0,1] }}
                    transition={{ duration: 0.8 }}
      className={styles.featuredSection}>
        {featuredImages.map((image, index) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className={`${styles.featuredImage} ${index === currentImageIndex ? styles.active : ''}`}
            style={{ zIndex: index === currentImageIndex ? 1 : 0 }}
          />
        ))}
      </motion.div>
      <motion.div
        whileInView={{ x: [100, 0] }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.sectionTitle}>Our Meetings</h2>
        <div className={styles.eventSelector}>
          <button
            className={`${styles.eventButton} ${selectedEvent === null ? styles.active : ''}`}
            onClick={() => setSelectedEvent(null)}
          >
            All Meetings
          </button>
          {events.map(event => (
            <button
              key={event}
              className={`${styles.eventButton} ${selectedEvent === event ? styles.active : ''}`}
              onClick={() => setSelectedEvent(event)}
            >
              {event}
            </button>
          ))}
        </div>
      </motion.div>



      <div className={styles.eventGalleryGrid}>
        {events
          .filter(event => selectedEvent === null || event === selectedEvent)
          .map(event => (
            <div key={event} className={styles.eventSection}>
              <h3 className={styles.eventTitle}>{event}</h3>
              <div className={styles.galleryGrid}>
                {eventImages[event].map((image) => (
                  <motion.div whileInView={{ y: [-100, 0], opacity:[0,1] }}
                    transition={{ duration: 0.8 }} key={image.id} className={styles.galleryItem}>
                    <img src={image.src} alt={image.alt} className={styles.galleryImage} />
                  </motion.div>
                ))}
              </div>
            </div>
          ))
        }
      </div>
      <h2 className={styles.sectionTitle}>Past Events</h2>
      <div className={styles.galleryGrid}>
        {galleryImages.map((image) => (
          <motion.div whileInView={{ y: [-100, 0], opacity:[0,1] }}
          transition={{ duration: 0.8 }}
           key={image.id} className={styles.galleryItem}>
            <img src={image.src} alt={image.alt} className={styles.galleryImage} />
          </motion.div>
        ))}
      </div>


    </div>
  );
}

export default Gallery;
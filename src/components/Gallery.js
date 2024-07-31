import React, { useState, useEffect } from 'react';
import styles from './Gallery.module.css';

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



function Gallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      <div className= {styles.galleryTitle}>Gallery</div>
    
      <div className={styles.featuredSection}>
        {featuredImages.map((image, index) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className={`${styles.featuredImage} ${index === currentImageIndex ? styles.active : ''}`}
          />
        ))}
      </div>
      <div className={styles.galleryGrid}>
        {galleryImages.map((image) => (
          <div key={image.id} className={styles.galleryItem}>
            <img src={image.src} alt={image.alt} className={styles.galleryImage} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;

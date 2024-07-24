import React from 'react';
import styles from './Navbar.module.css';

function Navbar({ setCurrentPage, currentPage }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' },
    { id: 'team', label: 'Team' },
    { id: 'gallery', label: 'Gallery' },
  ];

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        {navItems.map((item) => (
          <li key={item.id} className={styles.navItem}>
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage(item.id);
              }}
              className={`${styles.navLink} ${currentPage === item.id ? styles.active : ''}`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;

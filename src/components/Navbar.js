import React, { useState } from 'react';
import styles from './Navbar.module.css';

function Navbar({ setCurrentPage, currentPage }) {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' },
    { id: 'team', label: 'Team' },
    { id: 'gallery', label: 'Gallery' },
  ];

  // Handle login form submission
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData)
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        alert('Login successful!');
        setShowLoginModal(false);
        setLoginData({ email: '', password: '' });
      } else {
        alert(data.error || 'Login failed');
      }
    } catch (error) {
      alert('Network error. Please try again.');
    }
  };

  // Handle register form submission
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData)
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        alert('Registration successful!');
        setShowRegisterModal(false);
        setRegisterData({ name: '', email: '', phone: '', password: '' });
      } else {
        alert(data.error || 'Registration failed');
      }
    } catch (error) {
      alert('Network error. Please try again.');
    }
  };

  // Handle input changes for login form
  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  // Handle input changes for register form
  const handleRegisterChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value
    });
  };

  // Open register modal from login modal
  const openRegisterModal = () => {
    setShowLoginModal(false);
    setShowRegisterModal(true);
  };

  return (
    <div>
      {/* Login Bar */}
      <div className={styles.loginBar}>
        <div className={styles.loginContainer}>
          <button
            onClick={() => setShowLoginModal(true)}
            className={styles.loginButton}
          >
            Login
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.id} className={styles.navItem}>
              <button
                onClick={() => setCurrentPage(item.id)}
                className={`${styles.navLink} ${currentPage === item.id ? styles.active : ''}`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Login Modal */}
      {showLoginModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h2>Login</h2>
              <button
                onClick={() => setShowLoginModal(false)}
                className={styles.closeButton}
              >
                ×
              </button>
            </div>
            <form onSubmit={handleLoginSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="email" >Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  required
                  className={styles.input}
                />
              </div>
              <button type="submit" className={styles.submitButton}>
                Submit
              </button>
            </form>
            <div className={styles.modalFooter}>
              <button
                onClick={openRegisterModal}
                className={styles.registerButton}
              >
                Register User
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Register Modal */}
      {showRegisterModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h2>Register</h2>
              <button
                onClick={() => setShowRegisterModal(false)}
                className={styles.closeButton}
              >
                ×
              </button>
            </div>
            <form onSubmit={handleRegisterSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={registerData.name}
                  onChange={handleRegisterChange}
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="registerEmail">Email:</label>
                <input
                  type="email"
                  id="registerEmail"
                  name="email"
                  value={registerData.email}
                  onChange={handleRegisterChange}
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="phone">Phone:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={registerData.phone}
                  onChange={handleRegisterChange}
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="registerPassword">Password:</label>
                <input
                  type="password"
                  id="registerPassword"
                  name="password"
                  value={registerData.password}
                  onChange={handleRegisterChange}
                  required
                  className={styles.input}
                />
              </div>
              <button type="submit" className={styles.submitButton}>
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;

import React from "react";
import "./Footer.css";
import logo from "../images/footer.png"

const Footer = ({ setCurrentPage, currentPage }) => {
  const footerItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' },
    { id: 'team', label: 'Team' },
    { id: 'gallery', label: 'Gallery' },
  ];

  const handlePageChange = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="Logo" onClick={() => handlePageChange('home')} />
            <p>Uniting Careers, Enriching Retirements</p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              {footerItems.map((item) => (
                <li key={item.id} onClick={() => handlePageChange(item.id)}>{item.label}</li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact</h3>
            <p>+91 8630485758</p>
            <p>+91 9084884907</p>
            <p>prathamabanksewanivrat@gmail.com</p>
            <p>MIG-56, Ram Ganga Vihar, Phase 2 Extension, Moradabad, India, 244001</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright © 2024 PUPGBSNKKS</p>
          <p>Developed & Maintained By&nbsp;
            <a href="https://asad1021.github.io/" className="design-link" target="_blank" rel="noopener noreferrer">
              Asad Alam
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
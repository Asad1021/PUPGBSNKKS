import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Announcements from './components/Announcements';
import AdminPanel from './components/AdminPanel';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [announcements, setAnnouncements] = useState([]);
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);
  const [isPromptOpen, setIsPromptOpen] = useState(false);
  const [securityCode, setSecurityCode] = useState('');

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const response = await fetch('http://localhost:3001/announcements');
      if (!response.ok) {
        throw new Error('Failed to fetch announcements');
      }
      const data = await response.json();
      setAnnouncements(data);
    } catch (error) {
      console.error('Error fetching announcements:', error);
    }
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <AboutUs />;
      case 'contact':
        return <ContactUs />;
      case 'team':
        return <Team />;
      case 'gallery':
        return <Gallery />;
      default:
        return <Home />;
    }
  };

  const handleAdminClick = () => {
    setIsPromptOpen(true);
  };

  const handleSecurityCodeSubmit = () => {
    if (securityCode === 'admin123') {
      setIsAdminPanelOpen(true);
      setIsPromptOpen(false);
      setSecurityCode('');
    } else {
      alert('Incorrect security code');
    }
  };

  return (
    <div className="App">
      <Header />
      <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <Announcements announcements={announcements} />
      <main className="container">
        {renderPage()}
      </main>
      <footer>
        <button onClick={handleAdminClick}>Admin</button>
      </footer>

      {isPromptOpen && (
        <div className="security-prompt">
          <input
            type="password"
            value={securityCode}
            onChange={(e) => setSecurityCode(e.target.value)}
            placeholder="Enter security code"
          />
          <button onClick={handleSecurityCodeSubmit}>Submit</button>
          <button onClick={() => setIsPromptOpen(false)}>Cancel</button>
        </div>
      )}

      {isAdminPanelOpen && (
        <AdminPanel
          announcements={announcements}
          setAnnouncements={setAnnouncements}
          onClose={() => setIsAdminPanelOpen(false)}
          fetchAnnouncements={fetchAnnouncements}
        />
      )}
    </div>
  );
}

export default App;
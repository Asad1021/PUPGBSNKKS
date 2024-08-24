import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Announcements from './components/Announcements';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutUs />;
      case 'contact':
        return <ContactUs />;
      case 'team':
        return <Team />;
      case 'gallery':
        return <Gallery />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="App" style={{overflow:"hidden"}}>
      <Header />
      <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <main className="container">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </div>
  );
}

export default App;
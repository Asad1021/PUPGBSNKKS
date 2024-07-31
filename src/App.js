import React, { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Team from './components/Team';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

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

  return (
    <div className="App" style={{overflow:"hidden"}}>
      <Header />
      <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <main className="container">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
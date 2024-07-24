import React from 'react';
import logo from '../images/logo.png'; // You'll need to add your logo to the src folder
import "../App.css"

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div className='title-section'>
      <div className='title'>Prathama U.P. Gramin Bank Seva Nivratt Karamchari Kalyan Samiti</div>
      <div className='sub-title'>Affiliated to : AIRRBEA, NFRRRBS and UPRRRBSF</div>
      </div>
      
    </header>
  );
}

export default Header;
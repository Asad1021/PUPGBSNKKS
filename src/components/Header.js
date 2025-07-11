import React from 'react';
import hegde from '../images/Ganpati Hegde.png';
import mukherji from '../images/Mukherji ji.png';

import "../App.css"

function Header() {
  return (
    <header className="App-header">
        <img src={mukherji} className="App-logo" alt="Mukherji ji" />
        <div className='title-section'>
          <div className='title'>Prathama U.P. Gramin Bank Seva Nivratt Karamchari Kalyan Samiti</div>
          <div className='sub-title'>Affiliated to : AIRRBEA, NFRRRBS and UPRRRBSF</div>
        </div>
        <img src={hegde} className="App-logo" alt="Ganpati Hegde" />
    
    </header>
  );
}

export default Header;
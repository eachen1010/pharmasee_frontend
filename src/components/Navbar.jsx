import React from 'react';
import styles from './Navbar.css';
import pharmaseeLogo from './pharmaseeLogo.png';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#44ACCF' }} className="navbar">
      <ul style={{ paddingRight: '39px' }}>
        <li style={{ backgroundColor: '#44ACCF', color: 'white', display: 'flex', alignItems: 'center', paddingRight: '39px'}}><img src={ pharmaseeLogo } alt="Home" width="56px" height="56px" className="iconStyle" /> pharmaSEE</li>
        <p style={{ backgroundColor: '#44ACCF', color: 'white'}}></p>
      </ul>
    </nav>
  );
};

export default Navbar;
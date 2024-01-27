import React from 'react';
import styles from './Navbar.css';
import NavBarLogo from './NavBarLogo.png';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#44ACCF' }} className="navbar">
      <ul style={{ paddingLeft: '1vw', paddingBottom: '0.5vw', paddingTop: '0.5vw' }}>
        <li style={{ backgroundColor: '#44ACCF', color: 'white', display: 'flex', alignItems: 'center' }}>
          <img src={ NavBarLogo } alt="Home" width="200px" className="iconStyle" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
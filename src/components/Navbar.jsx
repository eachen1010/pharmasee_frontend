import React from 'react';
import styles from './Navbar.css';
import NavBarLogo from './NavBarLogo.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

  const handleClick = async data => {
    //const { username, password } = data;
    try {
      navigate('/dashboard');
      //reset();
    } catch (e) {
      console.log(e);//setError('Failed to log in');
    }
  };

  return (
    <nav style={{ backgroundColor: '#44ACCF' }} className="navbar">
      <ul style={{ paddingLeft: '1vw', paddingBottom: '0.5vw', paddingTop: '0.5vw' }}>
        <li style={{ backgroundColor: '#44ACCF', color: 'white', display: 'flex', alignItems: 'center' }}>
          <img onClick={handleClick} src={ NavBarLogo } alt="Home" width="200px" className="iconStyle" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
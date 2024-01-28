import React from 'react';
import styles from './Navbar.css';
import NavBarLogo from './NavBarLogo.png';
import { useNavigate } from 'react-router-dom';
import { Button } from "@chakra-ui/react";
import avatar from './Avatar.png';

const Navbar = () => {

  const navigate = useNavigate();

  const handleClick = async data => {
    try {
      navigate('/dashboard');
      
    } catch (e) {
      console.log(e); //setError('Failed to log in');
    }
  };

  return (
    <nav style={{ width: '100%',backgroundColor: '#44ACCF', display: 'flex', justifyContent:'space-between', }} className="navbar">
      <ul style={{ paddingLeft: '1vw', paddingBottom: '0.5vw', paddingTop: '1vw'}}>
        <li style={{ backgroundColor: '#44ACCF', color: 'white', display: 'inline', alignItems: 'center' }}>
          <img onClick={handleClick} src={ NavBarLogo } alt="Home" width="200px" className="iconStyle" />
        </li>
      </ul>
      <div style={{display:'flex',marginRight: '1vh',width: '15%', marginBottom: '1vh', marginTop: '1vh',borderRadius: '6px', color: 'white', backgroundColor: '#3892b0'}}>
        <Button style={{fontSize: '20px', width: '100%', padding: '1vw',}}> 
          TheMillers
        </Button>
        <img src={avatar} alt='avatar' style={{marginTop: '.8vh', marginRight: '2vh', height:'45px'}}/> 
      </div>
    </nav>
  );
};

export default Navbar;
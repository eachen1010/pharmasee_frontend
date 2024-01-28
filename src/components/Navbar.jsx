import React from 'react';
import styles from './Navbar.css';
import { useState, useEffect } from 'react';
import NavBarLogo from './NavBarLogo.png';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, Button, MenuList, MenuButton, MenuItem } from "@chakra-ui/react";
import avatar from './Avatar.png';

const Navbar = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const [showLogout, setShowLogout] = useState(false);
  const [familyname, setFamilyname] = useState('');

  const handleClick = async data => {
    try {
      if(familyname === null) {
        navigate(`/`);
      } else {
        navigate(`/dashboard/${familyname}`);
      }
    } catch (e) {
      console.log(e); //setError('Failed to log in');
    }
  };

  const handleMenuClick = async data => {
    try {
      navigate('/');
    } catch (e) {
      console.log(e); //setError('Failed to log in');
    }
  };

  useEffect(() => {
    const loc = location.pathname.split('/');
    setFamilyname(loc[loc.length-1]);
}, [location.pathname]);

  return (
    <>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Istok+Web:ital,wght@0,400;0,700;1,400;1,700&display=swap')
    </style>
    <nav style={{ width: '100vw', height: '75px', backgroundColor: '#44ACCF', display: 'flex', justifyContent:'space-between' }} className="navbar">
      <ul style={{ paddingLeft: '1vw', paddingBottom: '0.5vw', paddingTop: '1.2vw'}}>
        <li style={{ backgroundColor: '#44ACCF', color: 'white', display: 'inline', alignItems: 'center' }}>
          <img onClick={handleClick} src={ NavBarLogo } alt="Home" width="200px" className="iconStyle" />
        </li>
      </ul>
      <div style={{ display:'flex', width: '15%', marginBottom: '1vh', borderRadius: '6px', color: 'white' }}>
        <Menu>
          <MenuButton display='flex' justify-content='center' flex-direction='row' className="buttonStyle" style={{ borderTopLeftRadius: '60px 60px', borderBottomLeftRadius: '60px 60px', fontSize: '3.2vh', marginRight: '0px', width: '100%', height: '75px', opacity:'90%', borderWidth: '5px',  borderColor: '#82c9e1'}}> 
            <strong>{familyname} &nbsp; ▼</strong>
          </MenuButton>
          <MenuList>
            <MenuItem onClick={handleMenuClick} background='#a6a6a6'>
              <span color="black">Log Out</span>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
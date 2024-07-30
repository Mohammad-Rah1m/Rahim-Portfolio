import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { FaBars } from 'react-icons/fa';
import './NavbarSticky.css';
import LogoWhite from '../../assets/images/whitelogonew.svg';
import Hamburger from '../../assets/images/menu.svg';
import Button from '../../components/button/Button';

export default function NavbarSticky(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <img src={LogoWhite} alt="logo"/>
      </div>
      <div className="navbar-hamburger" onClick={toggleMenu}>
        <img src={Hamburger} alt='hamburger-icon'/>
      </div>
      <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
        <div className="navbar-menu-item">
          <NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink>
        </div>
        <div className="navbar-menu-item">
          <NavLink className="nav-link" activeClassName="active" to="/about">About</NavLink>
        </div>
        <div className="navbar-menu-item">
          <NavLink className="nav-link" activeClassName="active" to="/services">Services</NavLink>
        </div>
        <div className="navbar-contact-mobile">
          <Button title="Get In Touch" />
      </div>
      </div>
      <div className="navbar-contact-desktop">
          <Button title="Get In Touch" />
      </div>
    </div>
  );
}

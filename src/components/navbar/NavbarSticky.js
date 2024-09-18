import React, { useState } from 'react';
import { NavLink , Link } from 'react-router-dom';
// import { setPopUp } from '../../redux/cartSlice.js'
// import {useDispatch } from 'react-redux'

import './NavbarSticky.css';
import LogoWhite from '../../assets/images/whitelogonew.svg';
import Hamburger from '../../assets/images/menu.svg';
import ToggleButton from '../../components/togglePopupBtn/TogglePopupBtn.js';
// import Cart from '../../assets/images/cart.svg';
// import { useSelector} from 'react-redux';

export default function NavbarSticky(props) {
  // const count = useSelector((state) => state.cart.value)
  // const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  // const handleClick = () => {
  //       {
  //           dispatch(setPopUp(true));
  //       }
  //   }
    
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <Link to="/"><img src={LogoWhite} alt="logo"/></Link>
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
        <div className="navbar-menu-item">
          <NavLink className="nav-link" activeClassName="active" to="/projects">Projects</NavLink>
        </div>
        <div className="navbar-contact-mobile">
          <ToggleButton title="Get In Touch"/>
      </div>
      </div>
      <div className="navbar-contact-desktop">
          {/* <Button title="Get In Touch" linkUrl='/contact'/> */}
          {/* <div className="cart-items">
            <img src={Cart} alt='cart icon'/>
            <p>{count}<span>$</span></p>
          </div> */}
            {/* <button
                    aria-label="Increment value"
                    onClick={() => handleClick()}
                    >
                    Choose Plan
            </button> */}
            <ToggleButton title="Get In Touch"/>
      </div>
    </div>
  );
}

import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './NavbarSticky.css'
// import logo from '../../assets/images/logo.svg';
import LogoWhite from '../../assets/images/whitelogonew.svg';
import Button from '../../components/button/Button';


export default function NavbarSticky(props) {
  return (
    <div className="navbar-container">
        <div className="navbar-logo">
            <img src={LogoWhite} alt="logo"/>
        </div>
        <div className="navbar-menu">
            <div className="navbar-menu-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </div>
            <div className="navbar-menu-item">
                <Link className="nav-link" to="/about">About</Link>
            </div>
            <div className="navbar-menu-item">
                <Link className="nav-link" to="/services">Services</Link>
            </div>
            
        </div>
        <div className="navbar-contact">
            {/* <div className="navbar-contact-btn">
                <Link className="nav-link" to="/contact">Get In Touch</Link>
            </div> */}
            <Button title="Get In Touch" />
        </div>
    </div>
  )
}

// NavbarSticky.prototype = {
//     title:PropTypes.string,
// }
// NavbarSticky.defaultProps = {
//     title: 'SET TITLE HERE'
// }
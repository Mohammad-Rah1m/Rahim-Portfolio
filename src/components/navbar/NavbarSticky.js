import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavbarSticky.css'
import LogoWhite from '../../assets/images/whitelogonew.svg';
import Button from '../../components/button/Button';

export default function NavbarSticky(props) {
  return (
    <div className="navbar-container main-container-padding">
        <div className="navbar-logo">
            <img src={LogoWhite} alt="logo"/>
        </div>
        <div className="navbar-menu">
            <div className="navbar-menu-item">
                <NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink>
            </div>
            <div className="navbar-menu-item">
                <NavLink className="nav-link" activeClassName="active" to="/about">About</NavLink>
            </div>
            <div className="navbar-menu-item">
                <NavLink className="nav-link" activeClassName="active" to="/services">Services</NavLink>
            </div>
        </div>
        <div className="navbar-contact">
            <Button title="Get In Touch" />
        </div>
    </div>
  )
}

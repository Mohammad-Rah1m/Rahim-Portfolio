import React from "react";
import "./Footer.css";
import locationIcon from "../../assets/images/map-pin.svg";
import mailIcon from "../../assets/images/mail-footer.svg";
import phoneIcon from "../../assets/images/phone-footer.svg";
import Logo from "../../assets/images/whitelogonew.svg";
import Linkedin from "../../assets/images/linkedin.svg";
import Instagram from "../../assets/images/instagram.svg";
import Github from "../../assets/images/github.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer main-container-padding">
        <div className="footer-logo">
          <div className="footer-logo-item">
            <Link to="/">
              <img src={Logo} alt="icon" />
            </Link>
          </div>
          <div className="footer-social">
            <div className="social-item">
              <a
                href="https://www.linkedin.com/in/mohammad-rah1m/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Linkedin} alt="icon" />
              </a>
            </div>
            <div className="social-item">
              <a
                href="https://www.instagram.com/mohammadrah1m/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Instagram} alt="icon" />
              </a>
            </div>
            <div className="social-item">
              <a
                href="https://github.com/Mohammad-Rah1m"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Github} alt="icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-quick-links">
          <div className="quick-links-title">
            <h4>QUICK LINKS</h4>
          </div>
          <div className="quick-links-menu">
            <Link to='/' className="footer-menu-items"><p>Home</p></Link>
            <Link to='/about' className="footer-menu-items"><p>About</p></Link>
            <Link to='/services' className="footer-menu-items"><p>Services</p></Link>
            <Link to='/projects' className="footer-menu-items"><p>Projects</p></Link>
          </div>
        </div>
        <div className="footer-address">
          <div className="address-title">
            <h3>Contact</h3>
          </div>
          <div className="address-content">
            <a href="mailto:rahimchangezi5@gmail.com" className="address-content-link">
                <div className="address-content-block">
                    <img src={mailIcon} alt="icon" />
                    <p>Rahimchangezi5@gmail.com</p>
                </div>
            </a>
            <a href="tel:03138437243" className="address-content-link">
                <div className="address-content-block">
                    <img src={phoneIcon} alt="icon" />
                    <p>+923138437243</p>
                </div>
            </a>
            <a href="https://www.google.com/maps/place/DHA+Phase+1,+Lahore,+Pakistan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="address-content-link">
                <div className="address-content-block">
                    <img src={locationIcon} alt="icon" />
                    <p>DHA Phase 1, Lahore Pakistan</p>
                </div>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="footer-copyright-text">
          <p>&copy; 2024 Mohammad Rahim Portfolio. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

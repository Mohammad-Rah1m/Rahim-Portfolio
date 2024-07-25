import React from 'react'
import './Footer.css'
import locationIcon from '../../assets/images/map-pin.svg';
import mailIcon from '../../assets/images/mail-footer.svg';
import phoneIcon from '../../assets/images/phone-footer.svg';
import Logo from '../../assets/images/whitelogonew.svg';
import Linkedin from '../../assets/images/linkedin.svg';
import Instagram from '../../assets/images/instagram.svg';

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className="footer">
        <div className="footer-logo">
            <div className="footer-logo-item">
                <img src={Logo} alt="icon"/>
            </div>
            <div className="footer-social">
                <div className="social-item">
                    <img src={Linkedin} alt="icon"/>
                </div>
                <div className="social-item">
                    <img src={Instagram} alt="icon"/>
                </div>
            </div>
        </div>
        <div className="footer-quick-links">
            <div className="quick-links-title">
                <h4>QUICK LINKS</h4>
            </div>
            <div className="quick-links-menu">
                <p>HOME</p>
                <p>ABOUT</p>
                <p>SERVICES</p>
            </div>
        </div>
        <div className="footer-address">
            <div className="address-title">
                <h3>ADDRESS</h3>
            </div>
            <div className="address-content">
                <div className="address-content-block">
                    <img src={mailIcon} alt="icon"/>
                    <p>rahimchangezi5@gmail.com</p>  
                </div>
                <div className="address-content-block">
                    <img src={phoneIcon} alt="icon"/>
                    <p>03138437243</p>  
                </div>
                <div className="address-content-block">
                    <img src={locationIcon} alt="icon"/>
                    <p>Quetta,Pakistan</p>  
                </div>
            </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="footer-copyright-text">
            <p>&copy; 2024 Mohammad Rahim. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

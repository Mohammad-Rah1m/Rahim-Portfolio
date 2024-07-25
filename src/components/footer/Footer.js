import React from 'react'
import './Footer.css'
import locationIcon from '../../assets/images/map-pin.svg';
import mailIcon from '../../assets/images/mail-footer.svg';
import phoneIcon from '../../assets/images/phone-footer.svg';
export default function Footer() {
  return (
    <div className='footer-container'>
      <div className="footer">
        <div className="footer-logo">
            <h3>Mohammad Rahim</h3>
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
                    <img src={locationIcon} alt="icon"/>
                    <p>Quetta,Pakistan</p>  
                </div>
                <div className="address-content-block">
                    <img src={phoneIcon} alt="icon"/>
                    <p>03138437243</p>  
                </div>
            </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="footer-copyright-text">
            <p>@copyright Mohammad Rahim</p>
        </div>
        <div className="footer-copyright-social">
            <p>Facebook</p>
            <p>Instagram</p>
            <p>LinkedIn</p>
        </div>
      </div>
    </div>
  )
}

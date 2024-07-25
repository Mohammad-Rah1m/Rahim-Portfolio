import React from 'react'
import './AboutSection.css'

import AboutAnimation from '../../components/lottie/AboutAnimation.js';
import mailIcon from '../../assets/images/mail.svg';
import phoneIcon from '../../assets/images/phone.svg';


export default function AboutSection() {
  return (
    <div className="about-me">
        <div className="about-me-text">
            <h5>About Me</h5>
            <h2>Professional <span>Web Designer & Developer</span> For Digital Products</h2>
            <p>As a professional web designer and developer, I specialize in creating sleek, 
              user-friendly digital products that enhance online experiences. With a keen eye 
              for detail and a passion for innovation, I bring your vision to life 
              through cutting-edge web solutions.</p>
              <div className="about-me-contact">
                  <div className="about-me-contact-block">
                    <div className="about-me-contact-block-icon">
                        <img src={mailIcon} alt="icon" />
                    </div>
                    <div className="about-me-contact-block-text">
                        <h6>Email Me</h6>
                        <h5>rahimchangezi5@gmail.com</h5>
                    </div>
                  </div>
                  <div className="about-me-contact-block">
                    <div className="about-me-contact-block-icon">
                        <img src={phoneIcon} alt="icon" />
                    </div>
                    <div className="about-me-contact-block-text">
                        <h6>Call me</h6>
                        <h5>03138437243</h5>
                    </div>
                  </div>
              </div>
        </div>
        <div className="about-me-img">
          {/* <img src={require('../../assets/images/about.jpg')} alt='about-picture'/> */}
          <AboutAnimation/>
        </div>
      </div>
  )
}

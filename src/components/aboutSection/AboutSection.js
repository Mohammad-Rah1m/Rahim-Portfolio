import React from 'react'
import './AboutSection.css'
import Button from '../../components/button/Button.js'
import AboutAnimation from '../../components/lottie/AboutAnimation.js';
import mailIcon from '../../assets/images/mail.svg';
import phoneIcon from '../../assets/images/phone.svg';
import CheckIcon from '../../assets/images/check.svg';
import { Link } from 'react-router-dom'

export default function AboutSection() {
  return (
    <div className="about-me main-container-padding">
        <div className="about-me-text">
            <h5 className='sub-heading'>About Me</h5>
            <h2 className='text-white'>Professional <span className='text-accent-color'>Web Designer & Developer</span> For Digital Products</h2>
            <p className='text-gray'>As a professional web designer and developer, I specialize in creating sleek, 
              user-friendly digital products that enhance online experiences. With a keen eye 
              for detail and a passion for innovation, I bring your vision to life 
              through cutting-edge web solutions.</p>

              <div className="about-me-bullets">
                <div className="bullets-container">
                    <div className="bullets-container-item">
                        <img src={CheckIcon} alt="icon" />
                        <p>React JS</p>
                    </div>
                    <div className="bullets-container-item">
                        <img src={CheckIcon} alt="icon" />
                        <p>WordPress</p>
                    </div>
                </div>
                <div className="bullets-container">
                    <div className="bullets-container-item">
                        <img src={CheckIcon} alt="icon" />
                        <p>Figma</p>
                    </div>
                    <div className="bullets-container-item">
                        <img src={CheckIcon} alt="icon" />
                        <p>Node JS</p>
                    </div>
                </div>
              </div>
              <div className="about-me-btn">
                <Button title='About Me' linkUrl='/about'/>
              </div>
        </div>
        <div className="about-me-img">
          <AboutAnimation/>
          <div className="about-me-contact">
                  <Link to="/" className="about-me-contact-block">
                    <div className="about-me-contact-block-icon">
                        <img src={mailIcon} alt="icon" />
                    </div>
                    <div className="about-me-contact-block-text">
                        <h6 className='text-gray'>Email Me</h6>
                        <h5 className='text-white'>Rahimchangezi5@gmail.com</h5>
                    </div>
                  </Link>
                  <Link to="/" className="about-me-contact-block">
                    <div className="about-me-contact-block-icon">
                        <img src={phoneIcon} alt="icon" />
                    </div>
                    <div className="about-me-contact-block-text">
                        <h6 className='text-gray'>Call me</h6>
                        <h5 className='text-white'>03138437243</h5>
                    </div>
                  </Link>
              </div>
        </div>
      </div>
  )
}

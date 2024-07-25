import React from 'react'
import './Home.css'
// import Button from '../../components/button/Button.js'
// import mailIcon from '../../assets/images/mail.svg';
// import phoneIcon from '../../assets/images/phone.svg';

import arrowRightIcon from '../../assets/images/arrow-up-right.svg';
import HeroSection from '../../components/heroSection/HeroSection.js'
import AboutSection from '../../components/aboutSection/AboutSection.js'

export default function Home() {
  return (
    <div className='main-container'>
      <HeroSection/>
      <AboutSection/>
      <div className="my-resume">
        <div className="my-resume-heading">
          <h5>My Resume</h5>
          <h2>Real <span>Problem Solutions</span> Experience</h2>
        </div>
        <div className="my-resume-card">
          <div className="my-resume-card-block">
            <div className="my-resume-card-block-item">
              <div className="my-resume-card-block-item-icon">
                <img src={arrowRightIcon} alt="icon" />
              </div>
              <div className="my-resume-card-block-item-text">
                <h5>2024 - Present</h5>
                <h3>Web Developer</h3>
                <h6>Skyline Tech Solutions</h6>
              </div>
            </div>
            <div className="my-resume-card-block-item">
              <div className="my-resume-card-block-item-icon">
                <img src={arrowRightIcon} alt="icon" />
              </div>
              <div className="my-resume-card-block-item-text">
                <h5>2022 - 2024</h5>
                <h3>Web Developer</h3>
                <h6>Icon Pro Digital Solutions</h6>
              </div>
            </div>
          </div>
          <div className="my-resume-card-divider">

          </div>
          <div className="my-resume-card-block">
            <div className="my-resume-card-block-item">
              <div className="my-resume-card-block-item-icon">
                <img src={arrowRightIcon} alt="icon" />
              </div>
              <div className="my-resume-card-block-item-text">
                <h5>2021 - 2022</h5>
                <h3>UI/UX Designer</h3>
                <h6>Arbisoft</h6>
              </div>
            </div>
            <div className="my-resume-card-block-item">
              <div className="my-resume-card-block-item-icon">
                <img src={arrowRightIcon} alt="icon" />
              </div>
              <div className="my-resume-card-block-item-text">
                <h5>2020 - 2021</h5>
                <h3>Graphics Designer</h3>
                <h6>Bocoh Studios</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
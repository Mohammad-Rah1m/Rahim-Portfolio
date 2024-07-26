import React from 'react';
import Button from '../../components/button/Button';
// import RahimImage from '../../assets/images/rahimbg.png';
import LottieAnimation from '../../components/lottie/LottieAnimation.js';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-section-text">
        <h3>Hello, I'm</h3>
        <h1>Mohammad Rahim</h1>
        <h4>Web Designer & Developer</h4>
        <div className='hero-section-text-button'>
          <Button title="Hire Me" />
        </div>
      </div>
      <div className="hero-section-img">
        <LottieAnimation />
      </div>
      <div className="hero-section-exp">
        <div className="hero-section-exp-block">
          <h3>2+</h3>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <div className="hero-section-exp-block">
          <h3>100+</h3>
          <p>PROJECTS COMPLETED</p>
        </div>
        <div className="hero-section-exp-block">
          <h3>99%</h3>
          <p>CLIENT SATISFACTION</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

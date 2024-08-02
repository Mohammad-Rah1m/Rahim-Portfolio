import React from 'react'
import './ProjectSection.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Button from '../../components/button/Button.js'
import AAOG from '../../assets/images/projects/AAOG.jpg';
import LightPlanet from '../../assets/images/projects/Light-Planet.jpg';
import LocalGrowth from '../../assets/images/projects/Local-growth.jpg';
import Lubu from '../../assets/images/projects/Lubu.jpg';
import WooflyBox from '../../assets/images/projects/Woofly-Box.jpg';
import Brotha from '../../assets/images/projects/Brotha-whiskey.jpg';
import EqualH from '../../assets/images/projects/Equal-h.jpg';
import SweatHead from '../../assets/images/projects/Sweathead-1.jpg';
import RechargeHealth from '../../assets/images/projects/Recharge-Health.jpg';

import Marquee from "react-fast-marquee";

export default function ProjectSection() {
  return (
    <div className="project-container">
      <div className="project-text main-container-padding">
        <h5 className='sub-heading'>Latest Works</h5>
        <h2 className='text-white'>Explore My Recent <span className='text-accent-color'>Projects</span></h2>
        <p className='text-gray'>These projects are developed at Icon Pro Solutions and Skyline Tech Solutions, with some being personal projects. They showcase my expertise in WordPress and React JS.</p>
      </div>
      <div className="project-marquee">
        <Marquee pauseOnHover='true' className='marquee-container'>
            <img src={AAOG} alt='Project Images'/>
            <img src={LightPlanet} alt='Project Images'/>
            <img src={WooflyBox} alt='Project Images'/>
            <img src={Lubu} alt='Project Images'/>
            <img src={LocalGrowth} alt='Project Images'/>
            <img src={Brotha} alt='Project Images'/>
            <img src={RechargeHealth} alt='Project Images'/>
            <img src={SweatHead} alt='Project Images'/>
            <img src={EqualH} alt='Project Images'/>
        </Marquee>  
      </div>
      <div className="project-btn">
        <Button title='Recent Projects' linkUrl='/projects'/>
      </div>
    </div>
  )
}

import React from 'react'
import './ProjectSection.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Button from '../../components/button/Button.js'
import TheBackerHive from '../../assets/images/projects/The-Backer-Hive.jpg';
import CrowdFunderHub from '../../assets/images/projects/Crowdfunderhub.jpg';
import BinaryPatch from '../../assets/images/projects/Binary Patch.jpg';
import SkylineTechSolutions from '../../assets/images/projects/skyline.jpg';

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
            <img src={TheBackerHive} alt='Project Images'/>
            <img src={CrowdFunderHub} alt='Project Images'/>
            <img src={BinaryPatch} alt='Project Images'/>
            <img src={SkylineTechSolutions} alt='Project Images'/>
        </Marquee>  
      </div>
      <div className="project-btn">
        <Button title='Recent Projects' linkUrl='/projects'/>
      </div>
    </div>
  )
}

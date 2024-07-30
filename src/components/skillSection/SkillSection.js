import React from 'react'
import './SkillSection.css'
import Button from '../../components/button/Button.js'
import ReactJS from '../../assets/images/Skills/react.png';
import Wordpress from '../../assets/images/Skills/wordpress.png';
import HTML from '../../assets/images/Skills/html.png';
import CSS from '../../assets/images/Skills/css-3.png';
import Javascript from '../../assets/images/Skills/java-script.png';
import NodeJS from '../../assets/images/Skills/node-js.png';
import Figma from '../../assets/images/Skills/figma.png';
import AdobeXD from '../../assets/images/Skills/xd.png';

export default function SkillSection() {
  return (
    <div className='skill-container main-container-padding'>
      <div className="skill-text">
        <h5 className='sub-heading'>My Skills</h5>
        <h2 className='text-white'>Explore My <span className='text-accent-color'>Skills & Experience</span></h2>
        <p className='text-gray'>As a web developer with a strong foundation in both web development and web design, I possess a diverse skill set that spans front-end and back-end technologies</p>
        <div className="skill-btn">
            <Button title='My Skills'/>
        </div>
      </div>
      <div className="skill-details">
        <div className="skill-details-container">
            <div className="skill-details-item">
                <img src={ReactJS} alt='react-icon'/>
                <h6>React JS</h6>
                <div className="skill-details-item-counter">
                    <h6>80%</h6>
                </div>
            </div>
            <div className="skill-details-item">
                <img src={Wordpress} alt='react-icon'/>
                <h6>WordPress</h6>
                <div className="skill-details-item-counter">
                    <h6>95%</h6>
                </div>
            </div>
            <div className="skill-details-item">
                <img src={HTML} alt='react-icon'/>
                <h6>HTML</h6>
                <div className="skill-details-item-counter">
                    <h6>95%</h6>
                </div>
            </div>
            <div className="skill-details-item">
                <img src={CSS} alt='react-icon'/>
                <h6>CSS</h6>
                <div className="skill-details-item-counter">
                    <h6>95%</h6>
                </div>
            </div>
        </div>
        <div className="skill-details-container">
            <div className="skill-details-item">
                <img src={Javascript} alt='react-icon'/>
                <h6>JavaScript</h6>
                <div className="skill-details-item-counter">
                    <h6>90%</h6>
                </div>
            </div>
            <div className="skill-details-item">
                <img src={NodeJS} alt='react-icon'/>
                <h6>Node JS</h6>
                <div className="skill-details-item-counter">
                    <h6>50%</h6>
                </div>
            </div>
            <div className="skill-details-item">
                <img src={Figma} alt='react-icon'/>
                <h6>Figma</h6>
                <div className="skill-details-item-counter">
                    <h6>60%</h6>
                </div>
            </div>
            <div className="skill-details-item">
                <img src={AdobeXD} alt='react-icon'/>
                <h6>Adobe XD</h6>
                <div className="skill-details-item-counter">
                    <h6>50%</h6>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

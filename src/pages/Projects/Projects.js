import React from 'react'
import './Projects.css'
import Button from '../../components/button/Button.js'
import Pricing from '../../components/pricingSection/PricingSection.js'
import Header from '../../components/pageHeader/PageHeader.js'
import SecondaryHeader from '../../components/secondaryHeader/SecondaryHeader.js'
import SecondaryImage from '../../assets/images/Projects.png'
import TheBackerHive from '../../assets/images/projects/The-Backer-Hive.jpg'
import Crowdfunder from '../../assets/images/projects/Crowdfunderhub.jpg'
import Skyline from '../../assets/images/projects/skyline.jpg'
import BinaryPatch from '../../assets/images/projects/Binary Patch.jpg'
 
export default function Projects() {
  return (
    <div className='my-projects'>
      <Header title="Projects"/>
      <SecondaryHeader SecondaryHeaderImage={SecondaryImage} SubHeading='Recent Projects' BeforeSpanHeading='Real World' InsideSpanHeading='Projects' AfterSpanHeading='Completed' SecondaryHeaderDescription='My recent projects showcase my expertise in both WordPress and React.js, reflecting my ability to deliver robust and dynamic web solutions.' ButtonTitle='Contact Me' linkUrl='/contact'/>
      <div className="projects-container main-container-padding">
        
        <div className="projects-item">
            <div className="projects-item-img">
                <img src={TheBackerHive} alt='the backer hive website'/>
            </div>
            <div className="projects-item-content">
                <h5 className='sub-heading'>The Backer Hive</h5>
                <h2 className='text-white'><span className='text-accent-color'>Marketing</span> Company</h2>
                <p className='projects-item-content-description'>A vibrant community where ideas soar, connecting passionate backers and creators to bring innovative crowdfunding projects to life.
                </p>
                <a href='https://thebackerhive.com/' target="_blank" rel="noopener noreferrer">
                    <Button title='Visit Site' scrollToTop={false}/>
                </a>
            </div>
        </div>
        <div className="projects-item">
            <div className="projects-item-img">
                <img src={Crowdfunder} alt='crowdfunder website'/>
            </div>
            <div className="projects-item-content">
                <h5 className='sub-heading'>Crowdfunder Hub</h5>
                <h2 className='text-white'>Strategic <span className='text-accent-color'>Campaign</span> Solutions</h2>
                <p className='projects-item-content-description'>Empowering campaigns through innovative crowdfunding design, strategic marketing, and community-driven solutions for impactful results.
                </p>
                <a href='https://crowdfunderhub.com' target="_blank" rel="noopener noreferrer">
                    <Button title='Visit Site' scrollToTop={false}/>
                </a>
            </div>
        </div>
        <div className="projects-item">
            <div className="projects-item-img">
                <img src={Skyline} alt='crowdfunder website'/>
            </div>
            <div className="projects-item-content">
                <h5 className='sub-heading'>Skyline Tech Solutions</h5>
                <h2 className='text-white'><span className='text-accent-color'>Business Consulting & Tech</span> Solutions</h2>
                <p className='projects-item-content-description'>Providing expert business consulting, strategic marketing, and innovative tech solutions to drive your company's growth.
                </p>
                <a href='https://skylinetechsol.com' target="_blank" rel="noopener noreferrer">
                    <Button title='Visit Site' scrollToTop={false}/>
                </a>
            </div>
        </div>
        <div className="projects-item">
            <div className="projects-item-img">
                <img src={BinaryPatch} alt='crowdfunder website'/>
            </div>
            <div className="projects-item-content">
                <h5 className='sub-heading'>Binary Bio Medical</h5>
                <h2 className='text-white'><span className='text-accent-color'>Health</span> Care</h2>
                <p className='projects-item-content-description'>Creating medical devices that incorporate the latest advanced technology, simpler to use, smart and affordable for everyone.
                </p>
                <a href='https://binarybiomedical.com/' target="_blank" rel="noopener noreferrer">
                    <Button title='Visit Site' scrollToTop={false}/>
                </a>
            </div>
        </div>

      </div>
      <Pricing/>
    </div>
  )
}

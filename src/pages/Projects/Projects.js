import React from 'react'
import './Projects.css'
import Button from '../../components/button/Button.js'
import Pricing from '../../components/pricingSection/PricingSection.js'
import Header from '../../components/pageHeader/PageHeader.js'
import SecondaryHeader from '../../components/secondaryHeader/SecondaryHeader.js'
import SecondaryImage from '../../assets/images/Projects.png'
import AAOG from '../../assets/images/projects/AAOG.jpg';
import LightPlanet from '../../assets/images/projects/Light-Planet.jpg';
import LocalGrowth from '../../assets/images/projects/Local-growth.jpg';
import SweatHead from '../../assets/images/projects/Sweathead-1.jpg';
import RechargeHealth from '../../assets/images/projects/Recharge-Health.jpg';
import Zoomdle from '../../assets/images/projects/Zoomdle.png'
import TheBackerHive from '../../assets/images/projects/The-Backer-Hive.jpg'
import Crowdfunder from '../../assets/images/projects/Crowdfunderhub.jpg'
import Skyline from '../../assets/images/projects/skyline.jpg'


export default function Projects() {
  return (
    <div className='my-projects'>
      <Header title="Projects"/>
      <SecondaryHeader SecondaryHeaderImage={SecondaryImage} SubHeading='Recent Projects' BeforeSpanHeading='Real World' InsideSpanHeading='Projects' AfterSpanHeading='Completed' SecondaryHeaderDescription='My recent projects showcase my expertise in both WordPress and React.js, reflecting my ability to deliver robust and dynamic web solutions.' ButtonTitle='Contact Me' linkUrl='/contact'/>
      <div className="projects-container main-container-padding">
        <div className="projects-item">
            <div className="projects-item-img">
                <img src={AAOG} alt='all ages of geek website'/>
            </div>
            <div className="projects-item-content">
                <h5 className='sub-heading'>All Ages Of Geek</h5>
                <h2 className='text-white'><span className='text-accent-color'>Production & Streaming</span> Service</h2>
                <p className='projects-item-content-description'>The best platform to enjoy a variety of high-quality videos that are sure to entertain and captivate you. Whether you’re a die-hard fan of a particular TV show, podcast, reaction, or just love to see the behind-the-scenes action of how content is produced, their videos have something for everyone.</p>
                <Button title='Visit Site'/>
            </div>
        </div>
        <div className="projects-item">
            <div className="projects-item-img">
                <img src={LightPlanet} alt='light planet website'/>
            </div>
            <div className="projects-item-content">
                <h5 className='sub-heading'>Light Planet</h5>
                <h2 className='text-white'><span className='text-accent-color'>Lighting & Electrical</span> Solutions</h2>
                <p className='projects-item-content-description'>Illuminate your expertise in LED lighting and electrical solutions on LightPlanet, a sophisticated platform connecting you with clients seeking specialized services. Cultivate a compelling online presence showcasing your innovative lighting solutions, technical prowess, and electrical expertise. Elevate your brand and captivate potential clients in the dynamic world of lighting and electrical specialties.</p>
                <Button title='Visit Site'/>
            </div>
        </div>
        <div className="projects-item">
            <div className="projects-item-img">
                <img src={LocalGrowth} alt='local growth website'/>
            </div>
            <div className="projects-item-content">
                <h5 className='sub-heading'>Local Growth</h5>
                <h2 className='text-white'><span className='text-accent-color'>AI To Boost</span> Small Businesses</h2>
                <p className='projects-item-content-description'>Are you a small business without a huge marketing budget to spare? Take a look at this incredible platform from one of our clients. This AI-powered toolkit is designed to give small business owners a chance to compete in ever-evolving, competitive markets and achieve their business goals. It not only saves you time and money but also preserves your valuable energy.</p>
                <Button title='Visit Site'/>
            </div>
        </div>
        <div className="projects-item">
            <div className="projects-item-img">
                <img src={SweatHead} alt='sweathead website'/>
            </div>
            <div className="projects-item-content">
                <h5 className='sub-heading'>Sweathead</h5>
                <h2 className='text-white'><span className='text-accent-color'> Business Strategy</span> Seller</h2>
                <p className='projects-item-content-description'>Your ultimate resource for all things related to business strategy. Designed and dedicated to helping businesses of all sizes achieve their goals by providing them with the insights and tools they need to succeed.</p>
                <Button title='Visit Site'/>
            </div>
        </div>
        <div className="projects-item">
            <div className="projects-item-img">
                <img src={RechargeHealth} alt='recharge health website'/>
            </div>
            <div className="projects-item-content">
                <h5 className='sub-heading'>Recharge Health</h5>
                <h2 className='text-white'>Journey To <span className='text-accent-color'>Wellness</span> </h2>
                <p className='projects-item-content-description'>Discover a sanctuary dedicated to fostering well-being through rejuvenating services like infrared saunas, cold plunges, and massage therapy. Join us on a transformative journey towards improved health, relaxation, and vitality at our esteemed sauna center.</p>
                <Button title='Visit Site'/>
            </div>
        </div>
        <div className="projects-item">
            <div className="projects-item-img">
                <img src={Zoomdle} alt='zoomdle website'/>
            </div>
            <div className="projects-item-content">
                <h5 className='sub-heading'>Zoomdle</h5>
                <h2 className='text-white'> Movie <span className='text-accent-color'>Guessing Game</span></h2>
                <p className='projects-item-content-description'>Given partial image of a movie you have to guess movie name in three attempts. Also you are provided with three partial images of movie as a hint.
                </p>
                <Button title='Visit Site'/>
            </div>
        </div>
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

      </div>
      <Pricing/>
    </div>
  )
}

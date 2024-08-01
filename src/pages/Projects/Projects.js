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
import Lubu from '../../assets/images/projects/Lubu.jpg';
import WooflyBox from '../../assets/images/projects/Woofly-Box.jpg';
import Brotha from '../../assets/images/projects/Brotha-whiskey.jpg';
import EqualH from '../../assets/images/projects/Equal-h.jpg';
import SweatHead from '../../assets/images/projects/Sweathead-1.jpg';
import RechargeHealth from '../../assets/images/projects/Recharge-Health.jpg';

export default function Projects() {
  return (
    <div className='my-projects'>
      <Header title="Projects"/>
      <SecondaryHeader SecondaryHeaderImage={SecondaryImage} SubHeading='Recent Projects' BeforeSpanHeading='Real World' InsideSpanHeading='Projects' AfterSpanHeading='Completed' SecondaryHeaderDescription='My recent projects showcase my expertise in both WordPress and React.js, reflecting my ability to deliver robust and dynamic web solutions.' ButtonTitle='Contact Me'/>
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
                <img src={Lubu} alt='lubu website'/>
            </div>
            <div className="projects-item-content">
                <h5 className='sub-heading'>Lubu</h5>
                <h2 className='text-white'>Revolutionizing <span className='text-accent-color'> Mobility</span></h2>
                <p className='projects-item-content-description'>Step into the future with LUBU, a revolutionary wearable device meticulously designed to capture comprehensive movement data right from the foundation of our mobility—the feet. Experience cutting-edge technology that redefines how we understand and optimize our every step.</p>
                <Button title='Visit Site'/>
            </div>
        </div>
        <div className="projects-item">
            <div className="projects-item-img">
                <img src={WooflyBox} alt='woofly website'/>
            </div>
            <div className="projects-item-content">
                <h5 className='sub-heading'>Woofly Box</h5>
                <h2 className='text-white'><span className='text-accent-color'> Tail-Wagging</span> Delights</h2>
                <p className='projects-item-content-description'>Woofly is dedicated to delivering premium, delightful treats that prioritize canine happiness and strengthen the bond between dogs and their owners. We’re committed to providing high-quality, nutritious options that bring joy and wagging tails straight to your doorstep.</p>
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
                <img src={Brotha} alt='brotha website'/>
            </div>
            <div className="projects-item-content">
                <h5 className='sub-heading'>Brotha Whiskey</h5>
                <h2 className='text-white'><span className='text-accent-color'> Baverage</span> Marketing</h2>
                <p className='projects-item-content-description'>Indulge in the rich and smooth experience of Brotha Whiskey. Crafted with precision and passion, this whiskey is a tribute to soulful moments and good times. Elevate your spirits with Brotha Whiskey – where every sip tells a story of craftsmanship and celebration.</p>
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
                <img src={EqualH} alt='equalh trade website'/>
            </div>
            <div className="projects-item-content">
                <h5 className='sub-heading'>Equalh Trade</h5>
                <h2 className='text-white'> <span className='text-accent-color'>Trading</span> Platform</h2>
                <p className='projects-item-content-description'>Discover financial growth with Equal H trading. Unlock smart investing in a secure space. Explore markets, diversify, and overcome challenges for success. Redefine your trading experience.</p>
                <Button title='Visit Site'/>
            </div>
        </div>

      </div>
      <Pricing/>
    </div>
  )
}

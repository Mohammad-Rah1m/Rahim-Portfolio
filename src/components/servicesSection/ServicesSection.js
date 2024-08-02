import React from 'react'
import { Link } from 'react-router-dom'
import './ServicesSection.css'
import arrowRightIcon from '../../assets/images/arrow-up-right.svg';
import Button from '../../components/button/Button.js'
export default function ServicesSection() {
  return (
    <div className='services-container main-container-padding'>
      <div className="services-text">
        <h5 className='sub-heading'>Services</h5>
        <h2 className='text-white'>My <span className='text-accent-color'> Special Services </span> For Your Business Development</h2>
      </div>
      <div className="services-card">
        <div className="services-card-container">
            <Link to="/wordpress-solutions" className="services-card-item">
                <div className="services-card-item-text">
                    <h5 className='text-white'>Wordpress Solutions</h5>
                    <p className='text-gray'>Build a dynamic and responsive website in Wordpress</p>
                </div>
                <div className='services-icon-container'>
                    <img src={arrowRightIcon} alt="icon" />
                </div>
            </Link>
            <Link to="/react-js-development" className="services-card-item">
                <div className="services-card-item-text">
                    <h5 className='text-white'>React JS Development</h5>
                    <p className='text-gray'>Create a appealing Front-End in React JS</p>
                </div>
                <div className='services-icon-container'>
                    <img src={arrowRightIcon} alt="icon" />
                </div>
            </Link>
        </div>
        <div className="services-card-container">
            <Link to="/figma-designs" className="services-card-item">
                <div className="services-card-item-text">
                    <h5 className='text-white'>Figma Designs</h5>
                    <p className='text-gray'>UI/UX solutions in Figma</p>
                </div>
                <div className='services-icon-container'>
                    <img src={arrowRightIcon} alt="icon" />
                </div>
            </Link>
            <Link to="/node-js" className="services-card-item">
                <div className="services-card-item-text">
                    <h5 className='text-white'>Node JS</h5>
                    <p className='text-gray'>Full-Stack Development in MERN</p>
                </div>
                <div className='services-icon-container'>
                    <img src={arrowRightIcon} alt="icon" />
                </div>
            </Link>
        </div>
        <div className="services-btn">
            <Button title="My Services" linkUrl='/services'/>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import Header from '../../components/pageHeader/PageHeader.js'
import Button from '../../components/button/Button.js'
import './About.css'
export default function About() {
  return (
    <div className='about-container'>
      <Header title="About Me" description="I am a passionate Web Designer and Developer 
      with a keen eye for aesthetics and a deep understanding of modern web technologies. 
      Specializing in creating responsive, user-friendly websites, I blend creativity with 
      technical expertise to deliver seamless digital experiences."/>
      <div className='about-services'>
        <div className="about-services-heading">
            <h5>
                Popular Services
            </h5>
            <h2>
            My <span>Special Service</span> For your Business Development
            </h2>
        </div>
        <div className="about-services-cards">
            <div className="about-services-cards-block">
                <div className="about-services-cards-item">
                    <div className="cards-item-number">
                        <h3>01</h3>
                    </div>
                    <div className="cards-item-text">
                        <h3>Brand Identity Design</h3>
                        <p>Lorem, ipsum dolor.</p>
                    </div>
                </div>
                <div className="about-services-cards-item">
                    <div className="cards-item-number">
                        <h3>02</h3>
                    </div>
                    <div className="cards-item-text">
                        <h3>Website Design</h3>
                        <p>Lorem, ipsum dolor.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="about-me-exp">
            <div className="about-me-exp-text">
                <h5>Experience</h5>
                <h2>Professional <span>Problem Solutions</span> For Digital Products</h2>
                <p class="desc">At vero eos et accusamus etodio dignissimos ducimus praesentium voluptatum 
                    corrupti quos dolores quas molestias excepturi sint occaecati cupiditate 
                    provident qui officia deserunt mollitia animi, id est laborum et dolorum</p>
                    <Button title="Hire Me"/>
            </div>
            <div className="about-me-exp-img">
                <div className='img-text'>
                    <h4>2+ Years Of Experience</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

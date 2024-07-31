import React from 'react'
import Header from '../../components/pageHeader/PageHeader.js'
import AboutSection from '../../components/aboutSection/AboutSection.js'
import ResumeSection from '../../components/resumeSection/ResumeSection.js'
import Skills from '../../components/skillSection/SkillSection.js'
import Testimonials from '../../components/testimonial/Testimonial.js'
import './About.css'

export default function About() {
  return (
    <div className='about-container'>
      <Header title="About Me" description="I am a passionate Web Designer and Developer 
      with a keen eye for aesthetics and a deep understanding of modern web technologies. 
      Specializing in creating responsive, user-friendly websites, I blend creativity with 
      technical expertise to deliver seamless digital experiences."/>
      <AboutSection/>
      <ResumeSection/>
      <Skills/>
      <div className="about-container-testimonials main-container-padding">
        <div className="testimonials-text">
            <h5 className='sub-heading'>Clients Testimonials</h5>
            <h2 className='text-white'>I've 100+ Clients <span className='text-accent-color'>Feedback</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit temporibus, quam nobis unde eligendi quisquam reiciendis optio!</p>
        </div>
        <div className="testimonials-item">
            <Testimonials/>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import Header from '../../components/pageHeader/PageHeader.js'
import AboutSection from '../../components/aboutSection/AboutSection.js'
import ResumeSection from '../../components/resumeSection/ResumeSection.js'
import Skills from '../../components/skillSection/SkillSection.js'
import Testimonials from '../../components/testimonial/Testimonial.js'
import './About.css'
import SecondaryHeader from '../../components/secondaryHeader/SecondaryHeader.js'
import SecondaryImage from '../../assets/images/About.png'

export default function About() {
  return (
    <div className='about-container'>
      <Header title="About"/>
      <SecondaryHeader SecondaryHeaderImage={SecondaryImage} SubHeading='Who Am I' BeforeSpanHeading='Experienced' InsideSpanHeading='Web Designer & Developer' AfterSpanHeading='' SecondaryHeaderDescription='As a passionate and innovative web designer and developer, I bring two years of professional experience in creating dynamic, user-centric websites. My expertise lies in custom web development, WordPress solutions, and front-end development using React.' ButtonTitle='Contact Me'/>
      <Skills/>
      {/* <AboutSection/> */}
      <ResumeSection/>
      
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

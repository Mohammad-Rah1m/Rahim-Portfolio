import React from 'react'
import './Home.css'
// import Button from '../../components/button/Button.js'
// import mailIcon from '../../assets/images/mail.svg';
// import phoneIcon from '../../assets/images/phone.svg';
import HeroSection from '../../components/heroSection/HeroSection.js'
import AboutSection from '../../components/aboutSection/AboutSection.js'
import ServicesSection from '../../components/servicesSection/ServicesSection.js'
import ResumeSection from '../../components/resumeSection/ResumeSection.js'
import ProjectSection from '../../components/projectsSection/ProjectSection.js'
import SkillSection from '../../components/skillSection/SkillSection.js'
import PricingSection from '../../components/pricingSection/PricingSection.js'

export default function Home() {
  return (
    <div className='main-container'>
      <HeroSection/>
      <AboutSection/>
      <ResumeSection/>
      <ServicesSection/>
      <ProjectSection/>
      <SkillSection/>
      <PricingSection/>
    </div>
  )
}

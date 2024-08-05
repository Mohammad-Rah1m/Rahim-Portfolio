import React from 'react'
import ContactForm from '../../components/contactForm/ContactForm';
import './Contact.css'
import Header from '../../components/pageHeader/PageHeader'
import EmailIcon from '../../assets/images/mail-footer.svg'
import PhoneIcon from '../../assets/images/phone-footer.svg'
import MapIcon from '../../assets/images/map-pin.svg'
import LinkedInIcon from '../../assets/images/linkedin.svg'
import InstagramIcon from '../../assets/images/instagram.svg'



export default function Contact() {
  return (
      <div className='my-contact'>
        <Header title='Contact'/>
        <div className="my-contact-container main-container-padding">
            <div className="contact-container-details">
                <h2>Contact Information</h2>
                <div className="contact-details-block">
                  <img src={EmailIcon} alt='email icon'/>
                  <h5>Rahimchangezi5@gmail.com</h5>
                </div>
                <div className="contact-details-block">
                  <img src={PhoneIcon} alt='email icon'/>
                  <h5>03138437243</h5>
                </div>
                <div className="contact-details-block">
                  <img src={MapIcon} alt='email icon'/>
                  <h5>DHA Phase 1, Lahore, Pakistan</h5>
                </div>
                <div className="contact-details-block social">
                  <img src={LinkedInIcon} alt='email icon'/>
                  <img src={InstagramIcon} alt='email icon'/>
                </div>
            </div>
            <div className="contact-container-form">
                <ContactForm/>
            </div>
        </div>
    </div>
  )
}

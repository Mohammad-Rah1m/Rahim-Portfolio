import React from "react";
import ContactForm from "../../components/contactForm/ContactForm";
import "./Contact.css";
import Header from "../../components/pageHeader/PageHeader";
import MailIcon from "../../assets/images/mail-footer.svg";
import PhoneIcon from "../../assets/images/phone-footer.svg";
import MapIcon from "../../assets/images/map-pin.svg";
import Linkedin from "../../assets/images/linkedin.svg";
import Instagram from "../../assets/images/instagram.svg";
import Github from "../../assets/images/github.svg";

export default function Contact() {
  return (
    <div className="my-contact">
      <Header title="Contact" />
      <div className="my-contact-container main-container-padding">
        <div className="contact-container-details">
          <h2>Contact Information</h2>
          <a href="mailto:rahimchangezi5@gmail.com" className="contact-details-link">
                <div className="contact-details-block">
                    <img src={MailIcon} alt="icon" />
                    <h5>rahimchangezi5@gmail.com</h5>
                </div>
            </a>
            <a href="tel:03138437243" className="contact-details-link">
                <div className="contact-details-block">
                    <img src={PhoneIcon} alt="icon" />
                    <h5>03138437243</h5>
                </div>
            </a>
            <a href="https://www.google.com/maps/place/DHA+Phase+1,+Lahore,+Pakistan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-details-link">
                <div className="contact-details-block">
                    <img src={MapIcon} alt="icon" />
                    <h5>DHA Phase 1, Lahore Pakistan</h5>
                </div>
            </a>
          <div className="contact-details-social">
            <a
              href="https://www.linkedin.com/in/mohammad-rah1m/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Linkedin} alt="icon" />
            </a>
            <a
                href="https://www.instagram.com/mohammadrah1m/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Instagram} alt="icon" />
              </a>
              <a
                href="https://github.com/Mohammad-Rah1m"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Github} alt="icon" />
              </a>
          </div>
        </div>
        <div className="contact-container-form">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import './ContactPopUp.css';
import { useDispatch, useSelector } from 'react-redux';
import { setPlan , setPopUp} from '../../redux/cartSlice.js';
import CloseIcon from '../../assets/images/close.svg'

export default function ContactPopUp() {
  const dispatch = useDispatch();
  const plan = useSelector((state) => state.cart.plan);

  console.log("plan is:",plan);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    dispatch(setPlan(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send('service_ls156ui', 'template_35nqcdt', formData, '3ZT1jTIKK0wp5YR9g')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", purpose: "", message: "" });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert("Failed to send message. Please try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  useEffect(() => {
    // Add 'no-scroll' class to body when popup is open
    document.body.classList.add('no-scroll');

    // Remove 'no-scroll' class when the component unmounts (popup is closed)
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);
  const closePopup = () => {
    dispatch(setPopUp(false));
  };

  return (
    <div className="contact-popup-container">
      <form onSubmit={handleSubmit} className="popup-form">
      <h2 className="contact-form-title">Get In Touch</h2>
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
          />
        </div>
        <div className="form-group">
          <select
          name="purpose"
          value={plan}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select plan
          </option>
          <option value="basic">Basic Plan</option>
          <option value="standard">Standard Plan</option>
          <option value="premium">Premium Plan</option>
        </select>
        </div>
        <div className="form-group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            required
          />
        </div>
        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Form"}
        </button>
        <img src={CloseIcon} alt="Close Popup Icon" className="close-popup-btn" onClick={closePopup}/> 
      </form>
    </div>
  )
}

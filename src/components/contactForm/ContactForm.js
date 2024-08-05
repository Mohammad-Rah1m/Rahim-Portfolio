import React, { useState } from "react";
import emailjs from "emailjs-com";
import './ContactForm.css'


const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_9dtzs9p', 'template_54a23ye', formData, 'O4dFK-5tLNAKo-FRE')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", purpose: "", message: "" });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <div className="contact-form-container">
      <h2 className="contact-form-title">Get In Touch</h2>
      <form onSubmit={handleSubmit} className="contact-form">
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
            value={formData.purpose}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select purpose</option>
            <option value="wordpress">WordPress</option>
            <option value="react">React</option>
            <option value="hiring">Hiring</option>
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
        <button type="submit" className="submit-button">Submit Form</button>
      </form>
    </div>
  );
};

export default App;

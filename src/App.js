import './App.css';
import Navbar from './components/navbar/NavbarSticky.js'
import Footer from './components/footer/Footer.js'
import ContactPopUp from './components/contactPopUp/ContactPopUp.js'

import Home from './pages/Home/Home.js'
import About from './pages/About/About.js'
import Services from './pages/Services/Services.js'
import Projects from './pages/Projects/Projects.js'
import Contact from './pages/Contact/Contact.js'
import React from 'react';  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/global.css';
import ScrollToTop from './components/scrollToTop/ScrollToTop.js';
import { useSelector } from 'react-redux';

function App() {
  const isPopupOpen = useSelector((state) => state.cart.popupOpen);
  return (
    <>
    <Router basename="/Rahim-Portfolio">
      <ScrollToTop />
      <Navbar title="Mohammad Rahim"/>
      {/* <Counter mode={mode}/> */}
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/projects" element={<Projects />} />
          {/* <Route exact path="/contact" element={<Contact />} /> */}
        </Routes>
    <Footer/>
    {isPopupOpen && <ContactPopUp />}
    </Router>
    </>
  );
}

export default App;

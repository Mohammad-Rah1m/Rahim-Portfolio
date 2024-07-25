// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar.js'
import Footer from './components/footer/Footer.js'
// import Counter from './components/Counter.js'
import Home from './pages/Home/Home.js'
import About from './pages/About/About.js'
// import About from './components/About.js'
// import Contact from './components/Contact.js'
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/global.css';


function App() {
  const [mode,setMode]=useState('light');
  const toggleMode=()=>{
    if (mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor="#404040";
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white";
    }
  }
  return (
    <>
    <Router>
    <Navbar title="Mohammad Rahim" mode={mode} toggleMode={toggleMode}/>
    {/* <Counter mode={mode}/> */}
    <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          {/* <Route exact path="/contact" element={<Contact />} /> */}
        </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;

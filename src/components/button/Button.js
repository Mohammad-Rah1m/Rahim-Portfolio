import React from 'react'
import './Button.css'
import rightIcon from '../../assets/images/right.svg';
// import { Link } from 'react-router-dom';
import {useNavigate }  from 'react-router-dom';

export default function Button(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    window.scrollTo(0, 0); 
    navigate(props.linkUrl); 
  };

  return (
    <div className='button-main-container'>
      <div onClick={handleClick} className="button-container">
        <p>{props.title}</p>
        <img src={rightIcon} alt="Me" />
      </div>
    </div>
  )
}

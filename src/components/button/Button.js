import React from 'react'
import './Button.css'
import rightIcon from '../../assets/images/right.svg';

export default function Button(props) {
  return (
    <div className='button-main-container'>
        <div className="button-container">
            <p>{props.title}</p>
            <img src={rightIcon} alt="Me" />
        </div>
    </div>
  )
}

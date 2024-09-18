import React from 'react'
import './TogglePopupBtn.css'
import rightIcon from '../../assets/images/right.svg';
import {useDispatch } from 'react-redux'
import { setPopUp } from '../../redux/cartSlice.js'

export default function Button(props) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setPopUp(true));
  }

  return (
    <div className='button-main-container'>
      <div onClick={handleClick} className="button-container">
        <p>{props.title}</p>
        <img src={rightIcon} alt="Me" />
      </div>
    </div>
  )
}

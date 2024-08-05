import React from 'react'
import Button from '../../components/button/Button.js'
import './SecondaryHeader.css'
export default function SecondaryHeader(props) {
  return (
    <div className='secondary-header-container main-container-padding'>
        <div className="secondary-header-image">
            <img src={props.SecondaryHeaderImage} alt='secondary header'/>
        </div>
        <div className="secondary-header-content">
            <h5 className='sub-heading'>{props.SubHeading}</h5>
            <h2 className='text-white'>{props.BeforeSpanHeading} <span className='text-accent-color'>{props.InsideSpanHeading}</span> {props.AfterSpanHeading}</h2>
            <p className='content-description'>{props.SecondaryHeaderDescription}</p>
            <Button title={props.ButtonTitle} linkUrl={props.linkUrl}/>
        </div>
    </div>
  )
}

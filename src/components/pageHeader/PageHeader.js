import React from 'react'
import './PageHeader.css'
import DotIcon from '../../assets/images/circle.svg';
import { Link } from 'react-router-dom'

export default function PageHeader(props) {
  return (
    <div className='page-header-container main-container-padding'>
      <div className="page-header-title">
        <h1>{props.title}</h1>
      </div>
      <div className="page-header-menu">
        <Link to="/" className='page-header-link'><h6>Rahim Portfolio</h6></Link>
        <img src={DotIcon} alt='dot icon'/>
        <h6 className='active'>{props.title}</h6>
      </div>
    </div>
  )
}

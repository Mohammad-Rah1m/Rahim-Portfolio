import React from 'react'
import './PageHeader.css'
export default function PageHeader(props) {
  return (
    <div className='page-header-container'>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

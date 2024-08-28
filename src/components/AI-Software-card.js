import React from 'react'
import "./style/AISoftware.css"

const AISoftwarecard = ({icon,title,subtitle}) => {
  return (
    <div className='AISoftware-card'>
      <img src={icon} alt='icon'/>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  )
}

export default AISoftwarecard

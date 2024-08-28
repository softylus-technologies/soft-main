import React from 'react'
import "./style/Whatsapp.css"
import { Link } from 'gatsby'
const Whatsapp = () => {
  return (
    <Link  to='https://wa.link/rniryz' rel="canonical" target='_blank'>
        <div className='Whatsapp-container'>
            <img src='/wahtsapp.svg' alt='wahtsapp'/>
            <p>WhatsApp</p>
        </div>
    </Link>
  )
}

export default Whatsapp

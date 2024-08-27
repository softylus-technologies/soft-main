import React from 'react'
import "./style/Label.css"
const Label = ({ service }) => {
    return (
      <section className='label-sec'>
        <div className='label-container'>
          {service.map((item, index) => (
            <div key={index} className='label-item'>
              <img src='/Checked_Icon_UIA.png' alt='Checked icon' />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };

export default Label

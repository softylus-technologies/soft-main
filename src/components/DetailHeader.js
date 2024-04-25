import React from 'react'
import "./style/DetailHeader.css"
const DetailHeader = ({Title,TitleOverSpan}) => {
  return (
    <div className='DetailHeader-sec'>
        <div className='DetailHeader-container'>
            <h1>
                {Title}<span> Softylus </span> {TitleOverSpan}
            </h1>
        </div>
    </div>
  )
}

export default DetailHeader
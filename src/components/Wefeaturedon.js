import React from 'react'
import "./style/Wefeaturedon.css"
import { StaticImage } from "gatsby-plugin-image"
const Wefeaturedon = () => {
  return (
    <div className='featured-contianer'>
        <h1>Featured In</h1>
        <div className='featured-sec' >
            <StaticImage src='../../static/image 16.svg' className='featured.img'/>
            <StaticImage src='../../static/image 17.svg' className='featured.img'/>
            <StaticImage src='../../static/image 18.svg' className='featured.img'/>
            <StaticImage src='../../static/image 19.svg' className='featured.img'/>
            <StaticImage src='../../static/image 20.svg' className='featured.img'/>
            <StaticImage src='../../static/image 21.svg' className='featured.img'/>

        </div>
    </div>
  )
}

export default Wefeaturedon
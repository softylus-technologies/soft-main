import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import "./style/FeatureSection.css"
import "./style/FeatureSection2.css"
const FeatureSection2 = ({ Title, SubHeading, buttonText, onButtonClick, imageSrc,className,FrameSrc,IconSrc1,Des1,IconSrc2,Des2,IconSrc3,Des3,IconSrc4,Des4}) => {
  return (
    <>
    <div className='sec-center'>
  <section className='sec-width'> {/* Use semantic tags like <section> for content sections */}
    <div className='image-sec'>
        <img src={imageSrc} alt="Description of the main image" />
      {/* Add aria-label to buttons to describe the action for screen readers */}
    </div>
    <aside className={`title-sec ${className}`}> {/* Use <aside> if this content is complementary to the main content */}
      
      <h1 className='h1-text'>{Title}</h1> {/* Ensure that <h1> is used once per page for the main title */}
      <p className="p-text">{SubHeading}</p>
      <div className='secIcon'>
        <div className='sec1-icon'>
          <h2 className='heading-icon'> {/* Use <h2> for subheadings if <h1> is already used above */}
            <img src={IconSrc1} alt="Description of Icon 1" />{/* Add alt attributes to all images */}
            {Des1}
          </h2>
          <h2 className='heading-icon'>
            <img src={IconSrc2} alt="Description of Icon 2" />
            {Des2}
          </h2>
        </div>
        <div className='sec2-icon'>
          <h2 className='heading-icon'>
            <img src={IconSrc3} alt="Description of Icon 3" />
            {Des3}
          </h2>
          <h2 className='heading-icon'>
            <img src={IconSrc4} alt="Description of Icon 4" />
            {Des4}
          </h2>
        </div>
      </div>
      <button className='btn-sec' onClick={onButtonClick} aria-label="Describe action here">{buttonText}</button>
    </aside>
  </section>
</div>
<div class="container">
    <img class="circle-sec" id="circle1" src='/Frame 1000003358.svg'/>
</div>
</>
  )
}

export default FeatureSection2
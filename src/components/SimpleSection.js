import React from 'react'
import "./style/FeatureSection.css"
import "./style/FeatureSection2.css"
import { useNavigate } from 'react-router-dom'; 
import { Link } from "gatsby"
import { Button} from 'reactstrap';

const SimpleSection = ({ Title, SubHeading, buttonText, onButtonClick, imageSrc,className,FrameSrc,IconSrc1,Des1,IconSrc2,Des2,IconSrc3,Des3,IconSrc4,Des4,buttonStyle,path}) => {
  // let navigate = useNavigate();
  // function handleClick() {
  //   navigate('/ContactUs'); // use navigate function
  //   // Or any other action you want to perform
  // }
  return (
    //Semple section just image and text
    <div className='sec-center'>
    <section className='sec-width'> {/* Use semantic tags like <section> for content sections */}
      <div className='image-sec'>
          <img src={imageSrc} alt="Description of the main image" />
        {/* Add aria-label to buttons to describe the action for screen readers */}
      </div>
      <aside className={`title-sec simple-edit ${className}`}> {/* Use <aside> if this content is complementary to the main content */}
        
        <h1 className='h1-text'>{Title}</h1> {/* Ensure that <h1> is used once per page for the main title */}
        <p className="p-text">{SubHeading}</p>
         <Button className='btn-sec'  aria-label="Describe action here" href={path}>{buttonText}</Button>
      </aside>
    </section>
  </div>
  )
}

export default SimpleSection
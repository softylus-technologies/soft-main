import React, { useState } from 'react';
import "../style/projects.css"
import imagesData from '../sources/projects.json';
import FooterCon from "../components/FooterCon"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Seo from '../components/seo';
const ProjectCard = ({ image, title, description, onClick, isActive,className }) => {
  return (
    <div className={`${className} card ${isActive ? 'active' : ''}`} onClick={onClick}>
      <div className="card-image">
        <img src={image.url} alt={image.altText} />
      </div>
      <div className="card-content">
        <h2>{title}</h2>
        {isActive && <p>{description}</p>}
      </div>
    </div>
  );
}

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle active state or deactivate if the same card is clicked
  };

  return (
    <>
    <Seo title='Our Projects | Showcase of Softylus Innovations'
    description="Dive into our portfolio of completed projects. From web applications to mobile platforms, see how our innovative solutions have propelled businesses forward."
    />
    <NavBar/>
    <div className='sec-project'>
      <div className='title-project'>
        <h1>Check Out a Few Recent Projects</h1>
        <p>From award-winning iOS and Android app development to elegant, seamless web development, we build products that thrive at the intersection of business goals and user needs. </p>
      </div>
    </div>
    <div className="gallery">
      {imagesData.map((image, index) => (
        <ProjectCard
         className={image.className}
          key={index}
          image={image}
          title={image.title}
          description={image.description}
          onClick={() => handleClick(index)}
          isActive={index === activeIndex}
        />
      ))}
    </div>
    <FooterCon
      Title="See if"
      TitleOverSpan="is right for you.Let’s make something great"
      SubHeading="Talk to us and get the help you need with no extra fees, consult for free."
      />
      <Footer/>
    </>
  );
}

export default Projects
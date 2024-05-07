import React from 'react'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Wefeaturedon from "../components/Wefeaturedon"
import FooterCon from "../components/FooterCon"
import Seo from '../components/seo';
import "../style/Clients.css"
const Clients = () => {
  return (
    <>
    <Seo title="Our Clients | Softylus Success Stories"
    description=" Proudly serving a diverse clientele. Read success stories and testimonials from businesses that have achieved remarkable growth with Softylus's software solutions."/>
    <NavBar/>
    <div className='Clients-sec'>
        <div className='Clients-container'>
          <div className='center-clints-title'>
            <div className='Clients-title'>
              <h1>Clients trust <span>Softylus</span> as their partner for progress</h1>
              <p>At Softylus, our clients are at the heart of everything we do. We understand that without your trust and support, our success wouldn't be possible. That's why we've dedicated this page to you, our valued clients.</p>
            </div>
          </div>
          <div className='clients-logo-sec'>
            <div className='client-image-border'><img src='/image 26.svg' alt='Logo 1'/></div>
            <div className='client-image-border'><img src='/image 27.svg' alt='Logo 2'/></div>
            <div className='client-image-border'><img src='/Group 1000003292.svg' alt='Logo 3'/></div>
            <div className='client-image-border'><img src='/image 30.svg' alt='Logo 4'/></div>
            <div className='client-image-border'><img src='/image 31.svg' alt='Logo 5'/></div>
            <div className='client-image-border'><img src='/image 32.svg' alt='Logo 6'/></div>
            <div className='client-image-border'><img src='/Frame 1000003310.svg' alt='Logo 7'/></div>
            <div className='client-image-border'><img src='/logo.svg' alt='Logo 8'/></div>
            <div className='client-image-border'><img src='/logo-white-1 2.svg' alt='Logo 9'/></div>
            <div className='client-image-border'><img src='/Layer_1 (4).svg' alt='Logo 10'/></div>
            <div className='client-image-border'><img src='/Group 2 (4).svg' alt='Logo 11'/></div>
            <div className='client-image-border'><img src='/Untitled-1 1 1.svg' alt='Logo 12'/></div>
            <div className='client-image-border'><img src='/FOR-WEB00-1-1-1024x1024 1.svg' alt='Logo 13'/></div>
            <div className='client-image-border'><img src='/logo 2.svg' alt='Logo 14'/></div>
          </div>
        </div>
    </div>
    <Wefeaturedon/>
    <FooterCon
     Title="See if"
     TitleOverSpan="is right for you.Let’s make something great"
     SubHeading="Talk to us and get the help you need with no extra fees, consult for free."
    />
    <Footer/>
    </>
  )
}

export default Clients
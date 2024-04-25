import React from 'react'
import "./style/OurDevelopment.css"
const OurDevelopment = () => {
  return (
    <section className='OurDevelopment-sec'>
        <div className='OurDevelopment-container'>
            <div className='OurDevelopment-sec-right'>
                <h1>Our development cycle covers all your needs</h1>
                <p>To bring the world closer through technology, and enhance our optimal solutions’ reach around the globe, so that, geographical barriers no longer hinder anyone from advancing</p>
                <button className='btn-sec'>Get free consultation</button>
            </div>
            <div className='OurDevelopment-sec-left'>
                <div className='OurDevelopment-card'>
                    <h1>1.</h1>
                    <h2>Analysis And Planning</h2>
                    <p>At this stage, you’ll have the chance to share your thoughts and requirements with the teams responsible to assist you with that. The main goal will be to list out the end goals and help you discover them as well if you still haven’t got a clear vision of your needs yet.</p>
                </div>
                <div  className='OurDevelopment-card'>
                    <h1>2.</h1>
                    <h2>Design And Prototyping</h2>
                    <p>The second stage involves sharing the sample designs and prototypes for the previously discussed requirements. A simple model of the software before creation. The goal will be to tackle any design modifications or enhancements before the development team and UX/UI team proceeds with the work.</p>
                </div>
                <div  className='OurDevelopment-card'>
                    <h1>3.</h1>
                    <h2>Software Development</h2>
                    <p>This stage is the critical part where the team makes sure everything is built and coded with a clean touch that guarantees to bring the prototype popping live. The team will have you included even during this stage so you’re eyes are with us through every step of the road, so rest assured.</p>
                </div>
                <div  className='OurDevelopment-card'>
                    <h1>4.</h1>
                    <h2>Quality Assurance</h2>
                    <p>At this stage, testing is made to check the performance of the developed product. Our qualified quality team will double-check that the end product matches the criteria set to create it. This means identifying any potential drawbacks that may hinder any part before it’s deemed perfectly developed.</p>
                </div>
                <div  className='OurDevelopment-card'>
                    <h1>5.</h1>
                    <h2>Software Product Deployment</h2>
                    <p>Installation, configuration, and running of the product after making sure all previous stages have been checked out with no drawbacks or issues. After that, the software is implemented and delivered for the client’s full use.</p>
                </div>
                <div  className='OurDevelopment-card'>
                    <h1>6.</h1>
                    <h2>Maintenance And Update</h2>
                    <p>After the product is delivered, we offer you a 3-month-free follow-up because if we can spoil our customers then why not? However, this doesn’t mean we’ll give up on it after that. Our maintenance support is always going to be available as long as you need our assistance</p>
                </div>

            </div>
        </div>    
    </section>
  )
}

export default OurDevelopment
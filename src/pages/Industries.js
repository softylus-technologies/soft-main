import React from 'react'
import SayCustomer from '../components/SayCustomer'
import FooterCon from "../components/FooterCon"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Wefeaturedon from "../components/Wefeaturedon"
import "../style/Industries.css"
const Industries = () => {
  return (
    <>
    <NavBar/>
    <Header 
      Title="We Speak Your Industry's Language"
      SubHeading="Our teams immerse themselves in your world to fluently speak the language of your industry. We leverage this deep expertise to deliver tailored solutions that give you a competitive edge. Let our specialized knowledge propel your success."
      buttonText="Get free consultation"
      />
      <div className='Industries-sec'>
        <div className='Industries-container'>
          <h1>What’s your Industry? We cover them all.</h1>
          <p>Ware passionate about driving innovation and providing cutting-edge solutions to meet your unique business needs. Our dedicated team of experts is committed to delivering results that exceed expectations and empower your organization to thrive in today's dynamic market.</p>
          <div className='Industries-card'>
            <div className='Industries-singel-card'>
              <img src='/Blockchain.svg'/>
              <h2>Blockchain</h2>
              <p>Blockchain is a decentralized and distributed digital ledger technology. It's most commonly associated with cryptocurrencies like Bitcoin but has broader applications. Blockchain ensures transparency, security, and immutability of data, making it valuable in industries such as finance, supply chain management, and healthcare.</p>
            </div>
            <div className='Industries-singel-card'>
            <img src='/Crowdfunding.svg'/>
              <h2>Crowdfunding</h2>
              <p>Crowdfunding is a fundraising method that allows individuals and businesses to raise capital by receiving small amounts of money from a large number of people, typically through online platforms. It's used for various purposes, including supporting creative projects, startups, and charitable causes.</p>
            </div>
          </div>
          <div className='Industries-card'>
            <div className='Industries-singel-card'>
              <img src='/Financial Technology.svg'/>
              <h2>Financial Technology</h2>
              <p>Fintech is a rapidly growing industry that leverages technology to improve and innovate financial services. It includes services like online banking, mobile payments, robo-advisors, and peer-to-peer lending, aiming to make financial processes more efficient and accessible.</p>
            </div>
            <div className='Industries-singel-card'>
            <img src='/E-commerce.svg'/>
              <h2>E-commerce</h2>
              <p>E-commerce refers to buying and selling goods and services online. It has transformed the way people shop, enabling businesses to reach a global audience, provide convenient shopping experiences, and facilitate secure online transactions.</p>
            </div>
          </div>
          <div className='Industries-card'>
            <div className='Industries-singel-card'>
              <img src='/Augmented Reality.svg'/>
              <h2>Augmented Reality</h2>
              <p>Augmented Reality blends digital information or virtual objects with the real world, often viewed through mobile devices or smart glasses. AR enhances user experiences by adding digital elements to the physical environment, making it valuable in gaming, marketing, education, and more.</p>
            </div>
            <div className='Industries-singel-card'>
            <img src='/Hosting Infrastructure.svg'/>
              <h2>Hosting Infrastructure</h2>
              <p>E-commerce refers to buying and selling goods and services online. It has transformed the way people shop, enabling businesses to reach a global audience, provide convenient shopping experiences, and facilitate secure online transactions.</p>
            </div>
          </div>
        </div>
      </div>
      <SayCustomer/>
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

export default Industries
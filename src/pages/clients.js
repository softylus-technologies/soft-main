import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FooterCon from "../components/FooterCon";
import Seo from '../components/seo';
import "../style/Clients.css";

const Clients = () => {
  const [clientLogos, setClientLogos] = useState([]);

  useEffect(() => {
    const fetchClientLogos = async () => {
      try {
        const response = await axios.get('https://strapi.softylus.com/api/clients?populate=Client_logo', {
          headers: {
            Authorization: 'Bearer e9279a95db02d9220f944a52d6c0288bb38c733eca16bef5ed2e634e7c53b043560a00b4793f333cec78a9f2f63b72b40288a527d1ed8fbe47a7d1a08f66a60d64762c85f43b5eeeeb50f38244490e6fe7f3e338b4263eaf18056e0f2eded7cf6b09542910930be55000e4205e764bea8933db3694e33722520774fb00e422cd'
          }
        });
        setClientLogos(response.data.data);
      } catch (error) {
        console.error('Error fetching client logos:', error);
      }
    };

    fetchClientLogos();
  }, []);

  return (
    <>
      <Seo 
        title="Our Clients | Softylus Success Stories"
        description="Proudly serving a diverse clientele. Read success stories and testimonials from businesses that have achieved remarkable growth with Softylus's software solutions."
      />
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
            {clientLogos.map((client, index) => (
              <div key={client.id} className='client-image-border'>
                <img 
                  src={`https://strapi.softylus.com${client.attributes.Client_logo.data.attributes.url}`} 
                  alt={`Client Logo ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <FooterCon
        Title="See if"
        TitleOverSpan="is right for you.Let's Create Something Exceptional Together"
        SubHeading="Discover if Softylus is the right partner for your next project. Talk to us and get the expert help you need – no extra fees, free consultation."
      />
      <Footer/>
    </>
  );
};

export default Clients;
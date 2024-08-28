import React, { useEffect, useState } from 'react'
import { FormattedMessage, useIntl } from 'react-intl';
import SayCustomer from '../../components/SayCustomer';
import FooterCon from "../../components/FooterCon"
import Layout from "../../components/layout";
import Header from "../../components/Header"
import Wefeaturedon from "../../components/feature-slider/FeatureSlider"
import "../../style/Industries.css"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import Seo from '../../components/seo';
import { Helmet } from "react-helmet"; // Import Helmet

const SliderButtons = () => {
  const swiper = useSwiper();
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);

  useEffect(() => {
    const updateSlideStatus = () => {
      setIsFirstSlide(swiper.isBeginning);
      setIsLastSlide(swiper.isEnd);
    };

    swiper.on('slideChange', updateSlideStatus);

    return () => {
      swiper.off('slideChange', updateSlideStatus);
    };
  }, [swiper]);
};

const Industries = () => {

  const industriesData = [
    { id: 'blockchainn', icon: '/Blockchain.svg' },
    { id: 'crowdfundingg', icon: '/Crowdfunding.svg' },
    { id: 'fintechh', icon: '/Financial Technology.svg' },
    { id: 'ecommercee', icon: '/E-commerce.svg' },
    { id: 'ar', icon: '/Augmented Reality.svg' },
    { id: 'hosting', icon: '/Hosting Infrastructure.svg' },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Softylus Industries | Tailored Solutions for Your Sector </title>
        <meta name="description" content="Learn how Softylus delivers industry-specific solutions that enhance your organization's success. Get a free consultation and experience our commitment to exceeding expectations. " />
        <meta name="keywords" content="software development, web development, mobile app development, software solutions, IT solutions, technology consulting, digital marketing, Softylus, blockchain, crowdfunding, fintech, ecommerce, augmented reality, hosting, industry solutions" />
      </Helmet>

      <Seo
        url="https://softylus.com/en/industries/"
        title="Softylus Industries | Tailored Solutions for Your Sector "
        description=" Learn how Softylus delivers industry-specific solutions that enhance your organization's success. Get a free consultation and experience our commitment to exceeding expectations. "
      />
      <Header 
        Title="We Speak Your Industry's Language"
        SubHeading="Our teams immerse themselves in your world to fluently speak the language of your industry. We leverage this deep expertise to deliver tailored solutions that give you a competitive edge. Let our specialized knowledge propel your success."
        buttonText="Get free consultation"
      />
      <div className='Industries-sec'>
        <div className='Industries-container'>
          <h1><FormattedMessage id="industries.mainTitle" /></h1>
          <p><FormattedMessage id="industries.mainDescription" /></p>
          <div className='Industries-card'>
            {industriesData.map((industry, index) => (
              <div key={index} className='Industries-singel-card card-hover'>
                <img src={industry.icon}  />
                <h2><FormattedMessage id={`industries.${industry.id}.title`} /></h2>
                <p><FormattedMessage id={`industries.${industry.id}.description`} /></p>
              </div>
            ))}
          </div>
          <Swiper
            className="swiper-proxysolutions"
            breakpoints={{
              900: { slidesPerView: 1, spaceBetween: 40 },
              1070: { slidesPerView: 1, spaceBetween: 50 },
              1300: { slidesPerView: 3, spaceBetween: 50 },
              1640: { slidesPerView: 3, spaceBetween: 50 },
            }}
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            Navigation={{ clickable: true }}
            spaceBetween={30}
            direction="horizontal"
          >
            {industriesData.map((industry, index) => (
              <SwiperSlide key={index}>
                <div className='Industries-singel-card card-hover'>
                  <img src={industry.icon} alt='industry`s Icon'/>
                  <h2><FormattedMessage id={`industries.${industry.id}.title`} /></h2>
                  <p><FormattedMessage id={`industries.${industry.id}.description`} /></p>
                </div>
              </SwiperSlide>
            ))}
            <SliderButtons />
          </Swiper>
        </div>
      </div>
      <SayCustomer />
      <FooterCon
        titleId="industries.footer.title"
        titleOverSpanId="industries.footer.titleOverSpan"
        subHeadingId="industries.footer.subHeading"
      />
    </Layout>
  )
}

export default Industries;


import React,{useEffect,useState} from 'react'
import SayCustomer from '../components/SayCustomer'; // Correct import without curly braces for default export
import FooterCon from "../components/FooterCon"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Wefeaturedon from "../components/Wefeaturedon"
import "../style/Industries.css"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
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

  return (
      <div className="btn-slider">
      <button
        onClick={() => swiper.slidePrev()}
        className={isFirstSlide ? 'btn-slide prev disabled' : 'btn-slide prev'}  
        disabled={isFirstSlide}
      >
        <img src= 'rightbutton-disabled.svg' alt="Previous" />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className={isLastSlide ? 'btn-slide next disabled' : 'btn-slide next'}
        disabled={isLastSlide}
        style={{ transform: 'rotate(180deg)' }}

      >
        <img src= 'rightbutton-disabled.svg' alt="Next" />
      </button>
    </div>
  );
};
const industries = () => {
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
            <div className='Industries-singel-card card-hover'>
              <img src='/Blockchain.svg'/>
              <h2>Blockchain</h2>
              <p>Blockchain is a decentralized and distributed digital ledger technology. It's most commonly associated with cryptocurrencies like Bitcoin but has broader applications. Blockchain ensures transparency, security, and immutability of data, making it valuable in industries such as finance, supply chain management, and healthcare.</p>
            </div>
            <div className='Industries-singel-card card-hover'>
            <img src='/Crowdfunding.svg'/>
              <h2>Crowdfunding</h2>
              <p>Crowdfunding is a fundraising method that allows individuals and businesses to raise capital by receiving small amounts of money from a large number of people, typically through online platforms. It's used for various purposes, including supporting creative projects, startups, and charitable causes.</p>
            </div>
          </div>
          <div className='Industries-card'>
            <div className='Industries-singel-card card-hover'>
              <img src='/Financial Technology.svg'/>
              <h2>Financial Technology</h2>
              <p>Fintech is a rapidly growing industry that leverages technology to improve and innovate financial services. It includes services like online banking, mobile payments, robo-advisors, and peer-to-peer lending, aiming to make financial processes more efficient and accessible.</p>
            </div>
            <div className='Industries-singel-card card-hover'>
            <img src='/E-commerce.svg'/>
              <h2>E-commerce</h2>
              <p>E-commerce refers to buying and selling goods and services online. It has transformed the way people shop, enabling businesses to reach a global audience, provide convenient shopping experiences, and facilitate secure online transactions.</p>
            </div>
          </div>
          <div className='Industries-card'>
            <div className='Industries-singel-card card-hover'>
              <img src='/Augmented Reality.svg'/>
              <h2>Augmented Reality</h2>
              <p>Augmented Reality blends digital information or virtual objects with the real world, often viewed through mobile devices or smart glasses. AR enhances user experiences by adding digital elements to the physical environment, making it valuable in gaming, marketing, education, and more.</p>
            </div>
            <div className='Industries-singel-card card-hover'>
            <img src='/Hosting Infrastructure.svg'/>
              <h2>Hosting Infrastructure</h2>
              <p>E-commerce refers to buying and selling goods and services online. It has transformed the way people shop, enabling businesses to reach a global audience, provide convenient shopping experiences, and facilitate secure online transactions.</p>
            </div>
          </div>
          <Swiper
                className="swiper-proxysolutions"
                breakpoints={{
                  900: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                  },
                  1070: {
                    slidesPerView: 1,
                    spaceBetween: 50,
                  },
                  1300: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                  1640: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                // loop={true}
                Navigation={{ clickable: true }}
                spaceBetween={0}
                direction="horizontal"
                onSwiper={(swiper) => console.log(swiper)}
              >
                       <SwiperSlide><div className='Industries-singel-card card-hover'>
                          <img src='/Blockchain.svg'/>
                          <h2>Blockchain</h2>
                          <p>Blockchain is a decentralized and distributed digital ledger technology. It's most commonly associated with cryptocurrencies like Bitcoin but has broader applications. Blockchain ensures transparency, security, and immutability of data, making it valuable in industries such as finance, supply chain management, and healthcare.</p>
                        </div>
                        </SwiperSlide>
                       <SwiperSlide><div className='Industries-singel-card card-hover'>
                          <img src='/Crowdfunding.svg'/>
                            <h2>Crowdfunding</h2>
                            <p>Crowdfunding is a fundraising method that allows individuals and businesses to raise capital by receiving small amounts of money from a large number of people, typically through online platforms. It's used for various purposes, including supporting creative projects, startups, and charitable causes.</p>
                          </div></SwiperSlide>
                       <SwiperSlide><div className='Industries-singel-card card-hover'>
                        <img src='/Financial Technology.svg'/>
                        <h2>Financial Technology</h2>
                        <p>Fintech is a rapidly growing industry that leverages technology to improve and innovate financial services. It includes services like online banking, mobile payments, robo-advisors, and peer-to-peer lending, aiming to make financial processes more efficient and accessible.</p>
                      </div></SwiperSlide>
                       <SwiperSlide><div className='Industries-singel-card card-hover'>
                          <img src='/E-commerce.svg'/>
                            <h2>E-commerce</h2>
                            <p>E-commerce refers to buying and selling goods and services online. It has transformed the way people shop, enabling businesses to reach a global audience, provide convenient shopping experiences, and facilitate secure online transactions.</p>
                          </div></SwiperSlide>
                       <SwiperSlide> <div className='Industries-singel-card card-hover'>
                        <img src='/Augmented Reality.svg'/>
                        <h2>Augmented Reality</h2>
                        <p>Augmented Reality blends digital information or virtual objects with the real world, often viewed through mobile devices or smart glasses. AR enhances user experiences by adding digital elements to the physical environment, making it valuable in gaming, marketing, education, and more.</p>
                      </div></SwiperSlide>
                       <SwiperSlide><div className='Industries-singel-card card-hover'>
            <img src='/Hosting Infrastructure.svg'/>
              <h2>Hosting Infrastructure</h2>
              <p>E-commerce refers to buying and selling goods and services online. It has transformed the way people shop, enabling businesses to reach a global audience, provide convenient shopping experiences, and facilitate secure online transactions.</p>
            </div></SwiperSlide>
                       
               <SliderButtons/>
                
              </Swiper>

        </div>
      </div>
      <SayCustomer/>
      <Wefeaturedon/>
      <FooterCon
       Title="See if"
       TitleOverSpan="is right for you.Let's Create Something Exceptional Together"
       SubHeading="Discover if Softylus is the right partner for your next project. Talk to us and get the expert help you need – no extra fees, free consultation."
      />
      <Footer/>
    </>
  )
}

export default industries ;

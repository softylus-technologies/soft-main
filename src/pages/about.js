import React, { useState, useEffect } from "react";
import "../style/AboutUs.css";
import { StaticImage } from "gatsby-plugin-image";
import FooterCon from "../components/FooterCon";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Clients from "../components/clients";
import FeatureSection2 from "../components/FeatureSection2";
import Wefeaturedon from "../components/Wefeaturedon";
import OurDevelopment from "../components/OurDevelopment";
import SayCustomer from "../components/SayCustomer";
import ClientSlider from "../components/client-slider/ClientSlider";
import TowSideLayout from "../components/tow-side-layout/TowSideLayout";
import IconCard from "../components/icon-card/IconCard";
import { Link } from "gatsby";
import FeatureSlider from "../components/feature-slider/FeatureSlider";
import Seo from "../components/seo";
import axios from 'axios';  // Ensure axios is imported if making HTTP requests
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { CardCustomer } from "../components/CardCustomer";

const About = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get("https://strapi.softylus.com/api/customer-says?populate=imageSrc", {
          headers: {
            "Accept": "*/*",
            "Content-Type": "application/json",
            "Authorization": "Bearer e9279a95db02d9220f944a52d6c0288bb38c733eca16bef5ed2e634e7c53b043560a00b4793f333cec78a9f2f63b72b40288a527d1ed8fbe47a7d1a08f66a60d64762c85f43b5eeeeb50f38244490e6fe7f3e338b4263eaf18056e0f2eded7cf6b09542910930be55000e4205e764bea8933db3694e33722520774fb00e422cd"
          }
        });
      
        setTestimonials(response.data.data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);
  return (
    <>
    <Seo title="About Softylus | Your Software Solution Experts"
    description="Learn more about Softylus, a leader in software development. Our mission is to bridge technological gaps through innovative, user-centric solutions."
    />
      <NavBar />
      <Header
        Title="Pioneering innovation in software development excellence "
        SubHeading="SOFTYLUS is a reputable software solution company that specializes in offering software solutions for businesses and individuals; each according to its required needs. Our on-demand team is capable of software solutions, web & mobile development, and design"
        buttonText="Get free consultation"
      />
      {/* <Clients/>   */}
      <div className="md:px-[70px] mx-auto">
        <ClientSlider />
        <TowSideLayout imgUrl={"/Imageright.png"} reverse={true} >
          <h1 className=" text-4x1 mb-3 font-semibold md:mt-0">
            Make bold business statements, and We’ll deliver brilliant results
          </h1>
          <p className=" mt-5 md:mt-0">
            To bring the world closer through technology, and enhance our
            optimal solutions’ reach around the globe, so that, geographical
            barriers no longer hinder anyone from advancing
          </p>
          <div className="grid grid-rows-2 md:grid-flow-col gap-3 grid-flow-row mt-12 md:mt-0">
            <IconCard imageUrl="/icon1.svg" text="User-Centric Focus" />
            <IconCard imageUrl="/icon3.svg" text="Performance Optimization" />
            <IconCard imageUrl="/icon2.svg" text="Developmental Accuracy" />
            <IconCard imageUrl="/icon4.svg" text="Security Vigilance" />
          </div>
          <div className="my-4">
            <Link
              to="/contact-us"
              className="no-underline mt-16 inline-flex items-center justify-center px-3 py-3 text-base font-bold text-white bg-main hover:opacity-85 border-0 rounded-full  focus:ring-10 w-auto"
            >
              Get free consultation
            </Link>
          </div>
        </TowSideLayout>
  
        <OurDevelopment />
        <section className="Say-Customer-sec">
      <div className="Say-Customer-container">
        <h1 className="Say-Customer-title">See what our customers say about us</h1>
        <div className="slider-sec relative">
          <Swiper
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 30 },
              768: { slidesPerView: 2, spaceBetween: 10 },
              1024: { slidesPerView: 2, spaceBetween: 20 },
              1030: { slidesPerView: 3, spaceBetween: 20 },
            }}
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={30}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            loop={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <CardCustomer
                  SubHeading={testimonial.attributes.description}
                  Title={testimonial.attributes.Name}
                  SubProfile={testimonial.attributes.position}
                  imageSrc={testimonial.attributes.imageSrc?.data?.attributes?.url 
                    ? `https://strapi.softylus.com${testimonial.attributes.imageSrc.data.attributes.url}`
                    : '/default-image.jpg'}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
        {/* <Wefeaturedon /> */}
        <FeatureSlider />
      </div>
      <FooterCon
        Title="See if"
        TitleOverSpan="is right for you.Let's Create Something Exceptional Together"
        SubHeading="Discover if Softylus is the right partner for your next project. Talk to us and get the expert help you need – no extra fees, free consultation."
      />
      <Footer />
    </>
  );
};

export default About;

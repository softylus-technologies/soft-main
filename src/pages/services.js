import React from "react";

import "../style/Services.css";
import { StaticImage } from "gatsby-plugin-image";
import FooterCon from "../components/FooterCon";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import Clients from "../components/clients";
// import FeatureSection2 from "../components/FeatureSection2";
// import Wefeaturedon from "../components/Wefeaturedon";
// import OurDevelopment from "../components/OurDevelopment";
// import SimpleSection from "../components/SimpleSection";
// import SimpleSection2 from "../components/SimpleSection2";
import SayCustomer from "../components/SayCustomer";
import FAQ from "../components/FAQ";
import services from "../sources/services.json"; // Make sure the path is correct
import { Link } from "gatsby";
import TowSideLayout from "../components/tow-side-layout/TowSideLayout";
import Seo from "../components/seo";
import "../style/index.css"
const Services = () => {
  return (
    <>
    <Seo title="Comprehensive Software Solutions | Softylus Services"
    description="Explore our full range of services including web & mobile development, UI/UX design, and more. Softylus is dedicated to delivering tailored solutions that meet your specific business needs."/>
      <NavBar />
      <Header
        Title="All-in-One Development Services for Your Business"
        SubHeading="Looking for a trustworthy partner to guide you through every step of the software development process? At Softylus, we solve business challenges with custom-made software. Focus on other crucial aspects of your business while we handle the tech."
        buttonText="Explore Our Solutions"
      />
      <div className="md:px-[70px] mx-auto">
        <TowSideLayout reverse={true} imgUrl="/Image services1.svg">
          <h1 className="text-5xl mb-3 title-res">
          Streamline Your Software Development Journey
          </h1>
          <p>
          Partner with us and eliminate the need to juggle multiple service providers. Get comprehensive solutions in one place with a team that prioritizes your success and offers 24/7 customer support.
          </p>

          <div className="my-4">
            <Link
              to="/contact-us"
              className="no-underline inline-flex items-center justify-center px-4 py-3 text-base font-bold text-white bg-main hover:opacity-85 border-0 rounded-full  focus:ring-10 w-auto"
            >
             Schedule a Free Consultation
            </Link>
          </div>
        </TowSideLayout>

       
        <div className="secvices-Banner relative p-10">
          <img
            className="circle !top-[-10%] !bottom-[unset] !right-100 "
            id="circle1"
            src="/Frame 1000003358.svg"
          />
          <h1>Our Technology Stack</h1>
          <div className="md:bg-service-desktop bg-service-mobile min-h-[50vh] bg-center bg-no-repeat	bg-contain"></div>
       
        </div>
        <section className="spacing">
        {services.map((service, index) => {
          console.log(service); // This should log each service item
          const isOdd = index % 2 !== 0;

          return (
            <TowSideLayout reverse={isOdd} imgUrl={service.imageSrc}>
              <h1 className="title-res text-4xl mb-3">{service.title}</h1>
              <p>{service.subHeading}</p>
              <div className="mt-4">
                <Link
                  to={service.path}
                  className="no-underline inline-flex items-center justify-center px-4 py-3 text-base font-bold text-white bg-main hover:opacity-85 border-0 rounded-full  focus:ring-10 w-auto"
                >
                  {service.buttonText}
                </Link>
              </div>
            </TowSideLayout>
          );
        })}
      </section>
        <FAQ />
        <SayCustomer />
      </div>
      <FooterCon
        Title="See if"
        TitleOverSpan="Let's collaborate on creating something exceptional. Talk to our experts and get the guidance you need – no extra fees, just valuable insights."
        hideSoftylus = "none"
        buttonTitle="Schedule Your Free Consultation"
      />
      <Footer />
    </>
  );
};

export default Services;

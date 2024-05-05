import React from "react";

import "../style/Services.css";
import { StaticImage } from "gatsby-plugin-image";
import FooterCon from "../components/FooterCon";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Clients from "../components/clients";
import FeatureSection2 from "../components/FeatureSection2";
import Wefeaturedon from "../components/Wefeaturedon";
import OurDevelopment from "../components/OurDevelopment";
import SimpleSection from "../components/SimpleSection";
import SimpleSection2 from "../components/SimpleSection2";
import SayCustomer from "../components/SayCustomer";
import FAQ from "../components/FAQ";
import services from "../sources/services.json"; // Make sure the path is correct
import { Link } from "gatsby";
import TowSideLayout from "../components/tow-side-layout/TowSideLayout";
import Seo from "../components/seo";
const Services = () => {
  return (
    <>
    <Seo title="Comprehensive Software Solutions | Softylus Services"
    metaDescription="Explore our full range of services including web & mobile development, UI/UX design, and more. Softylus is dedicated to delivering tailored solutions that meet your specific business needs."/>
      <NavBar />
      <Header
        Title="All-in-one development services for your business "
        SubHeading="Looking for a trustworthy partner to lead you through every step of the software development process? At Softylus, we answer business problems with custom-made software. So, you can focus on other important parts of your business, we will handle the rest."
        buttonText="Get free consultation"
      />
      <div className="md:px-[70px] mx-auto">
        <TowSideLayout reverse={true} imgUrl="/Image services1.svg">
          <h1 className="text-4xl mb-3">
            Get Your Software Development Services Sorted Out
          </h1>
          <p>
            Having us as your partnered team means you won't have to juggle
            different service providers to meet your different needs. You’ll
            have it all covered splendidly in one place with people who care and
            prioritize you with 24/7 customer support.
          </p>

          <div className="my-4">
            <Link
              to="/ContactUs"
              className="no-underline inline-flex items-center justify-center px-4 py-3 text-base font-medium text-white bg-main hover:opacity-85 border-0 rounded-full  focus:ring-10 w-auto"
            >
              Get free consultation
            </Link>
          </div>
        </TowSideLayout>

        {/* <SimpleSection
        Title="Get Your Software Development Services Sorted Out"
        SubHeading="Having us as your partnered team means you won't have to juggle different service providers to meet your different needs. You’ll have it all covered splendidly in one place with people who care and prioritize you with 24/7 customer support."
        buttonText="Get free consultation"
        imageSrc="/Image services1.svg"
        path="/ContactUs"
      /> */}
        <div className="secvices-Banner relative p-10">
          <img
            className="circle !top-[-10%] !bottom-[unset] !right-100 "
            id="circle1"
            src="/Frame 1000003358.svg"
          />
          <h1>Technologies we used</h1>
          <div className="md:bg-service-desktop bg-service-mobile min-h-[50vh] bg-center bg-no-repeat	bg-contain"></div>
          {/* <img src="/services Banner.svg" className="banner-serves" />
        <img src="/Image serves mobile.svg" className="banner-mobile" /> */}
        </div>
        {services.map((service, index) => {
          console.log(service); // This should log each service item
          const isOdd = index % 2 !== 0;
          // const className = isOdd ? "section-image-left" : "section-image-right";

          return (
            <TowSideLayout reverse={isOdd} imgUrl={service.imageSrc}>
              <h1 className="text-4xl mb-3">{service.title}</h1>
              <p>{service.subHeading}</p>
              <div className="mt-4">
                <Link
                  to={service.path}
                  className="no-underline inline-flex items-center justify-center px-4 py-3 text-base font-medium text-white bg-main hover:opacity-85 border-0 rounded-full  focus:ring-10 w-auto"
                >
                  {service.buttonText}
                </Link>
              </div>
            </TowSideLayout>
            // <div key={index} className={className}>
            //   <SimpleSection
            //     Title={service.title}
            //     SubHeading={service.subHeading}
            //     buttonText={service.buttonText}
            //     imageSrc={service.imageSrc}
            //     path={service.path}
            //   />
            // </div>
          );
        })}

        <FAQ />
        <SayCustomer />
      </div>
      <FooterCon
        Title="See if"
        TitleOverSpan="is right for you.Let’s make something great"
        SubHeading="Talk to us and get the help you need with no extra fees, consult for free."
      />
      <Footer />
    </>
  );
};

export default Services;

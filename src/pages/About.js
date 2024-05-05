import React from "react";
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
const About = () => {
  return (
    <>
    <Seo title="About Softylus | Your Software Solution Experts"
    metaDescription="Learn more about Softylus, a leader in software development. Our mission is to bridge technological gaps through innovative, user-centric solutions."
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
        <TowSideLayout imgUrl={"/Imageright.svg"} reverse={true}>
          <h1 className="text-4xl mb-3">
            Make bold business statements, and We’ll deliver brilliant results
          </h1>
          <p>
            To bring the world closer through technology, and enhance our
            optimal solutions’ reach around the globe, so that, geographical
            barriers no longer hinder anyone from advancing
          </p>
          <div class="grid grid-rows-2 md:grid-flow-col gap-3 grid-flow-row ">
            <IconCard imageUrl="/icon1.svg" text="User-Centric Focus" />
            <IconCard imageUrl="/icon3.svg" text="Performance Optimization" />
            <IconCard imageUrl="/icon2.svg" text="Developmental Accuracy" />
            <IconCard imageUrl="/icon4.svg" text="Security Vigilance" />
          </div>
          <div className="my-4">
            <Link
              to="/ContactUs"
              className="no-underline inline-flex items-center justify-center px-3 py-3 text-base font-medium text-white bg-main hover:opacity-85 border-0 rounded-full  focus:ring-10 w-auto"
            >
              Get free consultation
            </Link>
          </div>
        </TowSideLayout>
        {/* <FeatureSection2
        Title="Make bold business statements, and We’ll deliver brilliant results"
        SubHeading="To bring the world closer through technology, and enhance our optimal solutions’ reach around the globe, so that, geographical barriers no longer hinder anyone from advancing"
        buttonText="Get free consultation"
        imageSrc="/Imageright.svg"
        IconSrc1="/icon1.svg"
        Des1="User-Centric Focus"
        IconSrc2="/icon2.svg"
        Des2="Performance Optimization"
        IconSrc3="/icon3.svg"
        Des3="Developmental Accuracy"
        IconSrc4="/icon4.svg"
        Des4="Security Vigilance"
      /> */}
        <OurDevelopment />
        <SayCustomer />
        {/* <Wefeaturedon /> */}
        <FeatureSlider />
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

export default About;

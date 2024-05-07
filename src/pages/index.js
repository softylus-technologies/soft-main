import * as React from "react";
import "../style/index.css";
import Header from "../components/Header";
import Clients from "../components/clients";
import SecOne from "../components/FeatureSection";
import Cards from "../components/Cards";
import { StaticImage } from "gatsby-plugin-image";
import SecTwo from "../components/IndustryTabs";
import Wefeaturedon from "../components/Wefeaturedon";
import FooterCon from "../components/FooterCon";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ClientSlider from "../components/client-slider/ClientSlider";
import TowSideLayout from "../components/tow-side-layout/TowSideLayout";
import IconCard from "../components/icon-card/IconCard";
import { Link } from "gatsby";
import BlogSection from "../components/blog-section/BlogSection";
import FeatureSlider from "../components/feature-slider/FeatureSlider";
import Seo from "../components/seo";
const IndexPage = () => {
  return (
    <>
    
      <NavBar />
      <Seo title="Pioneering Software Development | Softylus "
    description="Discover Softylus, your premier partner in software development excellence. Specializing in bespoke solutions for businesses globally. Contact us to transform your vision into reality."
    />
      <Header
        Title="Elevate your software development endeavors to new heights. "
        SubHeading="Build world-class digital products with a team of design, development and strategy experts. All in one place."
        buttonText="Get free consultation"
        overSpan={"Easily,Smoothly,Effortlessly"}
      />
      {/* <Clients /> */}
      <div className="md:px-[70px] mx-auto">
        <ClientSlider />

        <div class="container">
          <img class="circle-sec" id="circle1" src="/Frame 1000003358.svg" />
        </div>
        <TowSideLayout imgUrl={"/coding.gif"} img2Url={"/Frame ibrahim.svg"}>
          <h1 className="text-3xl md:text-5xl mb-3 mt-3">
            Building software solutions with high resolution
          </h1>
          <p>
            We help customers with digitalized solutions in web development,
            mobile app development, and UI/UX design. We provide services for
            businesses of all sizes in different niches.
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
              className="no-underline inline-flex items-center justify-center px-4 py-[12px] text-base font-medium text-white bg-main hover:opacity-85 border-0 rounded-full  focus:ring-10 w-auto"
            >
              Get free consultation
            </Link>
          </div>
        </TowSideLayout>

        {/* <SecOne
        Title="Building software solutions with high resolution"
        SubHeading="We help customers with digitalized solutions in web development, mobile app development, and UI/UX design. We provide services for businesses of all sizes in different niches."
        buttonText="Get free consultation"
        className="frame-secImg"
        imageSrc="coding.gif"
        FrameSrc="Frame ibrahim.svg"
        IconSrc1="icon1.svg"
        Des1="User-Centric Focus"
        IconSrc2="icon2.svg"
        Des2="Performance Optimization"
        IconSrc3="icon3.svg"
        Des3="Developmental Accuracy"
        IconSrc4="icon4.svg"
        Des4="Security Vigilance"
        path="/ContactUs"
      /> */}
        <Cards />

        <SecTwo />
        <FeatureSlider  />
        <BlogSection />
        {/* <Wefeaturedon /> */}
      </div>
      <FooterCon
        Title="See if"
        TitleOverSpan="is right for you. Let’s make something great"
        SubHeading="Talk to us and get the help you need with no extra fees, consult for free."
      />

      <Footer />
    </>
  );
};

export default IndexPage;


import React , {useContext} from "react";
import "../../style/index.css";
import Header from "../../components/Header-index";
import Clients from "../../components/clients";
import SecOne from "../../components/FeatureSection";
import Cards from "../../components/Cards";
import { StaticImage } from "gatsby-plugin-image";
import SecTwo from "../../components/IndustryTabs";
import Wefeaturedon from "../../components/Wefeaturedon";
import FooterCon from "../../components/FooterCon";
import Layout from "../../components/layout";
import Footer from "../../components/Footer";
import ClientSlider from "../../components/client-slider/ClientSlider";
import TowSideLayout from "../../components/tow-side-layout/TowSideLayout";
import IconCard from "../../components/icon-card/IconCard";
import { Link } from "gatsby";
import BlogSection from "../../components/blog-section/BlogSection";
import { FormattedMessage } from "react-intl";
import { LanguageContext } from '../../context/LanguageContext';
import { Helmet } from "react-helmet"; // Import Helmet

import FeatureSlider from "../../components/feature-slider/FeatureSlider";
import Seo from "../../components/seo";
const IndexPage = () => {
  const { locale } = useContext(LanguageContext);

  return (
  
<Layout>  
      <Helmet>
        <title>Pioneering Software Development | Softylus </title>
        <meta name="description" content="Discover Softylus, your premier partner in software development excellence. Specializing in bespoke solutions for businesses globally. Contact us to transform your vision into reality." />
        <meta name="keywords" content="software development, web development, mobile app development, UI/UX design, custom software, IT solutions, technology consulting, Softylus, software solutions" />
      </Helmet>

      <Seo
        title="Pioneering Software Development | Softylus "
        description="Discover Softylus, your premier partner in software development excellence. Specializing in bespoke solutions for businesses globally. Contact us to transform your vision into reality."
      />
      <Header
        titleId="index.header.title"
        subHeadingId="index.header.subHeading"
        buttonTextId="index.header.buttonText"
        overSpanId="index.header.overSpan"
        imageSrc="/softylusHero.png"
      />
      {/* <Clients /> */}
      <div className="md:px-[70px] mx-auto">
        <ClientSlider />

        <div className="container">
          {/* <img
            className="circle-sec"
            id="circle1"
            src="/Frame 1000003358.svg"
          /> */}
        </div>
        <TowSideLayout imgUrl="/coding.gif" img2Url="/Frame ibrahim.svg" classNameres="desktop">
      <div className="heading-container">
        <h1 className="primary-heading text-3xl md:text-5xl">
          <FormattedMessage 
            id="towSideLayout.heading"
            defaultMessage="Building software solutions with high resolution"
          />
        </h1>
        <p className="sub-heading">
          <FormattedMessage 
            id="towSideLayout.subheading"
            defaultMessage="We help customers with digitalized solutions in web development, mobile app development, and UI/UX design. We provide services for businesses of all sizes in different niches."
          />
        </p>
      </div>
      <div className="mt-3 grid grid-rows-2 md:grid-flow-col gap-3 grid-flow-row IconCard-css-arabic ">
        <IconCard imageUrl="/icon1.svg" textId="iconCard.userCentric" defaultText="User-Centric Focus" />
        <IconCard imageUrl="/icon3.svg" textId="iconCard.performanceOptimization" defaultText="Performance Optimization" />
        <IconCard imageUrl="/icon2.svg" textId="iconCard.developmentalAccuracy" defaultText="Developmental Accuracy" />
        <IconCard imageUrl="/icon4.svg" textId="iconCard.securityVigilance" defaultText="Security Vigilance" />
      </div>
      <Link
        to={`/${locale}/contact-us`}
        className="mt-3 primary-cta no-underline inline-flex items-center justify-center text-base font-bold text-white bg-main hover:opacity-85 border-0 rounded-full focus:ring-10"
      >
        <FormattedMessage 
          id="towSideLayout.ctaButton"
          defaultMessage="Get free consultation"
        />
      </Link>
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
        {/* <FeatureSlider /> */}
        <BlogSection />
        {/* <Wefeaturedon /> */}
      </div>
      <FooterCon
  titleId="detailWebDev.footerCon.title"
  titleOverSpanId="detailWebDev.footerCon.titleOverSpan"
  subHeadingId="detailWebDev.footerCon.subHeading"
  buttonTitleId="detailWebDev.footerCon.buttonTitle"
/>

</Layout>    
  );
};

export default IndexPage;

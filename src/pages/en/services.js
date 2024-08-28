import React,{useContext} from "react";
import { FormattedMessage } from 'react-intl';
import "../../style/Services.css";
import { StaticImage } from "gatsby-plugin-image";
import FooterCon from "../../components/FooterCon";
import Layout from "../../components/layout";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SayCustomer from "../../components/SayCustomer";
import FAQ from "../../components/FAQ";
import servicesEn  from "../../sources/services-en.json";
import servicesAr  from "../../sources/services-ar.json";
import { Link } from "gatsby";
import TowSideLayout from "../../components/tow-side-layout/TowSideLayout";
import Seo from "../../components/seo";
import "../../style/index.css"
import { LanguageContext } from '../../context/LanguageContext';
import { Helmet } from "react-helmet"; // Import Helmet

const Services = () => {
  const { locale } = useContext(LanguageContext);

  return ( <Layout>
      <Seo 
        url="https://softylus.com/en/services/"
        title="Comprehensive Software Solutions | Softylus Services"
        description="Explore our full range of services including web & mobile development, UI/UX design, and more. Softylus is dedicated to delivering tailored solutions that meet your specific business needs."
      />
       <Helmet>
        <meta name="keywords" content="software development, web development, mobile app development, UI/UX design, software solutions, IT solutions, technology consulting, Softylus, services" />
      </Helmet>

        <Header
          Title={<FormattedMessage id="services.header.title" defaultMessage="All-in-One Development Services for Your Business" />}
          SubHeading={<FormattedMessage id="services.header.subheading" defaultMessage="Looking for a trustworthy partner to guide you through every step of the software development process? At Softylus, we solve business challenges with custom-made software. Focus on other crucial aspects of your business while we handle the tech." />}
          buttonText={<FormattedMessage id="services.header.buttonText" defaultMessage="Explore Our Solutions" />}
        />
        <div className="md:px-[70px] mx-auto">
          <TowSideLayout reverse={true} imgUrl="/Image services1.svg" classNameres={"desktop"}>
            <h1 className="text-5xl mb-3 title-res">
              <FormattedMessage id="services.streamline.title" defaultMessage="Streamline Your Software Development Journey" />
            </h1>
            <div class="gif-container flex mx-auto items-start justify-start w-100 h-100 relative mobile">
              <img class="w-full h-full object-cover border-radius30" src="/Image services1.svg" alt="Image services"/>
            </div>
            <p>
              <FormattedMessage id="services.streamline.description" defaultMessage="Partner with us and eliminate the need to juggle multiple service providers. Get comprehensive solutions in one place with a team that prioritizes your success and offers 24/7 customer support." />
            </p>

            <div className="my-4">
              <Link rel="canonical" 
                to={`/${locale}/contact-us`}
                className="no-underline inline-flex items-center justify-center px-4 py-3 text-base font-bold text-white bg-main hover:opacity-85 border-0 rounded-full  focus:ring-10 w-auto"
              >
                <FormattedMessage id="services.streamline.cta" defaultMessage="Schedule a Free Consultation" />
              </Link>
            </div>
          </TowSideLayout>

          <div className="secvices-Banner relative p-10">
            <img
              className="circle !top-[-10%] !bottom-[unset] !right-100 "
              id="circle1"
              src="/Frame 1000003358.svg"
              alt="circle services"
            />
            <h1><FormattedMessage id="services.techStack.title" defaultMessage="Our Technology Stack" /></h1>
            <div className="md:bg-service-desktop bg-service-mobile min-h-[50vh] bg-center bg-no-repeat	bg-contain"></div>
          </div>

          <section className="spacing">
          {servicesEn.map((service, index) => {
            const isOdd = index % 2 !== 0;

            return (
              <TowSideLayout key={service.id} reverse={isOdd} imgUrl={service.imageSrc} classNameres={"desktop"}>
                <h1 className="title-res text-4xl mb-3">
                  <FormattedMessage id={`services.${service.id}.title`} defaultMessage={service.title} />
                </h1>
                <div className="gif-container flex mx-auto items-start justify-start w-100 h-100 relative mobile">
                  <img className="w-full h-full object-cover border-radius30" src={service.imageSrc} alt={service.title} />
                </div>
                <p>
                  <FormattedMessage id={`services.${service.id}.subHeading`} defaultMessage={service.subHeading} />
                </p>
                <div className="mt-4">
                  <Link rel="canonical" 
                    to={`/${locale}/services/${service.path}`}
                    className="no-underline inline-flex items-center justify-center px-4 py-3 text-base font-bold text-white bg-main hover:opacity-85 border-0 rounded-full  focus:ring-10 w-auto"
                  >
                    <FormattedMessage id={`services.${service.id}.buttonText`} defaultMessage={service.buttonText} />
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
          titleId="services.footerCon.title"
          titleOverSpanId="services.footerCon.titleOverSpan"
          subHeadingId="services.footerCon.subHeading"
          buttonTitleId="services.footerCon.buttonTitle"
          hideSoftylus="none"
        />
      </Layout>
  );
};

export default Services;

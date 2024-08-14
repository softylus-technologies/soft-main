import React, { useState, useEffect } from "react";
import { FormattedMessage, useIntl } from 'react-intl';
import "../style/AboutUs.css";
import { StaticImage } from "gatsby-plugin-image";
import FooterCon from "../components/FooterCon";
import Layout from "../components/layout";
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
import axios from 'axios';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { CardCustomer } from "../components/CardCustomer";

const About = () => {
  const [testimonials, setTestimonials] = useState([]);
  const intl = useIntl();
const locale = intl.locale
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(`https://strapi.softylus.com/api/testimonials?locale=${locale}&populate=picture`, {
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
    
      
      <Layout>
        <Seo 
        title={intl.formatMessage({ id: "about.seo.title", defaultMessage: "About Softylus | Your Software Solution Experts" })}
        description={intl.formatMessage({ id: "about.seo.description", defaultMessage: "Learn more about Softylus, a leader in software development. Our mission is to bridge technological gaps through innovative, user-centric solutions." })}
      />
        <Header
          Title={intl.formatMessage({ id: "about.header.title", defaultMessage: "Pioneering innovation in software development excellence" })}
          SubHeading={intl.formatMessage({ id: "about.header.subheading", defaultMessage: "SOFTYLUS is a reputable software solution company that specializes in offering software solutions for businesses and individuals; each according to its required needs. Our on-demand team is capable of software solutions, web & mobile development, and design" })}
          buttonText={intl.formatMessage({ id: "about.header.buttonText", defaultMessage: "Get free consultation" })}
        />
        <div className="md:px-[70px] mx-auto">
          <ClientSlider />
          <TowSideLayout imgUrl={"/Imageright.png"} reverse={true} classNameres={"desktop"}>
            <h1 className="text-4x1 mb-3 font-semibold md:mt-0">
              <FormattedMessage id="about.section1.title" defaultMessage="Make bold business statements, and We'll deliver brilliant results" />
            </h1>
            <div class="gif-container flex mx-auto items-start justify-start w-100 h-100 relative mobile">
              <img class="w-full h-full object-cover border-radius30" src="/Imageright.png" alt={intl.formatMessage({ id: "about.section1.imageAlt", defaultMessage: "Business illustration" })} />
            </div>
            <p className="mt-2 md:mt-0">
              <FormattedMessage id="about.section1.description" defaultMessage="To bring the world closer through technology, and enhance our optimal solutions' reach around the globe, so that, geographical barriers no longer hinder anyone from advancing" />
            </p>
            <div className="grid grid-rows-2 md:grid-flow-col gap-3 grid-flow-row mt-12 md:mt-0">
              <IconCard imageUrl="/icon1.svg" text={intl.formatMessage({ id: "about.section1.icon1", defaultMessage: "User-Centric Focus" })} />
              <IconCard imageUrl="/icon3.svg" text={intl.formatMessage({ id: "about.section1.icon2", defaultMessage: "Performance Optimization" })} />
              <IconCard imageUrl="/icon2.svg" text={intl.formatMessage({ id: "about.section1.icon3", defaultMessage: "Developmental Accuracy" })} />
              <IconCard imageUrl="/icon4.svg" text={intl.formatMessage({ id: "about.section1.icon4", defaultMessage: "Security Vigilance" })} />
            </div>
            <div className="my-4">
              <Link
                to="/contact-us"
                className="no-underline mt-7 inline-flex items-center justify-center px-3 py-3 text-base font-bold text-white bg-main hover:opacity-85 border-0 rounded-full focus:ring-10 w-auto"
              >
                <FormattedMessage id="about.section1.ctaButton" defaultMessage="Get free consultation" />
              </Link>
            </div>
          </TowSideLayout>
          <OurDevelopment />
          <section className="Say-Customer-sec">
            <div className="Say-Customer-container">
              <h1 className="Say-Customer-title">
                <FormattedMessage id="about.testimonials.title" defaultMessage="See what our customers say about us" />
              </h1>
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
                        SubHeading={testimonial.attributes.opinion}
                        Title={testimonial.attributes.Name}
                        SubProfile={testimonial.attributes.position}
                        imageSrc={testimonial.attributes.picture?.data?.attributes?.url 
                          ? `https://strapi.softylus.com${testimonial.attributes.picture.data.attributes.url}`
                          : '/default-image.jpg'}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </section>
        </div>
        <FooterCon
          titleId="about.footer.title"
          titleOverSpanId="about.footer.titleOverSpan"
          subHeadingId="about.footer.subHeading"
        />
      </Layout>
  );
};

export default About;
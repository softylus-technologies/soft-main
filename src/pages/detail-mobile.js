import React, { useState, useEffect } from "react";
import DetailHeader from "../components/DetailHeader";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import DetailHero from "../components/DetailHero";
import FooterCon from "../components/FooterCon";
import DetailSec from "../components/DetailSec";
import "../style/DetailMobile.css";
import detailData from "../sources/DetailMobile.json";
import ServicesExplain from "../components/ServicesExplain";

const DetailMobile = () => {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    setDetails(detailData);
  }, [details]);

  return (
    <>
      <NavBar />
      <DetailHeader
        Title="Pioneering Mobile App Development at"
        TitleOverSpan="Technologies"
      />
      <DetailHero
        Title="Who We Are: Pioneers in Mobile App Innovation"
        SubHeading="Softylus Technologies stands at the vanguard of mobile app innovation. Our dedication to creating bespoke mobile solutions positions businesses to dominate in the mobile arena. From intuitive user interfaces to powerful mobile functionalities, we deliver apps that are engaging, efficient, and essential to our clients' success."
        imageSrc="/Images DetailMobile.svg"
      />
      {details.map((detail, index) => {
        const className =
          index % 2 === 0 ? "section-image-right" : "section-image-left";
        console.log(className);

        if (index === 3) {
          return (
            <ServicesExplain
              imageSrc="/CASE STUDY IMG.svg"
              logo="/Vend.svg"
              Title="Elevating ShopEase's Mobile Commerce"
              SubHeading="Our in-depth case study delves into how Softylus Technologies revolutionized the mobile commerce platform for ShopEase. The study highlights our success in creating seamless shopping experiences, integrating powerful features for inventory and user management, all while enhancing app performance and SEO prominence. "
              buttonText="Create yours today"
              className="btn-ServicesExplain-hide"
            />
          );
        } else if (index === 4) {
          return (
            <DetailHero
              Title="Build Your Mobile Identity with Superior App Development"
              SubHeading="Make your brand stand out with an app that captures its essence. We specialize in developing mobile applications that embody your brand ethos, engage your audience, and leave a memorable impact. Our focus on user experience and cutting-edge design ensures your app will not only be loved but also utilized frequently."
              imageSrc="/Image right DetailMobile.svg"
              className="right-img"
            />
          );
        } else {
          // Pass the className to DetailSec component
          return (
            <DetailSec
              key={index}
              className={className}
              index={index}
              Title={detail.Title}
              SubHeading={detail.SubHeading}
              imageSrc={detail.imageSrc}
            />
          );
        }
      })}

      <FooterCon
        Title="Embark on Your Mobile Journey with"
        TitleOverSpan=""
        SubHeading="Forget the path to digital excellence with a mobile app from Softylus Technologies. Our team is ready to transform your concept into a reality with custom mobile solutions that resonate with your business objectives. Begin your venture into mobile innovation with us today.          "
      />
      <Footer />
    </>
  );
};

export default DetailMobile;

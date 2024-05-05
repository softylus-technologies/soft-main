import React, { useState, useEffect } from "react";
import DetailHeader from "../components/DetailHeader";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import DetailHero from "../components/DetailHero";
import FooterCon from "../components/FooterCon";
import DetailSec from "../components/DetailSec";
import "../style/DetailDigitalMarketing.css";
import detailData from "../sources/DetailDigitalMarketing.json";
import ServicesExplain from "../components/ServicesExplain";

const DetailDigitalMarketing = () => {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    // Load the detail data from the JSON file
    setDetails(detailData);
  }, [details]);

  return (
    <>
      <NavBar />
      <DetailHeader
        Title="Top Digital Marketing Services by"
        TitleOverSpan="Technologies"
      />
      <DetailHero
        Title="Who We Are: A Leading Digital Marketing Agency"
        SubHeading="At Softylus Technologies, we understand the importance of digital marketing in today's competitive landscape. Our team of digital marketing experts is dedicated to helping businesses achieve their online goals through data-driven strategies and proven tactics. From SEO to PPC, social media to email marketing, we work tirelessly to ensure that your brand reaches the right audience, generates quality leads, and drives growth."
        imageSrc="/Images Detail digital marketing.svg"
      />
      {details.map((detail, index) => {
        // Determine if the index is odd or even for the class name
        const className =
          index % 2 === 0 ? "section-image-right" : "section-image-left";
        console.log(className);

        // Check if a different component should be rendered for the 4th and 5th items
        if (index === 3) {
          return (
            <ServicesExplain
              imageSrc="/CASE STUDY IMG.svg"
              logo="/Vend.svg"
              Title="XYZ's Digital Marketing Success with Softylus"
              SubHeading="In our detailed case study, we dissect how Softylus Technologies transformed XYZ's online presence through digital marketing. This project showcases our ability to increase organic traffic, improve search engine rankings, and boost conversion rates. By leveraging our data-driven approach and expertise, we helped XYZ achieve their online goals and stay ahead of the competition."
              buttonText="Create yours today"
              className="btn-ServicesExplain-hide"
            />
          );
        } else if (index === 4) {
          return (
            <DetailHero
              Title="Customized Digital Marketing Solutions for Your Business"
              SubHeading="At Softylus Technologies, we understand that every business is unique. That's why we offer customized digital marketing solutions tailored to your specific needs and goals. Whether you're a small business or a large enterprise, we have the expertise and resources to help you achieve your online objectives."
              imageSrc="/Image right Detail digital marketing.svg"
              className="right-img"
            />
          );
        } else {
          // Pass the className to DetailSec component
          return (
            <DetailSec
              key={index}
              className={className}
              Title={detail.Title}
              index={index}
              SubHeading={detail.SubHeading}
              imageSrc={detail.imageSrc}
            />
          );
        }
      })}

      <FooterCon
        Title="Partner with"
        TitleOverSpan="for Premier Digital Marketing Services"
        SubHeading="Ready to take your online presence to the next level? Connect with our expert team to discuss how we can help you achieve your digital marketing goals. We're dedicated to delivering customized solutions that align with your strategic objectives. Start your journey towards online success today."
      />
      <Footer />
    </>
  );
};

export default DetailDigitalMarketing;

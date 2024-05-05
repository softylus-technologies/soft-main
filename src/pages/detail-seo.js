import React, { useState, useEffect } from "react";
import DetailHeader from "../components/DetailHeader";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import DetailHero from "../components/DetailHero";
import FooterCon from "../components/FooterCon";
import DetailSec from "../components/DetailSec";
import "../style/DetailSeo.css";
import detailData from "../sources/DetailSeo.json";
import ServicesExplain from "../components/ServicesExplain";

const DetailSeo = () => {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    // Load the detail data from the JSON file
    setDetails(detailData);
  }, [details]);

  return (
    <>
      <NavBar />
      <DetailHeader Title="SEO Services at" TitleOverSpan="Technologies" />
      <DetailHero
        Title="Who We Are: A Leading SEO Agency"
        SubHeading="At Softylus Technologies, we understand the importance of SEO in today's digital landscape. Our team of SEO experts is dedicated to helping businesses achieve their online goals through data-driven strategies and proven tactics. From keyword research to on-page optimization, we work tirelessly to ensure that your website ranks higher, attracts more traffic, and generates more leads."
        imageSrc="/Images DetailSeo.svg"
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
              Title="XYZ's SEO Success with Softylus"
              SubHeading="In our detailed case study, we dissect how Softylus Technologies transformed XYZ's online presence through SEO. This project showcases our ability to increase organic traffic, improve search engine rankings, and boost conversion rates. By leveraging our data-driven approach and expertise, we helped XYZ achieve their online goals and stay ahead of the competition. "
              buttonText="Create yours today"
              className="btn-ServicesExplain-hide"
            />
          );
        } else if (index === 4) {
          return (
            <DetailHero
              Title="Customized SEO Solutions for Your Business"
              SubHeading="At Softylus Technologies, we understand that every business is unique. That's why we offer customized SEO solutions tailored to your specific needs and goals. Whether you're a small business or a large enterprise, we have the expertise and resources to help you achieve your online objectives."
              imageSrc="/Image right DetailSeo.svg"
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
        TitleOverSpan="for Premier SEO Services"
        SubHeading="Ready to take your online presence to the next level? Connect with our expert team to discuss how we can help you achieve your SEO goals. We're dedicated to delivering customized solutions that align with your strategic objectives. Start your journey towards online success today."
      />
      <Footer />
    </>
  );
};

export default DetailSeo;

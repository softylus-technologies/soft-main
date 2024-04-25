import React, { useState, useEffect } from "react";
import DetailHeader from "../components/DetailHeader";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import DetailHero from "../components/DetailHero";
import FooterCon from "../components/FooterCon";
import DetailSec from "../components/DetailSec";
import "../style/DetailWebDev.css";
import detailData from "../sources/DetailWebDev.json";
import ServicesExplain from "../components/ServicesExplain";
import TowSideLayout from "../components/tow-side-layout/TowSideLayout";
const DetailWebDev = () => {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    // Load the detail data from the JSON file
    setDetails(detailData);
  }, [details]);

  return (
    <>
      <NavBar />
      <DetailHeader
        Title="See if"
        TitleOverSpan="is right for you.Let’s make something great"
      />

      <DetailHero
        Title="Who We Are: A Web Development Powerhouse"
        SubHeading="At Softylus Technologies, we pride ourselves on being at the forefront of web development innovation. With a team that's passionate about crafting bespoke web solutions, we empower businesses to elevate their online presence. From dynamic websites to scalable e-commerce platforms, our solutions are designed to deliver user-centric experiences that not only engage but also convert."
        imageSrc="/image 45.svg"
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
              Title="Vend's Web Development Journey with Softylus  "
              SubHeading="In our detailed case study, we dissect how Softylus Technologies transformed Vend's e-commerce experience. This project showcases our ability to streamline online shopping platforms, integrate advanced features for inventory management, and enhance customer interaction, all while boosting site performance and SEO rankings.  "
              buttonText="Create yours today"
              className="btn-ServicesExplain"
            />
          );
        } else if (index === 4) {
          return (
            <DetailHero
              Title="Why Web Development Matters?"
              SubHeading="Web development is more than just coding; it's about building a digital gateway for your business. A well-developed website serves as the foundational platform for digital marketing, brand storytelling, and customer engagement. In the digital age, a professionally developed website is not a luxury—it's a necessity for staying competitive.              "
              imageSrc="/Image right.svg"
              className="right-img"
            />
          );
        } else {
          // Pass the className to DetailSec component
          return (
            <DetailSec
              key={index}
              index={index}
              className={className}
              Title={detail.Title}
              SubHeading={detail.SubHeading}
              imageSrc={detail.imageSrc}
            />
          );
        }
      })}

      <FooterCon
        Title="Partner with"
        TitleOverSpan="for Premier Web Development Services"
        SubHeading="Ready to take your digital presence to the next level? Connect with our expert team to discuss how we can bring your web development project to life. We're dedicated to delivering tailored solutions that align with your strategic objectives. Start your journey towards a transformative web experience today."
      />
      <Footer />
    </>
  );
};

export default DetailWebDev;

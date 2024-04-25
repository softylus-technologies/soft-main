import React from "react";
import "./style/Cards.css";
import { StaticImage } from "gatsby-plugin-image";
import { Button } from "reactstrap";
const Cards = () => {
  return (
    <section className="container-cards">
      <header className="">
        <h1 className="text-4xl md:text-5xl">Name any, we got many</h1>
        <p className="max-w-100 md:max-w-[80%] text-center mx-auto">
          We are committed to maintaining the quality of our service for you.
          Customer-Focused, Results-Oriented, and Standards-Driven.
        </p>
      </header>
      <article className="pl-4 pr-4 md:pl-0 md:pr-0 grid grid-rows-6 grid-cols-1 grid-flow-col gap-4 md:grid-cols-2 md:grid-rows-3 lg:grid-rows-2 lg:grid-cols-3 ">
        <div className="bg-mainDark flex flex-col px-4 py-3 gap-2 items-start text-left rounded-[20px]">
          <img
            src="/Softwaredev.svg"
            alt="Software and Web Development"
            className="w-[60px] h-[60px]"
          />
          <h2 className="text-2xl m-0">Software and web development</h2>
          <p>
            Developing websites, web applications, custom software requirements,
            and complex system integrations.
          </p>
        </div>
        <div className="bg-mainDark flex flex-col px-4 py-3 gap-2 items-start text-left rounded-[20px]">
          <img
            src="/Mobiledev.svg"
            alt="Mobile Development Services"
            className="w-[60px] h-[60px]"
          />
          <h2 className="text-2xl m-0">Mobile development</h2>
          <p>
            Looking to join the mobile revolutionary era and have your own app
            launched? Your search ends here.
          </p>
        </div>
        <div className="bg-mainDark flex flex-col px-4 py-3 gap-2 items-start text-left rounded-[20px]">
          <img
            src="/UXDesign.svg"
            alt="UI/UX Design Services"
            className="w-[60px] h-[60px]"
          />
          <h2 className="text-2xl m-0">UI/UX design</h2>
          <p>
            Designing user interfaces and user experiences for engaging and
            intuitive digital products.
          </p>
        </div>
        <div className="bg-mainDark flex flex-col px-4 py-3 gap-2 items-start text-left rounded-[20px]">
          <img
            src="/Softwaredev (1).svg"
            alt="Maintenance and Update Services"
            className="w-[60px] h-[60px]"
          />
          <h2 className="text-2xl m-0">Maintenance and update</h2>
          <p>
            After the product is delivered, we offer a 3-month-free follow-up
            because if we can spoil our customers, then why not?
          </p>
        </div>
        <div className="bg-mainDark flex flex-col px-4 py-3 gap-2 items-start text-left rounded-[20px]">
          <img
            src="/Mobiledev (1).svg"
            alt="Analysis and Planning Services"
            className="w-[60px] h-[60px]"
          />
          <h2 className="text-2xl m-0">Analysis and planning</h2>
          <p>
            At this stage, you’ll have the chance to share your thoughts and
            requirements with the teams responsible to assist you with that.
          </p>
        </div>
        <div className="bg-mainDark flex flex-col px-4 py-3 gap-2 items-start text-left rounded-[20px]">
          <img
            src="/Softwaredev (2).svg"
            alt="SEO Services"
            className="w-[60px] h-[60px]"
          />
          <h2 className="text-2xl m-0">SEO services</h2>
          <p>
            At Softylus Technologies, we understand the importance of SEO in
            today's digital landscape.
          </p>
        </div>
      </article>
      <Button
        className="btn-card"
        aria-label="See more services"
        href="/Services"
      >
        See more services
      </Button>
    </section>
  );
};

export default Cards;

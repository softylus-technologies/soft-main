import React from "react";
import "./style/Cards.css";
import { StaticImage } from "gatsby-plugin-image";
import { Button } from "reactstrap";
import { Link } from "gatsby";
import SvgIcon from "./SvgIcon";

const Cards = () => {
  const l1 = (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.7087 39.5208H16.667C8.33366 39.5208 4.16699 37.4375 4.16699 27.0208V16.6041C4.16699 8.27079 8.33366 4.10413 16.667 4.10413H33.3337C41.667 4.10413 45.8337 8.27079 45.8337 16.6041V27.0208C45.8337 35.3541 41.667 39.5208 33.3337 39.5208H32.292C31.6462 39.5208 31.0212 39.8333 30.6254 40.3542L27.5004 44.5208C26.1254 46.3542 23.8753 46.3542 22.5003 44.5208L19.3753 40.3542C19.042 39.8958 18.292 39.5208 17.7087 39.5208Z"
        stroke="#F5F5F5"
        stroke-width="3.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.6667 18.125L12.5 22.2917L16.6667 26.4583"
        stroke="#F5F5F5"
        stroke-width="3.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M33.333 18.125L37.4997 22.2917L33.333 26.4583"
        stroke="#F5F5F5"
        stroke-width="3.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M27.0837 17.4375L22.917 27.1459"
        stroke="#F5F5F5"
        stroke-width="3.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );

  const services_info = [
    {
      title: "Software and web development",
      description:
        "Developing websites, web applications, custom software requirements, and complex system integrations.",
      link: "/detail-web-dev",
      icon: `<svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.7087 39.5208H16.667C8.33366 39.5208 4.16699 37.4375 4.16699 27.0208V16.6041C4.16699 8.27079 8.33366 4.10413 16.667 4.10413H33.3337C41.667 4.10413 45.8337 8.27079 45.8337 16.6041V27.0208C45.8337 35.3541 41.667 39.5208 33.3337 39.5208H32.292C31.6462 39.5208 31.0212 39.8333 30.6254 40.3542L27.5004 44.5208C26.1254 46.3542 23.8753 46.3542 22.5003 44.5208L19.3753 40.3542C19.042 39.8958 18.292 39.5208 17.7087 39.5208Z"
            stroke="#F5F5F5"
            stroke-width="3.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.6667 18.125L12.5 22.2917L16.6667 26.4583"
            stroke="#F5F5F5"
            stroke-width="3.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M33.333 18.125L37.4997 22.2917L33.333 26.4583"
            stroke="#F5F5F5"
            stroke-width="3.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M27.0837 17.4375L22.917 27.1459"
            stroke="#F5F5F5"
            stroke-width="3.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>`,
    },
    {
      title: "Maintenance and update",
      description:
        "After the product is delivered, we offer a 3-month-free follow-up because if we can spoil our customers, then why not?",
      link: "#",
      icon: `<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9">
<path d="M18.7503 45.8334H31.2503C41.667 45.8334 45.8337 41.6667 45.8337 31.25V18.75C45.8337 8.33335 41.667 4.16669 31.2503 4.16669H18.7503C8.33366 4.16669 4.16699 8.33335 4.16699 18.75V31.25C4.16699 41.6667 8.33366 45.8334 18.7503 45.8334Z" stroke="white" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M32.4375 38.5417V30.4167" stroke="white" stroke-width="3.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M32.4375 15.5208V11.4583" stroke="white" stroke-width="3.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M32.4372 26.3541C35.4287 26.3541 37.8538 23.929 37.8538 20.9375C37.8538 17.9459 35.4287 15.5208 32.4372 15.5208C29.4456 15.5208 27.0205 17.9459 27.0205 20.9375C27.0205 23.929 29.4456 26.3541 32.4372 26.3541Z" stroke="white" stroke-width="3.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5625 38.5417V34.4792" stroke="white" stroke-width="3.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5625 19.5833V11.4583" stroke="white" stroke-width="3.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5622 34.4791C20.5537 34.4791 22.9788 32.054 22.9788 29.0625C22.9788 26.0709 20.5537 23.6458 17.5622 23.6458C14.5706 23.6458 12.1455 26.0709 12.1455 29.0625C12.1455 32.054 14.5706 34.4791 17.5622 34.4791Z" stroke="white" stroke-width="3.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</g>
        </svg>`,
    },
    {
      title: "Mobile development",
      description:
        "Looking to join the mobile revolutionary era and have your own app launched? Your search ends here.",
      link: "/detail-mobile",
      icon: `<svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.9">
            <mask
              id="mask0_782_19034"
              style="mask-type:luminance"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="50"
              height="50"
            >
              <path
                d="M48 48V2H2V48H48Z"
                fill="white"
                stroke="white"
                stroke-width="4"
              />
            </mask>
            <g mask="url(#mask0_782_19034)">
              <path
                d="M40.334 10.8398V7.80054C40.334 4.5645 37.7106 1.94116 34.4746 1.94116H15.5293C12.2933 1.94116 9.66992 4.5645 9.66992 7.80054V42.1755C9.66992 45.4116 12.2933 48.0349 15.5293 48.0349H34.4746C37.7106 48.0349 40.334 45.4116 40.334 42.1755V38.4765"
                stroke="#F5F5F5"
                stroke-width="4"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
              <path
                d="M25.0479 41.1133C25.0479 41.1105 25.0469 41.1028 25.0434 41.0945C25.0404 41.0874 25.0369 41.0829 25.0341 41.0801C25.0313 41.0773 25.0269 41.0739 25.0198 41.0709C25.0114 41.0674 25.0037 41.0664 25.001 41.0664C24.9982 41.0664 24.9905 41.0674 24.9821 41.0709C24.9751 41.0739 24.9706 41.0773 24.9678 41.0801C24.965 41.0829 24.9616 41.0874 24.9586 41.0945C24.9551 41.1028 24.9541 41.1105 24.9541 41.1133C24.9541 41.116 24.9551 41.1237 24.9586 41.1321C24.9616 41.1392 24.965 41.1436 24.9678 41.1464C24.9706 41.1492 24.9751 41.1527 24.9821 41.1557C24.9905 41.1592 24.9982 41.1602 25.001 41.1602C25.0037 41.1602 25.0114 41.1592 25.0198 41.1557C25.0269 41.1527 25.0313 41.1492 25.0341 41.1464C25.0369 41.1436 25.0404 41.1392 25.0434 41.1321C25.0469 41.1237 25.0479 41.116 25.0479 41.1133Z"
                fill="white"
                stroke="#F5F5F5"
                stroke-width="4"
              />
              <path
                d="M23.0479 8.88672H26.9541"
                stroke="#F5F5F5"
                stroke-width="4"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
              <mask id="path-5-inside-1_782_19034" fill="white">
                <path d="M31.573 34.7656C32.4597 34.7656 33.3359 34.1812 33.5764 33.3352L38.0124 17.7298C38.3685 16.4773 37.4192 15.2344 36.1068 15.2344C35.22 15.2344 34.4415 15.8188 34.201 16.6648L29.7649 32.2702C29.4089 33.5227 30.2606 34.7656 31.573 34.7656Z" />
              </mask>
              <path
                d="M31.573 34.7656C32.4597 34.7656 33.3359 34.1812 33.5764 33.3352L38.0124 17.7298C38.3685 16.4773 37.4192 15.2344 36.1068 15.2344C35.22 15.2344 34.4415 15.8188 34.201 16.6648L29.7649 32.2702C29.4089 33.5227 30.2606 34.7656 31.573 34.7656Z"
                fill="white"
              />
              <path
                d="M33.5764 33.3352L37.4239 34.4289L37.4239 34.4289L33.5764 33.3352ZM38.0124 17.7298L34.1648 16.6361L34.1649 16.636L38.0124 17.7298ZM34.201 16.6648L30.3534 15.5711L30.3534 15.5711L34.201 16.6648ZM29.7649 32.2702L25.9172 31.1767L25.9173 31.1765L29.7649 32.2702ZM31.573 30.7656C31.1567 30.7656 30.8032 30.8948 30.5238 31.0903C30.2401 31.2888 29.8946 31.6582 29.7288 32.2414L37.4239 34.4289C36.6296 37.223 33.9986 38.7656 31.573 38.7656V30.7656ZM29.7288 32.2414L34.1648 16.6361L41.86 18.8235L37.4239 34.4289L29.7288 32.2414ZM34.1649 16.636C33.782 17.9827 34.8108 19.2344 36.1068 19.2344V11.2344C40.0275 11.2344 42.9549 14.972 41.86 18.8236L34.1649 16.636ZM36.1068 19.2344C36.9877 19.2344 37.7947 18.6517 38.0485 17.7586L30.3534 15.5711C31.0884 12.9858 33.4524 11.2344 36.1068 11.2344V19.2344ZM38.0485 17.7586L33.6124 33.364L25.9173 31.1765L30.3534 15.5711L38.0485 17.7586ZM33.6125 33.3637C33.7655 32.8253 33.6758 32.1933 33.3025 31.6687C32.9122 31.1201 32.2581 30.7656 31.573 30.7656V38.7656C27.3554 38.7656 24.9052 34.7375 25.9172 31.1767L33.6125 33.3637Z"
                fill="#F5F5F5"
                mask="url(#path-5-inside-1_782_19034)"
              />
              <path
                d="M25.002 19.043L20.1654 23.098C18.9318 24.1457 18.9318 26.0496 20.1654 27.0973L25.002 31.1523"
                stroke="#F5F5F5"
                stroke-width="4"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M42.3838 19.043L47.1227 23.098C48.3563 24.1457 48.3563 26.0496 47.1227 27.0973L42.3838 31.1523"
                stroke="#F5F5F5"
                stroke-width="4"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg>`,
    },
    {
      title: "Analysis and planning",
      description:
        "At this stage, you’ll have the chance to share your thoughts and requirements with the teams responsible to assist you with that.",
      link: "#",
      icon: `<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9">
<path d="M45.8337 27.0834V18.75C45.8337 8.33335 41.667 4.16669 31.2503 4.16669H18.7503C8.33366 4.16669 4.16699 8.33335 4.16699 18.75V31.25C4.16699 41.6667 8.33366 45.8334 18.7503 45.8334H27.0837" stroke="#F5F5F5" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.2705 30.1875L20.2289 23.75C20.9372 22.8333 22.2497 22.6667 23.1664 23.375L26.9789 26.375C27.8956 27.0834 29.208 26.9167 29.9163 26.0209L34.7289 19.8125" stroke="#F5F5F5" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M40.5832 32.9583L41.1666 34.1458C41.4582 34.7291 42.1874 35.2708 42.8332 35.3958L43.6249 35.5208C45.9999 35.9166 46.5624 37.6666 44.854 39.3958L44.1248 40.125C43.6457 40.625 43.3749 41.5833 43.5207 42.25L43.6249 42.6875C44.2707 45.5625 42.7499 46.6666 40.2499 45.1666L39.7082 44.8541C39.0624 44.4791 38.0207 44.4791 37.3749 44.8541L36.8332 45.1666C34.3123 46.6874 32.7915 45.5625 33.4582 42.6875L33.5623 42.25C33.7082 41.5833 33.4374 40.625 32.9582 40.125L32.229 39.3958C30.5207 37.6666 31.0832 35.9166 33.4582 35.5208L34.2499 35.3958C34.8749 35.2916 35.6248 34.7291 35.9165 34.1458L36.4998 32.9583C37.6248 30.6875 39.4582 30.6875 40.5832 32.9583Z" stroke="#F5F5F5" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
        </svg>`,
    },
    {
      title: "UI/UX design",
      description:
        "Designing user interfaces and user experiences for engaging and intuitive digital products.",
      link: "#",
      icon: `<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9">
<path d="M22.3961 46.8751H27.6461C29.6461 46.8751 30.9378 45.4584 30.5628 43.7292L29.7086 39.9585H20.3336L19.4794 43.7292C19.1044 45.3542 20.5211 46.8751 22.3961 46.8751Z" stroke="#F5F5F5" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M29.7088 39.9376L33.313 36.7292C35.3338 34.9376 35.4171 33.6874 33.813 31.6666L27.4588 23.6042C26.1255 21.9167 23.938 21.9167 22.6046 23.6042L16.2505 31.6666C14.6463 33.6874 14.6463 35.0001 16.7505 36.7292L20.3546 39.9376" stroke="#F5F5F5" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.0215 23.1666V28.4375" stroke="#F5F5F5" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.2295 10.8126L21.6045 9.1875C20.6253 8.20833 20.6253 6.6251 21.6045 5.64594L23.2295 4.02087C24.2087 3.04171 25.792 3.04171 26.7712 4.02087L28.3961 5.64594C29.3753 6.6251 29.3753 8.20833 28.3961 9.1875L26.7712 10.8126C25.792 11.7917 24.2087 11.7917 23.2295 10.8126Z" stroke="#F5F5F5" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M40.5205 20.4375H42.8122C44.1872 20.4375 45.3122 21.5625 45.3122 22.9375V25.2291C45.3122 26.6041 44.1872 27.7293 42.8122 27.7293H40.5205C39.1455 27.7293 38.0205 26.6041 38.0205 25.2291V22.9375C38.0205 21.5625 39.1455 20.4375 40.5205 20.4375Z" stroke="#F5F5F5" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.47917 20.4375H7.18749C5.81249 20.4375 4.6875 21.5625 4.6875 22.9375V25.2291C4.6875 26.6041 5.81249 27.7293 7.18749 27.7293H9.47917C10.8542 27.7293 11.9792 26.6041 11.9792 25.2291V22.9375C11.9792 21.5625 10.8542 20.4375 9.47917 20.4375Z" stroke="#F5F5F5" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M38.6247 21.0416L27.583 10" stroke="#F5F5F5" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.375 21.0416L22.4167 10" stroke="#F5F5F5" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
        </svg>`,
    },
    {
      title: "SEO services",
      description:
        "At Softylus Technologies, we understand the importance of SEO in today's digital landscape.",
      link: "/detail-seo",
      icon: `<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.0628 29.1667H8.33366C6.04199 29.1667 4.16699 31.0417 4.16699 33.3334V45.8334H18.0628V29.1667Z" stroke="#F5F5F5" stroke-width="3.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.7712 20.8333H22.2087C19.917 20.8333 18.042 22.7083 18.042 25V45.8333H31.9378V25C31.9378 22.7083 30.0837 20.8333 27.7712 20.8333Z" stroke="#F5F5F5" stroke-width="3.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M41.6667 35.4167H31.9375V45.8334H45.8333V39.5834C45.8333 37.2917 43.9583 35.4167 41.6667 35.4167Z" stroke="#F5F5F5" stroke-width="3.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.0833 4.3125L27.1875 6.52083C27.3333 6.83333 27.7292 7.12499 28.0625 7.16665L30.0625 7.5C31.3333 7.70833 31.6458 8.64579 30.7292 9.54162L29.1667 11.1041C28.8958 11.375 28.75 11.875 28.8333 12.2291L29.2708 14.1458C29.625 15.6667 28.8125 16.25 27.4792 15.4583L25.6042 14.3542C25.2708 14.1458 24.7083 14.1458 24.375 14.3542L22.5 15.4583C21.1667 16.25 20.3542 15.6667 20.7083 14.1458L21.1458 12.2291C21.2292 11.875 21.0833 11.3541 20.8125 11.1041L19.2708 9.56247C18.3542 8.64581 18.6458 7.72912 19.9375 7.52079L21.9375 7.18751C22.2708 7.12501 22.6667 6.83335 22.8125 6.54168L23.9167 4.33329C24.5208 3.12495 25.4792 3.125 26.0833 4.3125Z" stroke="#F5F5F5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
    },
  ];

  // console.log("CARDSSS: ", services_info[1].icon.props.length);
  console.log("CARDSSS: ", services_info[1].icon);

  return (
    <section className="services-container container-cards">
      <header className="heading-container">
        <h1 className="text-4xl md:text-5xl">Name any, we got many</h1>
        <p className="max-w-100 md:max-w-[80%] text-center mx-auto">
          We are committed to maintaining the quality of our service for you.
          Customer-Focused, Results-Oriented, and Standards-Driven.
        </p>
      </header>
      <article className="services-cards-container pl-4 pr-4 md:pl-0 md:pr-0 grid grid-rows-6 grid-cols-1 grid-flow-col md:grid-cols-1 md:grid-rows-6 lg:grid-rows-2 lg:grid-cols-3 ">
        {services_info.map((card) => (
          <Link to={card.link}>
            <div className="bg-mainDark flex flex-col px-4 py-3 items-start text-left rounded-[20px] card-hover">
              <SvgIcon svgContent={card.icon} />
              <h2 className="service-name text-2xl m-0">{card.title}</h2>
              <p className="service-description">{card.description}</p>
            </div>
          </Link>
        ))}
      </article>
      <Button
        className="see-more-services-btn btn-card"
        aria-label="See more services"
        href="/services"
      >
        See more services
      </Button>
    </section>
  );
};

export default Cards;

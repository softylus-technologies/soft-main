import React,{useContext} from "react";
import "./style/ServicesExplain.css";
import { Button } from "reactstrap";
import { Link } from "gatsby";
import { LanguageContext } from '../context/LanguageContext';

const ServicesExplain = ({
  Title,
  SubHeading,
  buttonText,
  imageSrc,
  className,
  logo,
}) => {
  const { locale } = useContext(LanguageContext);

  return (
    <section className="ServicesExplain-sec">
      <div className="ServicesExplain-container">
        <div className="ServicesExplain-img-sec desktop">
          <img src={imageSrc} alt="Description of the main image" />
        </div>
        <div className="ServicesExplain-title-sec">
          <img src={logo} alt="Description of the main image" />
          <div className="ServicesExplain-title-content">
            <h1 className="h1-text">{Title}</h1>{" "}
            <div className="ServicesExplain-img-sec mobile">
              <img src={imageSrc} alt="Description of the main image" />
            </div>
            {/* Ensure that <h1> is used once per page for the main title */}
            <p className="p-text">{SubHeading}</p>
          </div>
          <Link
            to={`/${locale}/contact-us`}
            className="no-underline font-bold inline-flex items-center justify-center px-4 py-3 text-base  text-main bg-white  hover:opacity-85 border-0 rounded-full  focus:ring-10 w-auto"
          >
            {buttonText}
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesExplain;

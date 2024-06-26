import React from "react";
import "./style/FooterCon.css";
import { Button } from "reactstrap";
import { Link } from "gatsby";

const FooterCon = ({ Title, TitleOverSpan, SubHeading, hideSoftylus,buttonTitle }) => {
  return (
    <footer className="FooterCon-container">
      <div className="content-FooterCon">
        <h2>
          {Title} {hideSoftylus ? null : <span style={{ display: "block" }}>Softylus</span>} {TitleOverSpan}
        </h2>
        <p>{SubHeading}</p>
        <Link
          to="/contact-us/"
          className="no-underline inline-flex items-center justify-center px-4 py-3 text-base font-medium text-main bg-white hover:opacity-85 border-0 rounded-full focus:ring-10 w-auto"
        >
          {buttonTitle ? buttonTitle : "Get free consultation"}
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
    </footer>
  );
};

export default FooterCon;

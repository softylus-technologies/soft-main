import React from "react";
import "./style/FooterCon.css";
import { Button } from "reactstrap";
import { Link } from "gatsby";
const FooterCon = ({ Title, TitleOverSpan, SubHeading }) => {
  return (
    <footer className="FooterCon-container">
      <div className="content-FooterCon">
        <h2>
          {Title} <span>Softylus</span> {TitleOverSpan}
        </h2>
        <p>{SubHeading}</p>
        <Link
          to="/ContactUs/"
          className="no-underline inline-flex items-center justify-center px-4 py-3 text-base font-medium text-main bg-white  hover:opacity-85 border-0 rounded-full  focus:ring-10 w-auto"
        >
          Get free consultation
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </footer>
  );
};

export default FooterCon;

import React,{useContext} from "react";
import "./style/FooterCon.css";
import { Link } from "gatsby";
import { FormattedMessage } from 'react-intl';
import { LanguageContext } from '../context/LanguageContext';

const FooterCon = ({ titleId, titleOverSpanId, subHeadingId, hideSoftylus, buttonTitleId }) => {
  const { locale } = useContext(LanguageContext);

  return (
    <footer className="FooterCon-container">
      <div className="content-FooterCon">
        <h2>
          <FormattedMessage id={titleId} />
          {hideSoftylus ? null : <span style={{ display: "inline" }}> Softylus </span>}
          <FormattedMessage id={titleOverSpanId} />
        </h2>
        <p><FormattedMessage id={subHeadingId} /></p>
        <Link
          to={`/${locale}/contact-us`}
          className="no-underline inline-flex items-center justify-center text-base font-bold text-main bg-white hover:opacity-85 border-0 rounded-full focus:ring-10"
        >
          <FormattedMessage id={buttonTitleId || "index.FooterCon.buttonTitle"} />
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
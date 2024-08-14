import React from "react";
import "./style/Footer.css";
import { Link } from "gatsby";
import { FormattedMessage, useIntl } from 'react-intl';

const Footer = () => {
  const intl = useIntl();

  return (
    <>
      <footer className="footer-bottom bg-transparent py-20 relative">
        <div className="mx-auto w-full md:px-[70px] ">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
            <div className="company-info">
              <img
                src="/Logo_Softylus.svg"
                alt={intl.formatMessage({ id: "footer.logoAlt" })}
                className="logo"
              />
              <address>
                <p><FormattedMessage id="footer.addressSaudi" /></p>
                <p><FormattedMessage id="footer.addressJordan" /></p>
              </address>
              <div className="social-icon">
                <Link
                  href="https://www.linkedin.com/company/softylus"
                  aria-label={intl.formatMessage({ id: "footer.linkedinAriaLabel" })}
                >
                  <img src="/linkedin-icon.svg" alt={intl.formatMessage({ id: "footer.linkedinAlt" })} />
                </Link>
                <Link
                  href="https://web.facebook.com/softylus?_rdc=1&_rdr"
                  aria-label={intl.formatMessage({ id: "footer.facebookAriaLabel" })}
                >
                  <img src="/facebook-icon.svg" alt={intl.formatMessage({ id: "footer.facebookAlt" })} />
                </Link>
              </div>
            </div>
            <div className="company-links">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                <FormattedMessage id="footer.companyTitle" />
              </h2>
              <ul className="footer-links-list text-gray-500 dark:text-gray-400 font-medium p-0">
                <li>
                  <Link to="/about" className="no-underline">
                    <FormattedMessage id="footer.aboutLink" />
                  </Link>
                </li>
                <li>
                  <Link className="no-underline" to="/industries">
                    <FormattedMessage id="footer.industriesLink" />
                  </Link>
                </li>
                <li>
                  <Link className="no-underline" to="/careers">
                    <FormattedMessage id="footer.careersLink" />
                  </Link>
                </li>
                <li>
                  <Link className="no-underline" to="/clients">
                    <FormattedMessage id="footer.clientsLink" />
                  </Link>
                </li>
                <li>
                  <Link className="no-underline" to="/contact-us">
                    <FormattedMessage id="footer.contactLink" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="company-links">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                <FormattedMessage id="footer.servicesTitle" />
              </h2>
              <ul className="footer-links-list text-gray-500 dark:text-gray-400 font-medium p-0">
                <li>
                  <Link className="no-underline" to="/detail-web-dev">
                    <FormattedMessage id="footer.webDevLink" />
                  </Link>
                </li>
                <li>
                  <Link className="no-underline" to="/detail-mobile">
                    <FormattedMessage id="footer.mobileDevLink" />
                  </Link>
                </li>
                <li>
                  <Link className="no-underline" to="/detail-seo">
                    <FormattedMessage id="footer.seoLink" />
                  </Link>
                </li>
                <li>
                  <Link className="no-underline" to="/detail-digital-marketing">
                    <FormattedMessage id="footer.digitalMarketingLink" />
                  </Link>
                </li>
                <li>
                  <Link className="no-underline" to="/detail-smm">
                    <FormattedMessage id="footer.smmLink" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <img
          className="circle bottom-0 !left-0"
          id="circle1"
          src="/Vector (7).svg"
          alt={intl.formatMessage({ id: "footer.decorativeImageAlt" })}
        />
      </footer>
    </>
  );
};

export default Footer;